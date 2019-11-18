$(function() {
    var imagesPreview = function(input, placeToInsertImagePreview, imageResult0, imageResult1, imageResult2, imageResult3, pred1, pred2, pred3) {
        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = function(event) {
                    $($.parseHTML('<img width="100" height="100">' + '    ')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);

                    var image = new Image();
                    image.src = event.target.result

                    setTimeout(function() {
                        var canvas = document.createElement('canvas');
                        var context = canvas.getContext('2d');
                        canvas.id = 'myCanvas'
                        context.drawImage(image, 0, 0);
                        var pix = context.getImageData(0, 0, image.width, image.height);

                        let dsize = new cv.Size(100, 100);
                        let dst = new cv.Mat();
                        let src = cv.matFromImageData(pix);

                        // cv.cvtColor(src, src, cv.COLOR_BGR2HSV)
                        cv.resize(src, dst, dsize);
                        cv.cvtColor(dst, dst, cv.COLOR_RGB2HSV)
                        let srcVec = new cv.MatVector();

                        srcVec.push_back(dst);

                        let accumulate = false;
                        let channels = [1];
                        let histSize = [256];
                        let ranges = [0, 256];

                        let hist = new cv.Mat();
                        let mask = new cv.Mat();

                        cv.calcHist(srcVec, channels, mask, hist, histSize, ranges, accumulate)
                        cv.normalize(hist, hist)

                        resultofPredict = []
                        for (let i = 0; i < histSize[0]; i++) {
                            let binVal = hist.data32F[i]
                            resultofPredict.push(binVal)
                        }

                        var result = DecisionTree(resultofPredict)
                        if (result == 'Parasitized') {
                            result = 'Parasitic (abn)'
                        } else {
                            result = 'Normal (nor)'
                        }

                        $("#clickPred").click(function() {
                            var m = 0;
                            var j = 0;
                            var k = 0;
                            var num = 0
                            var lock = true
                            $('#clickPred').attr('disabled', lock);
                            var counterBack = setInterval(function() {
                                m = m + 5;
                                k = k + 5;
                                if (m <= 100) {
                                    document.getElementById('percent').innerHTML = m + '%';
                                }
                                if (m >= 0) {
                                    $('.progress-bar').css('width', k + '%');
                                }
                                if (m >= 110) {
                                    $($.parseHTML('<img width="20" height="20"><p>')).attr('src', event.target.result).appendTo(imageResult2);
                                    $($.parseHTML('<p>' + result)).appendTo(imageResult3);
                                    $('.progress-bar').css('width', num + '%');
                                    document.getElementById('percent').innerHTML = '0%';
                                    clearInterval(counterBack);
                                }
                            }, filesAmount * 10);
                        });




                    }, 10);
                }

                $($.parseHTML('<p>' + (i + 1))).appendTo(imageResult0);
                $($.parseHTML('<p>' + input.files[i].name)).appendTo(imageResult1);
                reader.readAsDataURL(input.files[i]);
            }
        }

    };
    $('#file-input').on('change', function() {
        var unlock = false
        $('#clickPred').attr('disabled', unlock);
        imagesPreview(this, 'div.preview', 'td.result0', 'td.result1', 'td.result2', 'td.result3', 'div.pred1', 'div.pred2', 'div.pred3');
    });
});
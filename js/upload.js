$(function() {
    var imagesPreview = function(input, placeToInsertImagePreview, imageResult0, imageResult1, imageResult2, imageResult3, total, parasitic, normal) {
        if (input.files) {
            var filesAmount = input.files.length;
            var count_para = 0
            var count_nor = 0

            var m = 0;
            var j = 0;
            var k = 0;
            var num = 100
            var count_round = 0
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
                        let histSize = [512];
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
                            result = 'Parasitic'
                            count_para++
                        } else {
                            result = 'Normal'
                            count_nor++
                        }

                        $("#clickPred").click(function() {
                            var lock = true
                            $('#clickPred').attr('disabled', lock);

                            var counterBack = setInterval(function() {
                                m = m + 5;
                                k = k + 6;
                                if (m <= 100) {
                                    document.getElementById('percent').innerHTML = m + '%';
                                }
                                if (m >= 0) {
                                    $('.progress-bar').css('width', k + '%');
                                }
                                if (m >= 110) {
                                    $($.parseHTML('<img width="20" height="20"><p>')).attr('src', event.target.result).appendTo(imageResult2);
                                    if (result == 'Parasitic') {
                                        $($.parseHTML('<p><b style="color:red;">' + result)).appendTo(imageResult3);
                                    } else {
                                        $($.parseHTML('<p><b style="color:blue;">' + result)).appendTo(imageResult3);
                                    }
                                    $('.progress-bar').css('width', num + '%');
                                    document.getElementById('percent').innerHTML = 'Succeses';
                                    count_round++
                                    if (count_round == filesAmount) {
                                        $($.parseHTML('<h5 class="card-title">' + i + '     ' + 'image')).appendTo(total);
                                        $($.parseHTML('<h5 class="card-title">' + count_para + '    ' + 'image')).appendTo(parasitic);
                                        $($.parseHTML('<h5 class="card-title">' + count_nor + '     ' + 'image')).appendTo(normal);
                                        let total_percent = 100
                                        let para_percent = (count_para * 100) / i
                                        let nor_percent = (count_nor * 100) / i
                                        $($.parseHTML('<p class="card-text">' + total_percent + '     ' + '%')).appendTo(total);
                                        $($.parseHTML('<p class="card-text">' + para_percent + '    ' + '%')).appendTo(parasitic);
                                        $($.parseHTML('<p class="card-text">' + nor_percent + '     ' + '%')).appendTo(normal);
                                    }
                                    clearInterval(counterBack);
                                }
                            }, (filesAmount / 2) * 10);
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
        $('#file-input').attr('disabled', true);
        $('#clickPred').attr('disabled', unlock);
        imagesPreview(this, 'div.preview', 'td.result0', 'td.result1', 'td.result2', 'td.result3', 'div#total', 'div#parasitic', 'div#normal');
    });
});
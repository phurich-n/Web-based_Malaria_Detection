$(function() {
    // var getPixels = require('get-image-pixels')
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview, imageResult1, imageResult2, imageResult3, pred1, pred2, pred3) {
        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img width="20" height="20">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);

                    var image = new Image();
                    image.src = event.target.result
                    setTimeout(function() {
                        var canvas = document.createElement('canvas');
                        var context = canvas.getContext('2d');
                        canvas.id = 'myCanvas'
                        context.drawImage(image, 0, 0);
                        var pix = context.getImageData(0, 0, image.width, image.height);
                        var imageData = pix.data;

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


                        $($.parseHTML('<img width="100" height="100" >')).attr('src', event.target.result).appendTo(imageResult1);

                    }, 10);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };
    $('#file-input').on('change', function() {
        $("#clickPred").click(function() {
            var i = 0;
            var j = 0;
            var k = 0;
            var num = 0
            var counterBack = setInterval(function() {
                i = i + 1;
                k = k + 1;
                if (i <= 100) {
                    document.getElementById('percent').innerHTML = i + '%';
                }
                if (i >= 0) {
                    $('.progress-bar').css('width', k + '%');
                }
                if (i >= 110) {
                    $('.progress-bar').css('width', num + '%');
                    document.getElementById('percent').innerHTML = '0%';
                    clearInterval(counterBack);
                }
            }, 100);
        });

        imagesPreview(this, 'div.cv', 'div.result1', 'div.result2', 'div.result3', 'div.pred1', 'div.pred2', 'div.pred3');
    });
});
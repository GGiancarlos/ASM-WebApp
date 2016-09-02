var imageArr = new Array(4);
imageArr[0] = "resources/meanshape.bmp";
imageArr[1] = "resources/194and17.png";
imageArr[2] = "resources/me17.png";
imageArr[3] = "resources/trainASM.png";
var id = function (el) {
    return document.getElementById(el);
};
var c = id('photolist');
var ul = id('scroll');
var photo = id('photo');
var i = 0;
if (c) {
    var marquee = function () {
        var j = i % 4;
        photo.src = imageArr[j];
        i++;
    };
    var speed = 2000;
    var timer = setInterval(marquee, speed);
}
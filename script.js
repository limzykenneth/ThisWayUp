$(document).ready(function() {
    var count = 0;
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    $(document).mousemove(function(e) {
        var x = e.pageX;
        var y = e.pageY;
        var rotateY = (360 / winWidth) * y;
        var rotateX = (360 / winHeight) * x;
        if (count === 0) {
            $('.cube').css({
                'transform': '  translate3d(50%, 30%, -1000px)   rotateY(' + rotateX + 'deg) rotateX(' + rotateY + 'deg)'
            });
        }
    });
    if (count === 0) {
        $(".cube").click(function() {
            $('.side.top, .side.left, .side.right,.side.bottom,.side.back,.side.front,.cube').addClass('flat');
            count += 1;
            $('.cube').css({
                'transform': ' translate3d(50%, 30%, -1000px) rotateY(' + '0' + 'deg) rotateX(' + '0' + 'deg) ',
                'transition': ' all 1.8s ease'
            });
            $(this).off();
            setTimeout(function() {
                transform(2, 'translate');
            }, 1800);
        });
    }
    var angleCount = 3;
    var centerX = ($(window).width() / 2) - 250;
    var centerY = ($(window).height() / 2) - 250;
    console.log(centerX);
    console.log(centerY);
    var scale = scalefactor();

    function transform(face, transformType) {
        //rotation matrix, with scale according to scale factor
        var value = [
            [0, -scale, scale, 0],
            [-scale, 0, 0, -scale],
            [0, scale, -scale, 0],
            [scale, 0, 0, scale]
        ];
        var moveTo = [
            [centerX, centerY + 480, '50% -46% 0'],
            [centerX + 480, centerY, '-46% 50% 0'],
            [centerX, centerY, '50% 50% 0'],
            [centerX - 480, centerY, '146% 50% 0'],
            [centerX, centerY - 480, '50% 146% 0'],
            [centerX, centerY - 960, '50% 242% 0']
        ];
        if (transformType == 'rotate') {
            //add one to the rotation counter
            angleCount += 1;
            if (angleCount > 3) {
                angleCount = 0;
            }
            //if not, just preserve previous rotation and translate
        }
        // transformation matrices for rotating around the face at position moveTo[]
        $('.cube').css({
            transform: 'matrix(' + value[3] + ',' 
            					 + moveTo[face][0] + ',' 
            					 + moveTo[face][1] + ')',
            transition: "all 0.3s ease",
            'transform-origin': moveTo[face][2]
        });
    }
    $('div.rotate-button').click(function() {
        // var id = $(this).attr('id');
        // transform(id, 'rotate');
    });
    $('div.translate').click(function() {
        var id = $(this).attr('id');
        transform(id, 'translate');
    });
});
//helper function to find window width
function orienttest() {
    var w = $(window).width();
    var h = $(window).height();
    if (w > h) {
        return h;
    } else {
        return w;
    }
}
//helper function find max zoom factor
function scalefactor() {
    var cube = $('.cube').width();
    var sf = orienttest() / cube;
    return sf;
}
/**
 * Created by Sytnik on 09.12.2015.
 */
var $gunman = $('#gunman'),
    $hat = $('#hat');



var freddy = {
    step1: '0px 0px',
    step2: '-150px 0px',
    step3: '-300px 0px',
    ready: '-456px 0px',
    red_eyes: '-930px 0px',
    fire_position: '-1090px 0px',
    click: $gunman.one('click', function () {
        $gunman.addClass('check');
        $hat.addClass('hat');
        $gunman.css('background-position', '-1558px 0px');
        $gunman.addClass('freddie_fall')
            .one('animationend.freddie_fall', function () {
                $gunman.css('background-position', '-1710px 0px');
            });
    })

};

function randomFire() {
    randomFire = Math.random() * (5500 - 1500) + 1500;
}

function steps(step1, step2, step3) {
    var steps = setInterval(function () {
        setTimeout(function () {
            $gunman.css({'background-position': step1})
        }, 0);

        setTimeout(function () {
            $gunman.css({'background-position': step2})
        }, 100);

        setTimeout(function () {
            $gunman.css({'background-position': step3})
        }, 200);
    }, 200);
    setTimeout(function() {
        clearInterval(steps);
    }, 5000);
}




randomFire();


$(document).ready(function () {

    $('#str_button').click(function () {
        $(this).css('display', 'none');
        $gunman.addClass('gunman');
        $gunman.addClass('gunman_enter')
            .one('animationstart.gunman_enter', function () {
                steps(freddy.step1, freddy.step2, freddy.step3);
            })
            .one('animationend.gunman_enter', function () {

                $gunman.css('right', '45%')
                    .css('background-position', freddy.ready);

                setTimeout(function () {
                    $gunman.css('background-position', freddy.red_eyes);
                    setTimeout(function () {
                        $gunman.css('background-position', freddy.fire_position);
                        freddy.click()
                    }, 200);

                    setTimeout(function () {
                        if (!$('#gunman').hasClass('check')) {
                            $gunman.off('click');
                            var endFire = setInterval(function () {
                                setTimeout(function () {
                                    $gunman.css('background-position', '-1245px 0px')
                                }, 500);
                                setTimeout(function () {
                                    $gunman.css('background-position', '-1090px 0px')
                                }, 1000);
                            }, 1000);
                            setTimeout(function () {
                                clearInterval(endFire);
                            }, 2000);
                            setTimeout(function () {
                                $gunman.css('background-position', '-1400px 0px'); //redy to go
                            }, 5000);
                            setTimeout(function () {
                                $gunman.addClass('gunman_out')
                                    .one('animationstart.gunman_out', function () {
                                        steps(freddy.step1, freddy.step2, freddy.step3);
                                    })
                            }, 7000);
                        }

                    }, 800);


                }, randomFire);
            });

    });

});
function timer() {

    var obj = document.getElementById('timer_inp');

    obj.innerHTML--;


    if (obj.innerHTML == 0) {
        alert('Hello');
        setTimeout(function () {
        }, 1000);
    }

    else {
        setTimeout(timer, 1000);
    }

}

setTimeout(timer, 1000);
function gunmenSec() {
    var gunmenSec = setInterval(function() {
        $('#gumnan_sec').innerHTML--;

    }, 100);
    if ($('#gumnan_sec').innerHTML == 0) {
        clearInterval(gunmenSec);

    }
}


var i = 0;


function test() {


    i++;

    timeR = setTimeout("test()", 100);

    document.getElementById('mo').innerHTML = i;


    if (i >= 50) {
        i = 0;
    }

}

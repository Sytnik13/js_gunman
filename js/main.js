var $gunman = $('#gunman'),
    $hat = $('#hat');

var freddy = {
    gunman_class: 'gunman',
    step1: '0px 0px',
    step2: '-150px 0px',
    step3: '-300px 0px',
    ready: '-456px 0px',
    red_eyes: '-930px 0px',
    fire_position: '-2010px 0px',
    win1: '-1245px 0px',
    win2: '-1090px 0px',
    hide: '-1400px 0px',
    click: function freddy_click(){
        $gunman.one('click', function () {
            clearInterval(player_sec);
            fire_background();
            audioShotFall.get(0).play();
        $gunman.addClass('check');
        $hat.addClass('hat');
        $hat.css('background-position', '-1870px -250px');
        $gunman.css('background-position', '-1558px 0px');
        $gunman.addClass('freddie_fall')
            .one('animationend.freddie_fall', function () {
                $gunman.css('background-position', '-1710px 0px');
                setTimeout(function() {
                    audioWin.get(0).play();
                    var money = parseInt($('#reward').html());
                    var playerTime = parseInt($('#player_sec').html());
                    $('#reward').html((((gunmanTime / 100) - 3) - playerTime) + money);
                }, 2000);
                setTimeout(function () {
                    $('#player_sec').html(0);
                    $gunman.removeClass();
                    $hat.removeClass();
                    Game();
                }, 5000)
            });
    })}

};
var john = {
    gunman_class: 'gunman',
    step1: '-310px 318px',
    step2: '-150px 318px',
    step3: '-310px 318px',
    ready: '0px 318px',
    red_eyes: '-462px 318px',
    fire_position: '-1470px 318px',
    win1: '-605px 318px',
    win2: '-748px 318px',
    hide: '-891px 318px',
    click: function john_click(){

        $gunman.one('click', function () {
            clearInterval(player_sec);
            fire_background();
            audioShotFall.get(0).play();
        $gunman.addClass('check');
        $hat.addClass('hat');
            $hat.css('background-position', '-1465px 318px');
        $gunman.css('background-position', '-1040px 318px');
        $gunman.addClass('freddie_fall')
            .one('animationend.freddie_fall', function () {
                $gunman.css('background-position', '-1200px 318px');
                setTimeout(function() {
                    audioWin.get(0).play();
                    var money = parseInt($('#reward').html());
                    var playerTime = parseInt($('#player_sec').html());
                    $('#reward').html((((gunmanTime / 100) - 3) - playerTime) + money);
                }, 2000);
                setTimeout(function () {
                    $('#player_sec').html(0);
                    $gunman.removeClass();
                    $hat.removeClass();
                    Game();
                }, 5000)
            });
    })}

};
var diego = {
    gunman_class: 'gunman',
    step1: '-310px 650px',
    step2: '-150px 650px',
    step3: '-310px 650px',
    ready: '0px 650px',
    red_eyes: '-462px 650px',
    fire_position: '-1400px 650px',
    win1: '-615px 650px',
    win2: '-770px 650px',
    hide: '-920px 650px',
    click: function john_click() {
        $gunman.one('click', function () {
            clearInterval(player_sec);
            fire_background();
            audioShotFall.get(0).play();
            $gunman.addClass('check');
            $hat.addClass('diego_hat');
            $hat.css('background-position', '-0px 640px');
            $gunman.css('background-position', '-1080px 650px');
            $gunman.addClass('freddie_fall')
                .one('animationend.freddie_fall', function () {
                    setTimeout(function() {
                        audioWin.get(0).play();
                        var money = parseInt($('#reward').html());
                        var playerTime = parseInt($('#player_sec').html());
                        $('#reward').html((((gunmanTime / 100) - 3) - playerTime) + money);
                    }, 2000);
                    setTimeout(function () {
                        $('#player_sec').html(0);
                        $gunman.removeClass();
                        $hat.removeClass();
                        Game();
                    }, 5000)
                });
        })
    }
};
var rudolf = {
    gunman_class: 'gunman_tall',
    step1: '-130px 1020px',
    step2: '-258px 1020px',
    step3: '-130px 1020px',
    ready: '0px 1020px',
    red_eyes: '-395px 1020px',
    fire_position: '-1210px 1020px',
    win1: '-525px 1020px',
    win2: '-665px 1020px',
    hide: '-810px 1020px',
    click: function john_click() {
        $gunman.one('click', function () {
            clearInterval(player_sec);
            fire_background();
            audioShot.get(0).play();
            $gunman.addClass('check');
            $hat.addClass('rudolf_hat');
            $hat.css('background-position', '-1100px 730px');
            $gunman.css('background-position', '-955px 1020px');
            setTimeout(function() {
                audioWin.get(0).play();
                var money = parseInt($('#reward').html());
                var playerTime = parseInt($('#player_sec').html());
                $('#reward').html((((gunmanTime / 100) - 3) - playerTime) + money);
            }, 2000);
            setTimeout(function () {
                $('#player_sec').html(0);
                $gunman.removeClass();
                $hat.removeClass();
                setTimeout(function() {
                    Game();
                }, 500);

            }, 5000)

        })
    }
};
var isaac = {
    gunman_class: 'gunman_isaac',
    step1: '-155px 1389px',
    step2: '-310px 1389px',
    step3: '-155px 1389px',
    ready: '0px 1389px',
    red_eyes: '-470px 1389px',
    fire_position: '-1250px 1389px',
    win1: '-600px 1389px',
    win2: '-842px 1389px',
    hide: '-970px 1389px',
    click: function john_click() {
        $gunman.one('click', function () {
            clearInterval(player_sec);
            fire_background();
            audioShot.get(0).play();
            $gunman.addClass('check');
            $gunman.css('background-position', '-1100px 1389px');
            setTimeout(function() {
                audioWin.get(0).play();
                var money = parseInt($('#reward').html());
                var playerTime = parseInt($('#player_sec').html());
                $('#reward').html((((gunmanTime / 100) - 3) - playerTime) + money);
            }, 2000);
            setTimeout(function () {
                $('#player_sec').html(0);
                $gunman.removeClass();
                $hat.removeClass();
                setTimeout(function() {
                    Game();
                }, 500);
            }, 5000)
        })
    }
};
var audioIntro = $('#audio-intro'),
    audioDeath = $('#audio-death'),
    audioFire = $('#audio-fire'),
    audioShot = $('#audio-shot'),
    audioShotFall = $('#audio-shot-fall'),
    audioWait = $('#audio-wait'),
    audioWin = $('#audio-win');

function randomFire() {
    randomFire = Math.random() * (5500 - 1500) + 1500;
}

function fire_background () {
    var fire_background = setInterval(function() {
        setTimeout(function () {
            $('.fire_background').css('opacity', '0.3')
        }, 0);
        setTimeout(function () {
            $('.fire_background').css('opacity', '0')
        }, 500)
    });
    setTimeout(function() {
        clearInterval(fire_background)
    }, 1000);
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
    }, 4700);
}

function endFire(win1, win2) {
    $gunman.css('background-position', win2);
    var endFire = setInterval(function () {
        setTimeout(function () {
            $gunman.css('background-position', win1)
        }, 0);
        setTimeout(function () {
            $gunman.css('background-position', win2);
        }, 500);
    }, 1000);
    setTimeout(function () {
        clearInterval(endFire);
    }, 2000);

}

var gunmanTime = 1200;


function timer() {
    if (gunmanTime === 300) {
        return 300;
    }
    return gunmanTime = gunmanTime - 100;
}



randomFire();
function Gunman(gunman_class,step1, step2, step3, ready,red_eyes, fire_position, win1, win2, hide, click) {
    console.log(gunmanTime);
    $('#gunman_sec').html((gunmanTime / 100) - 4);
    $gunman.addClass(gunman_class);
    $gunman.addClass('gunman_enter')
        .one('animationstart.gunman_enter', function () {
            audioIntro.get(0).play();
            steps(step1, step2, step3);
        })
        .one('animationend.gunman_enter', function () {
            audioIntro.get(0).pause();
            audioWait.get(0).play();
            $gunman.css('right', '45%')
                .css('background-position', ready);
            $gunman.one('click', function() {
                fire_background();
                audioWait.get(0).pause();
                audioShot.get(0).play();
                audioDeath.get(0).play();
                $gunman.addClass('defeat');
                endFire(win1, win2);
                //setTimeout(function () {
                    //$gunman.css('background-position', hide); //redy to go
                //}, 5000);
                setTimeout(function () {

                    $gunman.css('background-position', hide);
                    $gunman.addClass('gunman_out')
                        .one('animationstart.gunman_out', function () {
                            steps(step1, step2, step3);
                        })
                        .one('animationend.gunman_out', function () {
                            $gunman.removeClass();
                            gunmanTime = 1200;
                            $('#over').css('display', 'block');
                            $('.modal_window').css('display', 'block');
                        })
                }, 6000);
            });

            setTimeout(function () {

                audioWait.get(0).pause();
                $gunman.off('click');
                if(!$('#gunman').hasClass('defeat')) {
                    audioFire.get(0).play();
                    $gunman.css('background-position', red_eyes);
                    setTimeout(function () {
                        $gunman.css('background-position', fire_position);
                        player_sec = setInterval(function(){
                            var time = $('#player_sec').html();
                            time++;
                            $('#player_sec').html(time++);
                        }, 100);
                        click();
                    }, 200);
                    setTimeout(function () {
                        if (!$('#gunman').hasClass('check')) {
                            clearInterval(player_sec);
                            fire_background();
                            audioShot.get(0).play();
                            audioDeath.get(0).play();
                            $gunman.off('click');
                            endFire(win1, win2);
                            //setTimeout(function () {
                                //$gunman.css('background-position', hide); //redy to go
                            //}, 0);
                            setTimeout(function () {
                                $gunman.css('background-position', hide);
                                $gunman.addClass('gunman_out')
                                    .one('animationstart.gunman_out', function () {
                                        steps(step1, step2, step3);
                                    })
                                    .one('animationend.gunman_out', function () {
                                        gunmanTime = 1200;
                                        $('#over').css('display', 'block');
                                        $gunman.removeClass();
                                        $('#player_sec').html(0);
                                        $('#reward').html(0);
                                        $('.modal_window').css('display', 'block');
                                    })
                            }, 6000);
                        }

                    }, timer());

                }
            }, randomFire);


        });
}

function Game() {
    randomGunman = 1000 + Math.random() * (6000 - 1000);

    if (randomGunman >= 1000 && randomGunman <= 2000 ) {
        Gunman(diego.gunman_class, diego.step1, diego.step2, diego.step3, diego.ready, diego.red_eyes, diego.fire_position, diego.win1, diego.win2, diego.hide, diego.click);
    } else if (randomGunman >= 2000 && randomGunman <= 3000) {
        Gunman(freddy.gunman_class, freddy.step1, freddy.step2, freddy.step3, freddy.ready, freddy.red_eyes, freddy.fire_position, freddy.win1, freddy.win2, freddy.hide, freddy.click);
    } else if (randomGunman >= 3000 && randomGunman <= 4000) {
        Gunman(rudolf.gunman_class, rudolf.step1, rudolf.step2, rudolf.step3, rudolf.ready, rudolf.red_eyes, rudolf.fire_position, rudolf.win1, rudolf.win2, rudolf.hide, rudolf.click);
    } else if (randomGunman >= 4000 && randomGunman <= 5000) {
        Gunman(john.gunman_class, john.step1 ,john.step2, john.step3, john.ready, john.red_eyes, john.fire_position, john.win1, john.win2, john.hide, john.click);
    } else if (randomGunman >= 5000 && randomGunman <= 6000) {
        Gunman(isaac.gunman_class, isaac.step1, isaac.step2, isaac.step3, isaac.ready, isaac.red_eyes, isaac.fire_position, isaac.win1, isaac.win2, isaac.hide, isaac.click);
    }
}

$(document).ready(function () {



    $('#str_button').click(function () {
        $('.modal_window').css('display', 'none');
        //$(this).css('display', 'none');
            Game();




    });

});
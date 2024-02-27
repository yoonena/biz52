AOS.init({once: true});
	
var scTop = 0;
var hdt = $('.header_top'); 
var flag = false;
var fix_position = $('.header_main').offset().top - $(".header_top").outerHeight();

$(window).on('load scroll resize', function() {
    fix_position = $('.header_main').offset().top + $(".header_top").outerHeight();
    scTop = $(this).scrollTop();

    if (scTop > fix_position && !flag) {
        hdt.addClass("on");
        flag = true;
    }
    if (scTop <= fix_position && flag) {
        hdt.removeClass("on");
        flag = false;
    }
});

function openMenu() {
    var menuContent = $('.menu').clone();
    $.magnificPopup.open({
        items: {
            src: menuContent,
            type: 'inline'
        }
    });
}

function closeMenu() {
    $.magnificPopup.close();
}

function moveQuick(target, top) {
    $.magnificPopup.close();
    let calTop = top ? $(target).offset().top + top : $(target).offset().top;
    $('html, body').animate({ scrollTop: calTop - $(".header_top").outerHeight() + 1 }, 400);
}

function testPop1() {
    $.magnificPopup.open({
        items: {
            src: '<div class="popup_wrap"><div class="popup"><div class="popup_inner"><p>허용된 IP에서만 접속 가능합니다.</p></div><div class="popup_btn" onclick="closePop();">확인</div></div></div>',
            type: 'inline'
        }
    });
}

function testPop2() {
    $.magnificPopup.open({
        items: {
            src: '<div class="popup_wrap"><div class="popup"><div class="popup_inner"><p>정상적으로 등록 완료<br>되었습니다.</p></div><div class="popup_btn" onclick="closePop();">확인</div></div></div>',
            type: 'inline'
        }
    });
}

function closePop() {
    $.magnificPopup.close();
}
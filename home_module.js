
$(function () {
    //mobile menu click event
    var check = true;
    $(".nav-topical-box").on('click', '.pull', function (elf) {
        $('#nav-topical').toggle(400);
        if (check) {
            $('.pull').text("close");
        } else {
            $('.pull').text("menu");
        }
        check = !check;
        return false;
    }); //end mobile menu click 

    /*$('#tab-container-over ul#switch').tabs({ event: 'mouseover', fx: { opacity: 'toggle' }}).tabs('rotate', 10000); */
    $('.slide').innerfade({
        speed: 'slow',
        timeout: 20000,
        type: 'sequence',
        containerheight: '370px'
    });
    $('.lgslide').innerfade({
        speed: 'slow',
        timeout: 20000,
        type: 'sequence',
        containerheight: '470px'
    });
    $('.subtopical').hide();
    $('.topicalcol').hide();

    // Tabs for rotator
    var $tabs = $(".rotator").tabs();

    $(".frontPost").each(function (i) {
        var totalSize = $(".frontPost").size() - 1;
        if (i != totalSize) {
            next = i + 2;
            $(this).append("<a href='#' class='nextT right' rel='" + next + "'></a>");
        }

        if (i != 0) {
            prev = i;
            $(this).append("<a href='#' class='prevT' rel='" + prev + "'></a>");
        }

        if (i == totalSize) {
            next = 0;
            $(this).append("<a href='#' class='nextT right' rel='" + next + "'></a>");
        }
    });

    $('.nextT, .prevT').click(function () {
        $tabs.tabs('select', $(this).attr("rel"));
        return false;
    });

    var megaConfig = {
        interval: 150,
        sensitivity: 7,
        over: addMega,
        timeout: 700,
        out: removeMega
    };

    $("#nav-topical li").hoverIntent(megaConfig);
});

function addMega() {
    $(this).find('.subtopical').slideToggle("fast").find('.topicalcol').fadeIn(200);
    navwidth = $('#nav-topical').outerWidth();

    menupos = $(this).position();
    submenupos = $(this).find('.subtopical').position();
    linkwidth = $(this).outerWidth();
    //alert(linkwidth);

    if (menupos.left > 200) {
        $(this).find('.subtopical').css({
            "left": ((menupos.left - 380) + linkwidth) + "px"
        });
    } else {
        $(this).find('.subtopical').css({
            "left": menupos.left + "px"
        });
    }
}

function removeMega() {
    $(this).find('.subtopical').slideToggle("fast");
    $(this).find('.topicalcol').fadeOut("slow");
}
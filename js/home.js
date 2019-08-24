// home.js
/*
* EASYFADER - An Ultralight Fading Slideshow For Responsive Layouts
* Version: 1.3
* License: Creative Commons Attribution 3.0 Unported - CC BY 3.0
* http://creativecommons.org/licenses/by/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2013 Patrick Kunka, All Rights Reserved
*/

(function(a){function h(b){for(var a=["Webkit","Moz","O","ms"],c=0;c<a.length;c++)if(a[c]+"Transition"in b.style)return"-"+a[c].toLowerCase()+"-";return"transition"in b.style?"":!1}a.fn.removeStyle=function(b){return this.each(function(){var h=a(this);b=b.replace(/\s+/g,"");var c=b.split(",");a.each(c,function(){var a=RegExp(this.toString()+"[^;]+;?","g");h.attr("style",function(b,c){if(c)return c.replace(a,"")})})})};var t=function(b){return this.each(function(){function n(a,b){function j(){f.eq(a).removeStyle("opacity, z-index");
f.eq(b).removeStyle(h+"transition, transition");k=b;p=l=!1;q=setTimeout(function(){c("next")},d.slideDur);"function"==typeof d.onFadeEnd&&d.onFadeEnd.call(this,f.eq(k))}if(l||a==b)return!1;l=!0;"function"==typeof d.onFadeStart&&!p&&d.onFadeStart.call(this,f.eq(e));r.removeClass("active").eq(e).addClass("active");f.eq(a).css("z-index",2);f.eq(b).css("z-index",3);if(h){var g={};g[h+"transition"]="opacity "+d.fadeDur+"ms";g.opacity=1;f.eq(b).css(g);setTimeout(function(){j()},d.fadeDur)}else f.eq(b).animate({opacity:1},
d.fadeDur,function(){j()})}function c(a){"next"==a?(e=k+1,e>m-1&&(e=0)):"prev"==a?(e=k-1,0>e&&(e=m-1)):e=a;n(k,e)}var d={slideDur:7E3,fadeDur:800,onFadeStart:null,onFadeEnd:null};b&&a.extend(d,b);this.config=d;var j=a(this),l=!1,p=!0,q,k,e,f=j.find(".slide"),m=f.length,s=j.find(".pager_list");h=a.support.leadingWhitespace?h(j[0]):!1;for(var g=0;g<m;g++)s.append('<li class="page" data-target="'+g+'">'+g+"</li>");j.find(".page").bind("click",function(){var b=a(this).attr("data-target");clearTimeout(q);
c(b)});var r=s.find(".page");r.eq(0).addClass("active");n(1,0)})};a.fn.easyFader=function(a){return t.apply(this,arguments)}})(jQuery);

//幻灯
$(function() {
	$('#slide').easyFader();
});
// progress bar
$('#page-loading-progress').progress({
    total: 2,
    onSuccess: function () {
        $('#page-loading-progress').fadeOut(1000, function () {
            $('#page-loading-progress').remove();
        });
    }
});

// search
$('#search-services').dropdown();
if (Cookies.get('byr_navi_previous_search_service_option') === undefined || Cookies.get('byr_navi_previous_search_service_option') === '' || $('#' + Cookies.get('byr_navi_previous_search_service_option')).length === 0) {
    Cookies.set('byr_navi_previous_search_service_option', $('#search-services').val(), { expires: 365 });
} else {
    $('#search-services').dropdown('set selected', Cookies.get('byr_navi_previous_search_service_option'));
};

$('#search-button').click(function () {
    var service = $('#' + $('#search-services').val());
    var query = $('#search-query').val();
    query = encodeURIComponent(query);
    if (query) {
        Cookies.set('byr_navi_previous_search_service_option', service.val(), { expires: 365 });
        window.open(service.attr('data-url') + query + service.attr('data-suffix'), '_blank');
    } else {
        $('#search-div').addClass('error');
        $('#search-query').attr('placeholder', '请输入搜索内容');
    };
});

$('#search-query').click(function () {
    $(this).select();
});

$(document).ready(function () {
    $('#search-query').focus();
});

$(window).keyup(function (event) {
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).innerHeight();
    var windowBottom = windowTop + windowHeight;
    var searchBoxTop = $('#search-div').offset().top;
    var searchBoxHeight = $('#search-div').innerHeight();
    var searchBoxBottom = searchBoxTop + searchBoxHeight;
    if (event.key === 'Enter' && searchBoxBottom > windowTop && searchBoxTop < windowBottom) {
        var service = $('#' + $('#search-services').val());
        var query = $('#search-query').val();
        query = encodeURIComponent(query);
        if (query) {
            if ($('#search-query:focus').length > 0) {
                Cookies.set('byr_navi_previous_search_service_option', service.val(), { expires: 365 });
                window.open(service.attr('data-url') + query + service.attr('data-suffix'), '_blank');
            } else {
                $('#search-query').focus().select();
            };
        } else {
            $('#search-div').addClass('error');
            $('#search-query').attr('placeholder', '请输入搜索内容').focus();
        };
    };
});

$('#search-query').keyup(function (event) {
    if (event.key) {
        if ($('#search-query').val()) {
            $('#search-div').removeClass('error');
            $('#search-query').attr('placeholder', '立即搜索');
        };
    };
});

$('.shortcuts .ui.label').each(function () {
    $(this).click(function () {
        var service = $('#' + $(this).attr('data-search-service-id'));
        var query = $('#search-query').val();
        query = encodeURIComponent(query);
        if (query) {
            Cookies.set('byr_navi_previous_search_service_option', service.val(), { expires: 365 });
            $('#search-services').dropdown('set selected', service.val());
            window.open(service.attr('data-url') + query + service.attr('data-suffix'), '_blank');
        } else {
            $('#search-div').addClass('error');
            $('#search-query').attr('placeholder', '请输入搜索内容');
        };
    });
});
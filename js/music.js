const ap = new APlayer({
    container: document.getElementById('aplayer'),
    order: 'random',
    preload: 'auto',
    listMaxHeight: '336px',
    volume: '0.5',
    mutex: true,
    lrcType: 3,
    /* 下方更改为你自己的歌单就行 */
    audio: [{
            name: "We Are The World (Demo)",
            artist: "Michael Jackson",
            url: "http://music.163.com/song/media/outer/url?id=1697590.mp3",
            cover: "http://p1.music.126.net/4fK_UU_c6IHbq7wrAW4Qow==/18715886929967779.jpg",
            lrc: "[00:00.00] 暂无歌词",
            theme: "#33658d"
        },
        {
            name: "能不能",
            artist: "游智婷 Sandy Yu",
            url: "./music/能不能.mp3",
            cover: "http://p1.music.126.net/4fK_UU_c6IHbq7wrAW4Qow==/18715886929967779.jpg",
            lrc: "[00:00.00] 暂无歌词",
            theme: "#33658d"
        },
        {
            name: "所以我不问为什么",
            artist: "蔡暐伦",
            url: "./music/所以我不问为什么.mp3",
            cover: "http://p1.music.126.net/4fK_UU_c6IHbq7wrAW4Qow==/18715886929967779.jpg",
            lrc: "[00:00.00] 暂无歌词",
            theme: "#33658d"
        },
        {
            name: "エブリデイワールド ~ Everyday World",
            artist: "Kyle Xian",
            url: "http://music.163.com/song/media/outer/url?id=1465745942.mp3",
            cover: "http://p1.music.126.net/POsdtSwJyzyNLeO2DZ6tpw==/109951165171640867.jpg",
            lrc: "[00:00.00] 暂无歌词",
            theme: "#171513"
        },
        {
            name: "ハロ／ハワユ (on Guitar)",
            artist: "おさむらいさん",
            url: "http://music.163.com/song/media/outer/url?id=1824841344.mp3",
            cover: "http://p4.music.126.net/TkFEX8dYVp0XkXUvn289iQ==/109951165778571750.jpg",
            lrc: "[00:00.00] 暂无歌词",
            theme: "#33658d"
        },
        {
            name: "AM11:00",
            artist: "井上苑子,OCEANS",
            url: "http://music.163.com/song/media/outer/url?id=1303019148.mp3",
            cover: "http://p1.music.126.net/_B1b8M2EvU5CkKKDld8HdQ==/109951163471733823.jpg",
            lrc: "[00:00.00] 暂无歌词",
            theme: "#33658d"
        }
    ]
});

// https://s-sh-2127-music.oss.dogecdn.com/lrc%2FWestlife-My%20Love.lrc

/* 底栏歌词 */
setInterval(function () {
    $("#lrc").html("<span class='lrc-show'><i class='iconfont icon-music'></i> " + $(".aplayer-lrc-current").text() + " <i class='iconfont icon-music'></i></span>");
}, 500);

/* 音乐通知及控制 */
ap.on('play', function () {
    music = $(".aplayer-title").text() + $(".aplayer-author").text();
    iziToast.info({
        timeout: 8000,
        iconUrl: './img/icon/music.png',
        displayMode: 'replace',
        message: music
    });
    $("#play").html("<i class='iconfont icon-pause'>");
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
    if ($(document).width() >= 990) {
        $('.power').css("cssText", "display:none");
        $('#lrc').css("cssText", "display:block !important");
    }
});

ap.on('pause', function () {
    $("#play").html("<i class='iconfont icon-play'>");
    if ($(document).width() >= 990) {
        $('#lrc').css("cssText", "display:none !important");
        $('.power').css("cssText", "display:block");
    }
});

//音量调节
function changevolume() {
    var x = $("#volume").val();
    ap.volume(x, true);
    if (x == 0) {
        $("#volume-ico").html("<i class='iconfont icon-volume-x'></i>");
    } else if (x > 0 && x <= 0.3) {
        $("#volume-ico").html("<i class='iconfont icon-volume'></i>");
    } else if (x > 0.3 && x <= 0.6) {
        $("#volume-ico").html("<i class='iconfont icon-volume-1'></i>");
    } else {
        $("#volume-ico").html("<i class='iconfont icon-volume-2'></i>");
    }
}

$("#music").hover(function () {
    $('.music-text').css("display", "none");
    $('.music-volume').css("display", "flex");
}, function () {
    $('.music-text').css("display", "block");
    $('.music-volume').css("display", "none");
})

/* 一言与音乐切换 */
$('#open-music').on('click', function () {
    $('#hitokoto').css("display", "none");
    $('#music').css("display", "flex");
});

$("#hitokoto").hover(function () {
    $('#open-music').css("display", "flex");
}, function () {
    $('#open-music').css("display", "none");
})

$('#music-close').on('click', function () {
    $('#music').css("display", "none");
    $('#hitokoto').css("display", "flex");
});

/* 上下曲 */
$('#play').on('click', function () {
    ap.toggle();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#last').on('click', function () {
    ap.skipBack();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

$('#next').on('click', function () {
    ap.skipForward();
    $("#music-name").html($(".aplayer-title").text() + $(".aplayer-author").text());
});

/* 打开音乐列表 */
$('#music-open').on('click', function () {
    if ($(document).width() >= 990) {
        $('#box').css("display", "block");
        $('#row').css("display", "none");
        $('#more').css("cssText", "display:none !important");
    }
});
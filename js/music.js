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
            url: "http://allall02.baidupcs.com/file/b6f0c3f94jf49c2a7ffd3e972c9357de?bkt=en-864c1d195a8f2f41eec7f60752f7c2f32401e30c0bdf6e338aedafe5a8fcc080cda2619470347e5e5f633f96d8b02efbdb505f2b5d09824bc744cfe92a7adff2&fid=3016729926-250528-302449201410715&time=1672998564&sign=FDTAXUbGERQlBHSKfWqi-DCb740ccc5511e5e8fedcff06b081203-LTzaEX19iQSLw%2FsBxclRXHBqRw0%3D&to=19&size=3646693&sta_dx=3646693&sta_cs=0&sta_ft=mp3&sta_ct=0&sta_mt=0&fm2=MH%2CBaoding%2CAnywhere%2C%2C%E5%B9%BF%E4%B8%9C%2Cct&ctime=1672998456&mtime=1672998563&resv0=-1&resv1=0&resv2=rlim&resv3=5&resv4=3646693&vuk=3016729926&iv=2&htype=&randtype=&tkbind_id=0&esl=1&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=en-37228b2ed7bf70a566630c285096795dc555cabb952ead8af2ff8665425e13635be95d853406f3615c30fc03b3c18493f97b073a0efa2d1e305a5e1275657320&expires=8h&rt=pr&r=845675552&vbdid=-&fin=%E8%83%BD%E4%B8%8D%E8%83%BD.mp3&bflag=207,19-19&err_ver=1.0&check_blue=1&rtype=1&devuid=BDIMXV2-O_88002B20A18742B6AB4EC177E0BCAFF0-C_0-D_0-M_525400A3696C-V_0E564ACA&clienttype=8&channel=00000000000000000000000000000000&dp-logid=133188018832850917&dp-callid=0.1&tsl=0&csl=0&fsl=-1&csign=auhciRrFW32UytcVWxLyZaIS1lc%3D&so=1&ut=1&uter=1&serv=0&uc=1833802818&ti=e292035734ac5995ec4de9d5a0f387bd6cef78b144a1ea3a305a5e1275657320&hflag=30&from_type=3&adg=c_199f250df67be19032715a2a8c1489a1&reqlabel=250528_l_d9f97424f731ea476720d5a5ec7c91dc_-1_3790cfd72ff254bd51533a36f3228b69&ibp=1&by=themis",
            cover: "http://p1.music.126.net/4fK_UU_c6IHbq7wrAW4Qow==/18715886929967779.jpg",
            lrc: "[00:00.00] 暂无歌词",
            theme: "#33658d"
        },
        {
            name: "所以我不问为什么",
            artist: "蔡暐伦",
            url: "http://allall02.baidupcs.com/file/eff24be4at46f1c324c0476cebcda8b4?bkt=en-24c643f198a62f88094ade951d4b65f7fa8cd42b23d177824ecee45b472f4a031ad7cdb5df80bf8b&fid=3704491569-250528-510266680157539&time=1672998765&sign=FDTAXUbGERQlBHSKfWqi-DCb740ccc5511e5e8fedcff06b081203-shYGT6%2FWnWaKDqiq1XlCzKdUWOA%3D&to=19&size=4973714&sta_dx=4973714&sta_cs=0&sta_ft=mp3&sta_ct=0&sta_mt=0&fm2=MH%2CYangquan%2CAnywhere%2C%2C%E5%B9%BF%E4%B8%9C%2Cct&ctime=1672998740&mtime=1672998764&resv0=-1&resv1=0&resv2=rlim&resv3=5&resv4=4973714&vuk=3704491569&iv=2&htype=&randtype=&tkbind_id=0&esl=1&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=en-63e3b00051d4c58ebfc85e42163851d7a728bb0c105f295d08940dd80eb38161f155c1a4228742cf&expires=8h&rt=pr&r=991632856&vbdid=-&fin=%E6%89%80%E4%BB%A5%E6%88%91%E4%B8%8D%E9%97%AE%E4%B8%BA%E4%BB%80%E4%B9%88.mp3&bflag=217,19-19&err_ver=1.0&check_blue=1&rtype=1&devuid=BDIMXV2-O_9FB7AE86E526436A9311A37DD2CA8925-C_0-D_0-M_525400A3696C-V_0E564ACA&clienttype=8&channel=00000000000000000000000000000000&dp-logid=133241984957023933&dp-callid=0.1&tsl=0&csl=0&fsl=-1&csign=fRSiUgmAl9UDEMkLeaF5C3thI4U%3D&so=1&ut=1&uter=1&serv=0&uc=1833802818&ti=05df9239daa40647a92b2c09f88158bf4344533151c652f7305a5e1275657320&hflag=30&from_type=3&adg=c_65eb3b7292dc00fd36b3412f76ef6d22&reqlabel=250528_l_7a79cdf2ca5beca8bfdf738796105d15_-1_23a6d35a8b770c0b355ee183d1012d93&ibp=1&by=themis",
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
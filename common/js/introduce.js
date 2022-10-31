$(function () {
  var $win = $(window); //브라우저

  //처음화면 높이 채우기
  var stMainh = $win.outerHeight();
  var tabhh = $(".tab_menu li").outerHeight();
  var btmMenuhh = $(".btm_menu").outerHeight();

  var sthh = stMainh - tabhh - btmMenuhh - 60;

  $(".introduce_main").css("height", sthh);
  $(".blank_div").css("height", sthh);

  var introduce_tab = $(".tab_menu li"); //메뉴
  introduce_tab.click(function () {
    var idx = $(this).index(); //현재 탭의 인덱스
    var itrSection = $(".introduce_section"); //section

    introduce_tab.removeClass("on"); //탭 on지우기
    itrSection.removeClass("on"); //탭 on지우기
    $(this).addClass("on"); //현재 탭에 on 붙이기

    //section 보이기
    if (idx == 0) {
      itrSection.eq(0).addClass("on");
    } else if (idx == 1) {
      itrSection.eq(1).addClass("on");
    }
  });

  //스크롤
  $win.scroll(function () {
    var scroll = $win.scrollTop(); //현재 스크롤 높이
    var txtT = $(".introduce_main .introduce_txt_wrap.kwd").offset().top; //메인 슬라이드 위치
    var txtG = txtT + 100;
    var cont1btmdivT = $(".cont1 .big_txt").offset().top; //cont1 btm 위치
    var cont1btmdivG = cont1btmdivT + 100;
    var kwdChkhh = $(".kwd_chk").height() / 4;
    var kwdChkT = $(".kwd_chk").offset().top + kwdChkhh;
    var cont2objT = $(".cont2 .big_txt").offset().top; //cont2 obj 위치
    var cont2objG = cont2objT + 100;
    var cont3objT = $(".cont3 .big_txt").offset().top; //cont3 obj 위치
    var cont3objG = cont3objT + 100;
    var mainh1 = $(".introduce_main h1").offset().top + 100; //회사소개 h1위치
    var maintxtT = $(".introduce_main .introduce_txt_wrap").offset().top + 200; //회사소개 메인 텍스트 위치
    var historyT = $(".introduce_history .history_wrap").offset().top + 100; //연혁 위치

    var mainhh = $(".introduce_main").height();

    if (scroll > 60) {
      $(".introduce_main").css({
        position: "fixed",
        top: "40px",
      });
      // $('.introduce_service').css('margin-top',mainhh);
    } else {
      $(".introduce_main").css({
        position: "relative",
        top: "",
      });
    }

    // 슬라이드 지날 때
    if (scroll > kwdChkT) {
      $(".cont1 .cont_inner .obj_wrap .big_txt").css({ opacity: "1", top: "-9vw" });
      $(".cont1 .cont_inner .obj_wrap .md_txt").css({ opacity: "1", top: "-10vw" });
      $(".cont1 .top_obj").css({ opacity: "1", marginTop: "0" });
      $(".cont1 .btm_obj").css({ opacity: "1", marginTop: "0" });
    }

    //cont1 btm 위치 지날 때
    if (scroll > cont1btmdivG) {
      $(".cont2 .cont_inner .obj_wrap .big_txt").css({ opacity: "1", top: "-17vw" });
      $(".cont2 .cont_inner .obj_wrap .md_txt").css({ opacity: "1", top: "-17vw" });
      $(".cont2 .all_obj").css({ opacity: "1", marginTop: "0" });
    }
    //cont2 obj 위치 지날 때
    if (scroll > cont2objG) {
      $(".cont3 .cont_inner .obj_wrap .big_txt").css({ opacity: "1", top: "-9vw" });
      $(".cont3 .cont_inner .obj_wrap .md_txt").css({ opacity: "1", top: "-10vw" });
      $(".cont3 .all_obj").css({ opacity: "1", marginTop: "0" });
    }
    //cont3 obj 위치 지날 때
    if (scroll > cont3objG) {
      $(".cont4 .cont_inner .obj_wrap .big_txt").css({ opacity: "1", top: "-17vw" });
      $(".cont4 .cont_inner .obj_wrap .md_txt").css({ opacity: "1", top: "-16vw" });
      $(".cont4 .all_obj").css({ opacity: "1", marginTop: "0" });
    }
  });
});

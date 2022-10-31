// $(document).ready(function() {
// 모두 로딩되었을때
$(function () {
  history.scrollRestoration = "manual"; //새로고침시 맨 위로
  var $win = $(window); //브라우저

  //처음화면 높이 꽉 채우기
  // var stMainh = $win.outerHeight();
  // $('.main_wrap').css('height', stMainh);
  var vh = $win.innerHeight() * 0.01;
  document.documentElement.style.setProperty("--vh", vh + "px");
  // console.log(vh);

  $win.resize(function () {
    // var stMainh = $win.outerHeight();
    // $('.main_wrap').css('height', stMainh);
    var vh = $win.innerHeight() * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");
  });

  var menuOpen = $("header .menu"); //메뉴 열기
  var menuClose = $(".aside_header .close_btn_wrap"); //메뉴 닫기
  var asideMenu = $(".menu_show"); //aside

  //메뉴 열기
  menuOpen.click(function () {
    asideMenu.css("right", "0");
    $("body").css("overflow", "hidden");
  });
  //메뉴 닫기
  menuClose.click(function () {
    asideMenu.css("right", "");
    $("body").css("overflow", "unset");
  });
  // //메뉴 카테고리
  // var main_tab = $(".category .total_menu > li");
  // main_tab.click(function () {
  //   var stat = $(this).attr("class");
  //   main_tab.removeClass("on");

  //   if (stat.indexOf("on") == "-1") {
  //     $(this).addClass("on");
  //   } else {
  //     $(this).removeClass("on");
  //   }
  // });

  // 메인 아이템 리스트
  var itemlist = $(".main_wrap .slide_wrap .total_slide_wrap .item_list");
  var main_item = $(".main_wrap .slide_wrap .total_slide_wrap .item_list .listCont");

  //슬라이드 탭 메뉴
  var mainslidetab = $(".main_wrap .slide_wrap .group_tap_wrap ul.group_menu li");

  // mainslidetab.click(function(){
  //   var idx = $(this).index();    //현재 탭의 인덱스
  //   mainslidetab.removeClass('on');   //탭 on 지우기
  //   main_item.removeClass('on');   //탭 on 지우기

  //   $(this).addClass('on');   //현재 탭의 on 붙이기

  //   if(idx == 0){
  //     main_item.eq(0).addClass('on');
  //     itemlist.css('left','17%');
  //   }else if(idx == 1){
  //     main_item.eq(1).addClass('on');
  //     itemlist.css('left','');
  //   }else if(idx == 2){
  //     main_item.eq(2).addClass('on');
  //     itemlist.css('left','-116%');
  //   }

  // });

  //메인 슬라이드
  var mainslide = $(".main_wrap .slide_wrap .total_slide_wrap .item_list");
  mainslide.slick({
    draggable: true,
    infinite: false,
    dots: true,
    centerMode: true,
    arrows: false,
    customPaging: function (slider, i) {
      if (i == 0) {
        i = "모바일가능";
      } else if (i == 1) {
        i = "집중투자가능";
      } else if (i == 2) {
        i = "대환가능";
      }
      return i;
    },
  });
  // 시작시 두번째 슬라이드부터 시작
  mainslide.slick("slickGoTo", 1);

  // 상품추천 클릭 시
  // var recomend_contBtn = $(".two_tab .two_tab_list li.recomend_cont");
  // var recomend_slide = $(".recomend_slideWrap .slideList");
  // var recomend_dim = $(".main_wrap .recomend_dim");

  // recomend_contBtn.click(function () {
  //   var stat = recomend_dim.is(".on");
  //   recomend_dim.removeClass("on");

  //   if (stat == false) {
  //     recomend_dim.addClass("on");
  //   } else {
  //     recomend_dim.removeClass("on");
  //   }

  //   recomend_slide.slick(recomend_pop());
  //   recomend_slide.slick("setPosition");
  // });

  // close 버튼
  var recomend_close = $(".recomend_closs_btn");
  recomend_close.click(function () {
    recomend_dim.removeClass("on");
    recomend_slide.slick("unslick");
  });

  var next_btn = $(".recoment_content button.next_btn");
  var pre_btn = $(".recoment_content .prev_btn");

  //상품추천 slick 함수
  function recomend_pop() {
    return {
      dots: false,
      autoplay: false,
      swipe: true,
      arrow: false,
      nextArrow: next_btn,
      prevArrow: pre_btn,
      infinite: false,
    };
  }

  // recomend_slide.slick({
  //   dots: false,
  //   autoplay: false,
  //   swipe: true,
  //   arrow:false,
  //   nextArrow: next_btn,
  //   prevArrow: pre_btn,
  //   infinite: false,
  // })

  //스크롤
  $win.scroll(function () {
    var scroll = $win.scrollTop(); //현재 스크롤 높이
    var slideT = $(".main_wrap .slide_wrap").offset().top; //메인 슬라이드 위치
    var slideG = slideT + 100;
    var cont1topdivT = $(".cont1 .top_obj").offset().top; //cont1 top 위치
    var cont1yopdivG = cont1topdivT - 100;
    var cont2objT = $(".cont2 .all_obj").offset().top; //cont2 obj 위치
    var cont2objG = cont2objT - 100;
    var cont3objT = $(".cont3 .all_obj").offset().top; //cont3 obj 위치
    var cont3objG = cont3objT - 100;
    var two_tabT = $(".main_wrap .two_tab").offset().top; //상담신청, 상품목록 탭 위치

    if (scroll > 200) {
      $(".main_wrap .two_tab").css({
        opacity: "1",
        bottom: "-6vw",
      });
      $(".btm_menu").css("bottom", "0");
    } else {
      $(".main_wrap .two_tab").css({
        opacity: "",
        bottom: "",
      });
      $(".btm_menu").css("bottom", "");
    }

    //상담신청, 상품목록 탭 지날 때
    if (scroll > two_tabT) {
      $("header .menu span").css("background", "#000"); //메뉴버튼 검정색으로
    } else {
      $("header .menu span").css("background", "");
    }

    // 슬라이드 지날 때
    if (scroll > slideG) {
      $(".cont1 .cont_inner .obj_wrap .big_txt").css({ opacity: "1", top: "-9vw" });
      $(".cont1 .cont_inner .obj_wrap .md_txt").css({ opacity: "1", top: "-10vw" });
      $(".cont1 .top_obj").css({ opacity: "1", marginTop: "0" });
      $(".cont1 .btm_obj").css({ opacity: "1", marginTop: "0" });
    }
    //cont1 btm 위치 지날 때
    if (scroll > cont1yopdivG) {
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

$(function () {
  var menuOpen = $("header .menu"); //메뉴 열기
  var menuClose = $(".aside_header .close_btn_wrap"); //메뉴 닫기
  var asideMenu = $(".menu_show"); //aside

  // 시작
  $("header .menu span").css("background", "#000"); //메뉴버튼 검정색으로
  $("header").css("background", "#fff"); //헤더 배경 흰색
  $("header .menu").css("animation", "none"); //메뉴버튼 애니메이션 없애기
  $(".btm_menu").css("bottom", "0");

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
  //메뉴 카테고리
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
});

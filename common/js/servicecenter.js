$(function () {
  var $win = $(window); //브라우저

  var service_tab = $(".tab_menu li");
  var faq = $(".service_section .service_faq"); //faq

  service_tab.click(function () {
    var idx = $(this).index(); //현재 탭의 인덱스
    var svSection = $(".service_section"); //section

    service_tab.removeClass("on"); //탭 on지우기
    svSection.removeClass("on"); //탭 on지우기
    $(this).addClass("on"); //현재 탭에 on 붙이기
    faq.find(".faq_asw").stop().slideUp(); //탭 누르면 faq 답 슬라이드업
    faq.removeClass("on");

    //section 보이기
    if (idx == 0) {
      svSection.eq(0).addClass("on");
    } else if (idx == 1) {
      svSection.eq(1).addClass("on");
    }
  });

  //faq 클릭
  faq.click(function () {
    var stat = $(this).attr("class");
    faq.find(".faq_asw").stop().slideUp();
    faq.removeClass("on");

    if (stat.indexOf("on") == "-1") {
      $(this).addClass("on");
      $(this).find(".faq_asw").stop().slideDown();
    } else {
      $(this).removeClass("on");
      $(this).find(".faq_asw").stop().slideUp();
    }
  });

  var openpop = $(".servie_notice .sv_notice_cont a"); //공지사항 제목
  //공지사항 제목 클릭
  openpop.click(function () {
    var pop = $(".service_section .dim");
    pop.css("display", "block");
  });

  var popclose = $(".notice_wrap button.close_btn"); //팝업 닫기 버튼
  //팝업 닫기 버튼 클릭
  popclose.click(function () {
    var pop = $(".service_section .dim");
    pop.css("display", "none");
  });
});

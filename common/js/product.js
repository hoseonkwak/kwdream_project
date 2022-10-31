$(function () {
  var $win = $(window); //브라우저

  $(".prd_banner").css({
    opacity: "1",
  });
  $(".prd_product").css({
    opacity: "1",
    top: "0",
  });

  //슬라이드
  var bnr_slide = $(".prd_banner .banner_list");
  var prd_cont = $(".prd_wrap");
  bnr_slide.slick({
    infinite: false,
    arrows: false,
    dots: false,
    asNavFor: prd_cont,
  });

  prd_cont.slick({
    draggable: true,
    infinite: false,
    dots: true,
    arrows: false,
    asNavFor: bnr_slide,
    customPaging: function (slider, i) {
      if (i == 0) {
        i = "모바일가능";
      } else if (i == 1) {
        i = "집중투자가능";
      } else if (i == 2) {
        i = "대환가능";
      } else if (i == 3) {
        i = "전체상품";
      }
      return $('<div class="button" />').text(i);
    },
  });

  // 상품안내 상품
  var product = $(".prd_wrap .prd_cont .prd"); //상품
  prd_cont.on("afterChange", function () {
    product.find(".prd_inner").stop().slideUp();
    product.removeClass("on");
  });

  //상품 클릭
  product.click(function () {
    var stat = $(this).attr("class");
    product.find(".prd_inner").stop().slideUp();
    product.removeClass("on");

    if (stat.indexOf("on") == "-1") {
      $(this).addClass("on");
      $(this).find(".prd_inner").stop().slideDown();
    } else {
      $(this).removeClass("on");
      $(this).find(".prd_inner").stop().slideUp();
    }

    //상품 pc신청가능
    var ablepc = $(".prd.on .prd_inner li.btn_li");
    var chkAblePc = ablepc.is(".able_pc");
    if (chkAblePc == true) {
      $(".prd.on button").text("PC신청만 가능합니다");
    }
  });
});

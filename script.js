


$(function () {
    $('.Toggle').click(function () {
      $(this).toggleClass('active');
  
      if ($(this).hasClass('active')) {
          $('.NavMenu').addClass('active');
          $('.NavMenu').fadeIn(500);
      } else {
          $('.NavMenu').removeClass('active');
          $('.NavMenu').fadeOut(500);
      }
    });
  
    $('.navmenu-a').click(function () {
      $('.NavMenu').removeClass('active');
      $('.NavMenu').fadeOut(1000);
      $('.Toggle').removeClass('active');
    });
  });


    //以下　モーダル展開時のスクロール固定  

  // $(function(){
	// var scrollPosition;
	// $(".open").on("click", function() {
	// 	scrollPosition = $(window).scrollTop();
	// 	$('body').addClass('fixed').css({'top': -scrollPosition});
	// });
	// $(".close, .overlay").on("click", function() {
	// 	$('body').removeClass('fixed').css({'top': 0});
	// 	window.scrollTo( 0 , scrollPosition );
	// });
  //   });

  // $(function(){
	// var scrollPosition;
	// $(".open").on("click", function() {
	// 	scrollPosition = $(window).scrollTop();
	// 	$('.reserve').addClass('open').css({'top': -scrollPosition});
	// });
	// $(".close, .overlay").on("click", function() {
	// 	$('.reserve').removeClass('open').css({'top': 0});
	// 	window.scrollTo( 0 , scrollPosition );
	// });
  //   });

  // $(function(){
	// var scrollPosition;
	// $(".open").on("click", function() {
	// 	scrollPosition = $(window).scrollTop();
	// 	$('.line1').addClass('ope');
	// });
	// $(".close, .overlay").on("click", function() {
	// 	$('.line1').removeClass('ope');
	// 	window.scrollTo( 0 , scrollPosition );
	// });
  //   });

    //以上　モーダル展開時のスクロール固定

    // ヘッダースクロール時の色変化
    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("scroll-nav", window.scrollY > 0);
      });
    // window.addEventListener("scroll", function () {
    //     var navi = document.querySelector(".navi-list");
    //     navi.classList.toggle("scroll-nav", window.scrollY > 0);
    //   });
    window.addEventListener("scroll", function () {
      var headerlogo = document.querySelector(".header-logo");
      headerlogo.classList.toggle("sub", window.scrollY > 0);
    });
    window.addEventListener("scroll", function () {
      var subheaderlogo = document.querySelector(".sub-header-logo");
      subheaderlogo.classList.toggle("sub", window.scrollY > 0);
    });



    jQuery(function($){
      $('.tab').click(function(){
        $('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        $('.is-show').removeClass('is-show');
            // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
            // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        $('.panel').eq(index).addClass('is-show');
      });
    });


//以下　モーダル
    'use strict';

{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });
}

//以上　モーダル


//以下　モーダル展開時のスクロールバー削除
$(function(){
	var scrollPosition;
	$("#open").on("click", function() {
		scrollPosition = $(window).scrollTop();
		$('body').addClass('fixed').css({'top': -scrollPosition});
	});
	$("#close").on("click", function() {
		$('body').removeClass('fixed').css({'top': 0});
		window.scrollTo( 0 , scrollPosition );
	});
});
//以上　モーダル展開時のスクロールバー削除

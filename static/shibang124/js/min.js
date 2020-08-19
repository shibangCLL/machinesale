    var swiper = new Swiper('.banner_swiper', {
     autoplay:true,
	  pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
	     var swiper = new Swiper('.swiper-container_bottom', {
      autoplay:true,
   navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
var swiper = new Swiper('.col_case_swiper', {
       autoplay:true,
	   slidesPerView: 3,
       spaceBetween: 30,
     slidesPerGroup:3,
	 	  pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
	   breakpoints: {
        680: {
           spaceBetween: 20,
	   slidesPerView: 2,
           slidesPerGroup: 2,
  },
			}
    });	
$(document).ready(function() {

		 $('#pull').click(function(){
		 var display = $('.nav ul').css('display');
		 if( display == 'none'){
			$(".nav ul").slideDown();
			$(".nav").css("padding-bottom","0")
 		 }else{
			 $(".nav ul").slideUp();
			$(".nav").css("padding-bottom","10px")
		 }
		 })



  var $wrapperIndex = $('.tab-wrapper'),
  $allTabsIndex = $wrapperIndex.find('.tab-pane'),
  $tabMenuIndex = $wrapperIndex.find('.tab-menu li') ;  
  $tabMenuIndex.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  $allTabsIndex.each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
 $a= $tabMenuIndex.on('click', function() {
    var dataTab3 = $(this).data('tab'),
    $getWrapper3 = $(this).closest($wrapperIndex);
    $getWrapper3.find($tabMenuIndex).removeClass('active');
    $(this).addClass('active');
     $getWrapper3.find($allTabsIndex).hide().filter('[data-tab='+dataTab3+']').show();
  });
		 
});
(function () {
    var showMoreNChildren = function ($children, n) {
    var $hiddenChildren = $children.filter(":hidden");
    var cnt = $hiddenChildren.length;
    for ( var i = 0; i < n && i < cnt ; i++) {
     $hiddenChildren.eq(i).show();
     }
     return cnt-n;
   }
$(".showMoreNChildren").each(function () {
    var pagesize = $(this).attr("pagesize") || 10;
    var $children = $(this).children();
    if ($children.length > pagesize) {
         for (var i = pagesize; i < $children.length; i++) {
              $children.eq(i).hide();
         }
         $("<div class='showMorehandle' >查看更多</div>").insertAfter($(this)).click(function () {
             if (showMoreNChildren($children, pagesize) <= 0) {
                   $(this).hide();
             };
         });
        }
    });
})();


!function($){
$(document).ready(function(){
/* Сюда код */
$('.click').on('click', function(){
	let inp = $(this).prev();
  inp.select();
  document.execCommand('copy');
});
});
}(window.jQuery);
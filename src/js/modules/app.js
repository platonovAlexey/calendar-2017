console.log('Привет, как дела?');




var format = function (date) {
	var month = (date.getMonth() + 1).toString();
	return date.getUTCFullYear() + "-" + (month.length === 1 ? "0" + month : month) + "-" + date.getUTCDate();
}

$('[id^="cards_"]').each(function() {
		var date = new Date($(this).attr('data')),

			now = new Date();
			day = now.getDay();
			date = new Date(date.setHours(16));
			forecast = $('.tabs__wrapper__online');
			completed = $('.tabs__wrapper__offline');
			col = $('.col-lg-3.col-md-3.col-sm-6.col-xs-12');
			console.log(format(now));
			console.log($(this).attr('data'));
			


		if (date < now) {
console.log(format(date), 'прошлое')
				// Это прошлые даты
				$(this).addClass('card__completed').css("display", "block");
				$(this).removeClass('card__disable');
				$(this).removeClass('card__active');
				//$(this).removeClass('card__default');
				$(this).append('<div class="completed">завершено</div>');
				$(this).find(".card__link").html("завершено").css("fontSize", 20 );
				$(this).find(".card__promocode").css("display", "none");
				
				// forecast.find(col).find('.card__completed').addClass('removeClass');
				// $(this).remove();
				
				
				//forecast.find('.removeClass').remove();
				// $('.tabs__wrapper__online').find('.card__active').css("display", "block");

				if(true){
					forecast.find(col).find('.card__completed').parent().parent().remove();
				}
				
				// if($($(this)).hasClass('.card__empty')){
				// 	$($(this)).removeClass('card__disable');
				// }


		} else if(format(now) !== $(this).attr('data')) {

console.log(format(date), 'будущее')
			$(this).removeClass('card__completed');
			$(this).addClass('card__default');
			$(this).addClass('card__disable');
			$(this).addClass('card__active');
			$(this).find(".card__promocode").css("display", "none");
			$(this).find(".card__link").html("ожидается");

			completed.find('.card__active').css("display", "none");


		}

if(format(now) === $(this).attr('data')) {
console.log(format(date), 'сегодня')
				$(this).removeClass('card__completed');
				$(this).addClass('card__active');
				$(this).find(".card__link").html("перейти к покупке>");
				$(this).find(".completed").remove();
				$(this).find(".card__promocode").css("display", "block");
				$(this).find(".card__link").css("fontSize", 14 );
				
				
		}

})


var wrapper = $('.layout_center_wrapper-project');
var linkOnline = $('#tab-nav-2');
var linkOffline = $('#tab-nav-1');
var tabWrapper = $('.tabs__wrapper');

linkOnline.click(function(){
	console.log('click online');
	$('.tabs__wrapper__offline').css('display', 'none');
	$('.tabs__wrapper__online').css('display', 'block');
});
linkOffline.click(function(){
	console.log('click offline');
	$('.tabs__wrapper__online').css('display', 'none');
	$('.tabs__wrapper__offline').css('display', 'block');
});
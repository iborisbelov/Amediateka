$(document).ready(function(){

	var willSurvive = [];
	var willDie     = [];
	var willWin     = [];

	// Main fullPage
	$('#fullpage').fullpage({
		navigation: false,
		slidesNavigation: false,
		scrollingSpeed: 700,
		fitToSectionDelay: 700,
		slidesNavPosition: 'top',
		responsiveWidth: null,
		responsiveHeight: null,
		touchSensitivity: 99999,
		// scrollOverflow: true,
		onLeave: function(anchorLink, index, direction){
			if (index == 2) {
				activeAnimation('.s2 .hbo-logo img', 500);
				activeAnimation('.s2 h2', 1000);
				activeAnimation('.s2 .item:nth-child(1)', 1500);
				activeAnimation('.s2 .item:nth-child(2)', 2000);
				activeAnimation('.s2 .item:nth-child(3)', 2500);
				activeAnimation('.s2 .btn-wrap', 3000);
				activeAnimation('.s2 .scroll-down-wrap', 3500);
			}
			if (index == 3) {
				scrollOff();

				activeAnimation('.q1 .hbo-logo img', 500);
				activeAnimation('.q1 h2', 1000);
				activeAnimation('.q1 p', 1500);
				activeAnimation('.q1 .items .col:nth-child(1)', 2000);
				activeAnimation('.q1 .items .col:nth-child(2)', 2100);
				activeAnimation('.q1 .items .col:nth-child(3)', 2200);
				activeAnimation('.q1 .items .col:nth-child(4)', 2300);
				activeAnimation('.q1 .items .col:nth-child(5)', 2400);
				activeAnimation('.q1 .items .col:nth-child(6)', 2500);
				activeAnimation('.q1 .items .col:nth-child(7)', 2600);
				activeAnimation('.q1 .items .col:nth-child(8)', 2700);
				activeAnimation('.q1 .items .col:nth-child(9)', 2800);
				activeAnimation('.q1 .items .col:nth-child(10)', 2900);
				activeAnimation('.q1 .items .col:nth-child(11)', 3000);
				activeAnimation('.q1 .items .col:nth-child(12)', 3100);
				activeAnimation('.q1 .btn-wrap', 3600);
			}

			if (index == 4) {
				activeAnimation('.q2 .hbo-logo img', 500);
				activeAnimation('.q2 h2', 1000);
				activeAnimation('.q2 .mobile-btn-back', 1000);
				activeAnimation('.q2 p', 1500);
				activeAnimation('.q2 .items .col:nth-child(1)', 2000);
				activeAnimation('.q2 .items .col:nth-child(2)', 2100);
				activeAnimation('.q2 .items .col:nth-child(3)', 2200);
				activeAnimation('.q2 .items .col:nth-child(4)', 2300);
				activeAnimation('.q2 .items .col:nth-child(5)', 2400);
				activeAnimation('.q2 .items .col:nth-child(6)', 2500);
				activeAnimation('.q2 .items .col:nth-child(7)', 2600);
				activeAnimation('.q2 .items .col:nth-child(8)', 2700);
				activeAnimation('.q2 .items .col:nth-child(9)', 2800);
				activeAnimation('.q2 .items .col:nth-child(10)', 2900);
				activeAnimation('.q2 .items .col:nth-child(11)', 3000);
				activeAnimation('.q2 .items .col:nth-child(12)', 3100);
				activeAnimation('.q2 .btn-wrap', 3600);
			}

			if (index == 5) {
				activeAnimation('.q3 .hbo-logo img', 500);
				activeAnimation('.q3 h2', 1000);
				activeAnimation('.q3 .mobile-btn-back', 1000);
				activeAnimation('.q3 p', 1500);
				activeAnimation('.q3 .items .col:nth-child(1)', 2000);
				activeAnimation('.q3 .items .col:nth-child(2)', 2100);
				activeAnimation('.q3 .items .col:nth-child(3)', 2200);
				activeAnimation('.q3 .items .col:nth-child(4)', 2300);
				activeAnimation('.q3 .items .col:nth-child(5)', 2400);
				activeAnimation('.q3 .items .col:nth-child(6)', 2500);
				activeAnimation('.q3 .items .col:nth-child(7)', 2600);
				activeAnimation('.q3 .items .col:nth-child(8)', 2700);
				activeAnimation('.q3 .items .col:nth-child(9)', 2800);
				activeAnimation('.q3 .items .col:nth-child(10)', 2900);
				activeAnimation('.q3 .items .col:nth-child(11)', 3000);
				activeAnimation('.q3 .items .col:nth-child(12)', 3100);
				activeAnimation('.q3 .btn-wrap', 3600);
			}
			if (index == 6) {
				activeAnimation('.s6 .hbo-logo img', 500);
				activeAnimation('.s6 h1', 1000);

			}
		}
			
	});


	var loaderDelay = 200;
	var loaderItems = 9;

	scrollOff();

	$('.loader-wrapper .item').each(function(index, item){
		var t = setTimeout(function(){
			$(item).addClass('active');
		}, loaderDelay * index);
	});

	setTimeout(function(){
		$('.loader-wrapper').fadeOut(500);
		scrollOn();
	}, loaderDelay * loaderItems);

	activeAnimation('.s1 .hbo-logo img', loaderDelay * loaderItems + 500);
	activeAnimation('.s1 .logo-wrap', loaderDelay * loaderItems + 1000);
	activeAnimation('.s1 h1', loaderDelay * loaderItems + 1500);
	activeAnimation('.s1 p', loaderDelay * loaderItems + 2000);
	activeAnimation('.s1 .btns-wrap', loaderDelay * loaderItems + 2500);
	activeAnimation('.s1 .scroll-down-wrap', loaderDelay * loaderItems + 3000);



	toSectionClickEvent('.s1 button.btn', 2);
	toSectionClickEvent('.s1 button.scroll-down-btn', 2);
	toSectionClickEvent('a.btn-stati',6);
	toSectionClickEvent('a.btn-up',1);
	toSectionClickEvent('.s2 button.btn', 3);
	toSectionClickEvent('.s2 button.scroll-down-btn', 3);

	toSectionClickEvent('.q1 button.btn-next', 4);

	toSectionClickEvent('.q2 button.btn-next', 5);
	toSectionClickEvent('.q2 button.btn-back', 3);

	toSectionClickEvent('.q3 button.btn-back', 4);




	$('.q .items .col .item').click(function(){
		$(this).toggleClass('active');

		var parent = $(this).parents('.q');
		var hasClassActive = !!parent.find('.item.active').length;

		if ( hasClassActive ) {
			parent.find('.btn-wrap .btn-next.disabled').removeClass('disabled');
		} else {
			parent.find('.btn-wrap .btn-next').addClass('disabled');
		}
	});



	function goNextQuestion(selector1, selector2){
		$(''+selector1+' button.btn-next').click(function(){
			var activeItemsData = [];

			$(''+selector1+' .items .item.active').each(function(index, item){
				var data = $(item).attr('data-person');
				activeItemsData.push(data);
			});

			$(''+selector2+' .items .item').removeClass('disabled');

			for (var i = 0; i <= activeItemsData.length; i++) {
				var data = activeItemsData[i];

				$(''+selector2+' .items .item[data-person='+data+']').addClass('disabled');
			}

		});
	}

	goNextQuestion('.q1', '.q2');
	goNextQuestion('.q2', '.q3');

	function getArrNames(selector) {
		$(selector + ' button.btn-next').click(function(){

			if (selector === '.q1') willSurvive = [];
			if (selector === '.q2') willDie = [];
			if (selector === '.q3') willWin = [];

			$(selector + ' .items .item.active').each(function(index, item){
				var name = $(item).find('.name').text();

				if (selector === '.q1') willSurvive.push(name);
				if (selector === '.q2') willDie.push(name);
				if (selector === '.q3') willWin.push(name);
			});

		});
	}

	getArrNames('.q1');
	getArrNames('.q2');
	getArrNames('.q3');

	// set names in input value
	$('.q3 button.btn-next').click(function(){
		setNamesInInput('.willSurvive', willSurvive);
		setNamesInInput('.willDie', willDie);
		setNamesInInput('.willWin', willWin);
	});

	function setNamesInInput(elContainer, arr){
		for (var i = 0; i < arr.length; i++) {
			$(elContainer + ' input:nth-child('+(i+1)+')').val(arr[i]).removeAttr('disabled');
		}
	}

	$('.popup-window .form-wrap input[type=checkbox]').change(function(){
		var checked = $(this).prop('checked');
		var btn = $('.popup-window .form-wrap button');

		if ( checked ) {
			btn.removeClass('disabled');
		} else {
			btn.addClass('disabled');
		}
	});

	// open popup
	$('.q3 button.btn-next').click(openPopup);


	// form send
	$(".popup-window form").submit(function() { 
		var th = $(this);

		$.ajax({
			url: "https://docs.google.com/forms/d/e/1FAIpQLSeOZnClhkewVlZc-zGWpFzGvw_LnuuqyzMYgjcq7SO_2FecjQ/formResponse", 
			data: th.serialize(),
			type: "POST"
		});

		formDonePopup();

		setTimeout(function() {
			th.trigger("reset");
		}, 500);

		setTimeout(function(){
			console.clear();
		}, 2000);

		return false;
	});

	// close mobile popup
	$('.q-mobile-popup .q-btn-wrap button').click(function(){
		$(this).parents('.q-mobile-popup').fadeOut(250);

		// disable blur
		$(this).parents('.q').addClass('blur-off');
	});


$('.s1 .btns-wrap a.btn-white').click(scrollOff);
	$('a.btn-up').click(scrollOn);



$('.popup-window .btn-stati').click(function(){
	$('.popup-window').removeClass('active');
	$('main').removeClass('blur');
});

	function formDonePopup(){
		$('.popup-window .block.block-form').hide();
		$('.popup-window .block.block-done').show();
	}

	function openPopup(){
		$('.popup-window').addClass('active');
		$('main').addClass('blur');
	}

	function closePopup(){
		$('.popup-window').removeClass('active');
		$('main').removeClass('blur');
	}


	function toSectionClickEvent(el, section) {
		$(el).click(function(){
			$.fn.fullpage.moveTo(section, 0);
		});
	}

	function activeAnimation(elClass, delay) {
		setTimeout(function(){
			$(elClass).removeClass('animated-off')
		}, delay)
	}

	function scrollOff(){
		$.fn.fullpage.setMouseWheelScrolling(false);
		$.fn.fullpage.setKeyboardScrolling(false);
	}

	function scrollOn(){
		$.fn.fullpage.setMouseWheelScrolling(true);
		$.fn.fullpage.setKeyboardScrolling(true);
	}

	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1;
	if(isAndroid) {
		$('.section-wrapper').addClass('android');
	}

	
});
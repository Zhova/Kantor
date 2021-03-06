$(() => {
	$('.more').on('click', () => {
		$('.contmenu').slideToggle(300);
		$('.more__line:nth-child(1)').toggleClass('line-rotate-first');
		$('.more__line:nth-child(3)').toggleClass('line-rotate-second');
		$('.more__line:nth-child(2)').toggle();
	});

	$('.contmenu a').on('click', () => {
		$('.contmenu').slideUp(300);
		$('.more__line:nth-child(1)').toggleClass('line-rotate-first');
		$('.more__line:nth-child(3)').toggleClass('line-rotate-second');
		$('.more__line:nth-child(2)').toggle();
	});

	let $crossHide = $('.cross');

	let $fullinfo = $('.fullinfo');
	let $trainType = $('.trainings__type span');

	$trainType.on('click', () => {
		$(event.currentTarget).next().fadeIn();
	});
	$crossHide.on('click', () => {
		$fullinfo.fadeOut();
	});


	let $normItem = $('.normative__item');

	$normItem.on('click', (event) => {
		$(event.currentTarget).next().fadeIn();
	});

	$crossHide.on('click', () => {
		$('.fullinfo-hide').fadeOut();
	});

	
//send form
	$('.form').submit(() => { 
		let form_data = $(this).serialize();
		$.ajax({
		type: "POST",
		url: "send.php",
		data: form_data,
		success: function() {
			alert("Ваше сообщение отпрвлено!");
		}
		});
	});
});			
$(document).ready(function () {

	// Burger menu
	$('.header__burger').on('click', function () {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})

	// IBG
	function ibg() {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img')) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
	ibg();

	// Slider
	new Swiper('.community-slider', {
		// Стрелки
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev'
		// },
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '< <span class=" ' + currentClass + ' "></span>' + ' / ' +
					'<span class=" ' + totalClass + ' "></span> >';
			}
		},
		spaceBetween: 30,
		breakpoints: {
			1920: {
				slidesPerView: 2.5,
			},
			1600: {
				slidesPerView: 2.15,
			},
			1400: {
				slidesPerView: 1.9,
			},
			1200: {
				slidesPerView: 1.5,
			},
			992: {
				slidesPerView: 1.3,
			},
			768: {
				slidesPerView: 1.3,
			},
			500: {
				slidesPerView: 1.2,
			},
			406: {
				slidesPerView: 1.2,
			},
			320: {
				slidesPerView: 1,
			},
		}

	});
})


$(document).ready(function () {
	// Burger menu
	$('.header__burger').on('click', function () {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})

	// Fixed Header
	let scrollOffset = $(window).scrollTop();
	checkscroll(scrollOffset);

	$(window).on('scroll resize', function () {
		scrollOffset = $(this).scrollTop();
		checkscroll(scrollOffset);
	})

	function checkscroll(scrollOffset) {
		if (scrollOffset > 0) {
			$('.header').addClass('fixed');
		} else {
			$('.header').removeClass('fixed');
		}
	}

	// Accordion
	$('.block__title').click(function () {
		if ($('.block').hasClass('one')) {
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	})

	// Animation items
	const animItems = document.querySelectorAll('.anim-items'); // Массив анимируемых элементов

	if (animItems.length > 0) { // Проверка на наличие анимируемых элементов
		window.addEventListener('scroll', animOnScroll); // Событие "скролл"
		function animOnScroll() { // Функция анимации при скролле
			for (let index = 0; index < animItems.length; index++) { // Цикл на выборку анимируемых элементов
				const animItem = animItems[index]; // Анимируемый элемент
				const animItemHeight = animItem.offsetHeight; // Высота анимируемого элемента
				const animItemOffset = offset(animItem).top; // Расстояние анимируемого элемента к верху документа
				const animStart = 4; // Старт анимации

				let animItemPoint = window.innerHeight - animItemHeight / animStart; // Точка начала анимации
				if (animItemHeight > window.innerHeight) { // Если высота элемента больше высоты окна
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}
				console.log(pageYOffset);
				console.log(animItemOffset);

				console.log(animItemOffset + animItemHeight);
				// прокрутили больше чем позиция элемента минус точка старта и прокрутили меньше чем позиция элемента плюс его высота
				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('active');
				} else {
					if (!animItem.classList.contains('anim-no-hide')) {
						animItem.classList.remove('active');
					}
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
		setTimeout(() => {
			animOnScroll();
		}, 300);
	}

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

	// Filter
	$('.filter__item').click(function (event) {
		let i = $(this).data('filter');
		if (i == "all") {
			$('.portfolio__column').show();
		} else {
			$('.portfolio__column').hide();
			$('.portfolio__column.f_' + i).show();
		}
		$('.filter__item').removeClass('active');
		$(this).addClass('active');
	})

	// Tabs
	let tabs = document.querySelectorAll(".tabs");
	for (let index = 0; index < tabs.length; index++) {
		let tab = tabs[index];
		let tabs_items = tab.querySelectorAll(".tabs-item");
		let tabs_blocks = tab.querySelectorAll(".tabs-block");
		for (let index = 0; index < tabs_items.length; index++) {
			let tabs_item = tabs_items[index];
			tabs_item.addEventListener("click", function (e) {
				for (let index = 0; index < tabs_items.length; index++) {
					let tabs_item = tabs_items[index];
					tabs_item.classList.remove('active');
					tabs_blocks[index].classList.remove('active');
				}
				tabs_item.classList.add('active');
				tabs_blocks[index].classList.add('active');
				e.preventDefault();
			});
		}
	}

	// Smooth scroll
	$('.goto').click(function () {
		let el = $(this).attr('href').replace('#', '');
		console.log(el);
		let offset = 0;
		$('body,html').animate({
			scrollTop: $('.' + el).offset().top + offset
		}, 500, function () { });

		if ($('.header-menu').hasClass('active')) {
			$('.header-menu,.header-menu__icon').removeClass('active');
			$('body').removeClass('lock');
		}
		return false;
	});

	// Parallax
	$(window).scroll(function (event) {
		let s = 0 - $(this).scrollTop() / 3;
		$('.mainblock__image').css('transform', 'translate3d(0, ' + s + 'px, 0)');
	});

	// Slider 
	if ($('.slider__body').length > 0) {
		$('.slider__body').slick({
			// autoplay: true,
			// infinite: true,
			// accessibility: false,
			dots: true,
			arrows: false,
			slidesToShow: 1,
			autoplaySpeed: 3000,
			adaptiveHeight: true,
			nextArrow: '<button type="button" class="slick-next"></button>',
			prevArrow: '<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 768,
				settings: {}
			}]

		})
	}
})


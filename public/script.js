// GOOGLE SRIPT ALERT START ----------------------------------------------------------------------- //
window.addEventListener("load", function() {
	const form = document.getElementById('my-form');
	form.addEventListener("submit", function(e) {
		e.preventDefault();
		const data = new FormData(form);
		const action = e.target.action;
		fetch(action, {
			method: 'POST',
			body: data,
		})
			.then(() => {
				alert("Success!");
			})
	});
});
// ------------------------------------------------------------------------- GOOGLE SRIPT ALERT END //

// INFINITE SCROLL START -------------------------------------------------------------------------- //
$(document).ready(function() {

	// Check every 300ms the scroll position
	$(document).on('scroll', _.throttle(function() {
		check_if_needs_more_content();
	}, 300));

	function check_if_needs_more_content() {
		pixelsFromWindowBottomToBottom = 0 + $(document).height() - $(window).scrollTop() - $(window).height();

		if (pixelsFromWindowBottomToBottom < 10) {
			// Here it would go an ajax request
			$('body').append($('.products-row').clone());

		}
	}
});
// ---------------------------------------------------------------------------- INFINITE SCROLL END //


// SWIPER START ----------------------------------------------------------------------------------- //
function myFunction(x) {
	if (x.matches) { // If media query matches
		var swiper = new Swiper(".mySwiper", {
			slidesPerView: 1,
			spaceBetween: 30,
			slidesPerGroup: 1,
			autoplay: {
				delay: 10000,
				disableOnInteraction: true,
			},
			loop: true,
			loopFillGroupWithBlank: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	} else {
		var swiper = new Swiper(".mySwiper", {
			slidesPerView: 4,
			spaceBetween: 30,
			slidesPerGroup: 4,
			autoplay: {
				delay: 10000,
				disableOnInteraction: true,
			},
			loop: true,
			loopFillGroupWithBlank: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}
}

var x = window.matchMedia("(max-width: 912px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
// ------------------------------------------------------------------------------------- SWIPER END //
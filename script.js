const hamburgerBtn = document.querySelector('#hamburgerBtn');
const closeBtn = document.querySelector('#closeBtn');

const navLinks = document.querySelectorAll('.navbar-list');
const body = document.body;
const typedText_span = document.getElementById('typedText');
const cursor_span = document.getElementById('cursor');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const fadeUppers = document.querySelectorAll('.fade-up');
const phrases = [
	'Software Developer',
	'Passionate Coder',
	'Problem Solver',
	'Star Wars Enthusiast',
];
const typingCharDelay = 100;
const erasingCharDelay = 50;
const endTextDelay = 2000;

let currentPhraseIndex = 0;
let currentCharIndex = 0;

hamburgerBtn.addEventListener('click', () => body.classList.add('nav-open'));

closeBtn.addEventListener('click', () => body.classList.remove('nav-open'));

navLinks.forEach((link) => {
	link.addEventListener('click', closeNav);
});

function closeNav() {
	if (body.classList.contains('nav-open')) {
		body.classList.remove('nav-open');
	}
}

function charTyping() {
	// if the current character in the phrase is less than that phrase's length, keep typing characters
	if (currentCharIndex < phrases[currentPhraseIndex].length) {
		if (!cursor_span.classList.contains('typing')) {
			cursor_span.classList.add('typing');
		}
		typedText_span.innerText +=
			phrases[currentPhraseIndex].charAt(currentCharIndex);
		currentCharIndex++;
		setTimeout(charTyping, typingCharDelay);
	} else {
		// else erase the characters after delay
		cursor_span.classList.remove('typing');
		setTimeout(erase, endTextDelay);
	}
}

function erase() {
	if (currentCharIndex > 0) {
		if (!cursor_span.classList.contains('typing')) {
			cursor_span.classList.add('typing');
		}
		typedText_span.innerText = phrases[currentPhraseIndex].substring(
			0,
			currentCharIndex - 1
		);
		currentCharIndex--;
		setTimeout(erase, erasingCharDelay);
	} else {
		cursor_span.classList.remove('typing');
		currentPhraseIndex++;
		if (currentPhraseIndex >= phrases.length) {
			currentPhraseIndex = 0;
		}
		setTimeout(charTyping, typingCharDelay + 300);
	}
}

window.addEventListener('load', () => setTimeout(charTyping, 500));

// IntersectionObservers to animate page on scroll
const fadeInOptionsMobile = {
	threshold: 0.3,
};
const fadeInOnScrollMobile = new IntersectionObserver(function (
	entries,
	fadeInOnScrollMobile
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear-mobile');
			fadeInOnScrollMobile.unobserve(entry.target);
		}
	});
},
fadeInOptionsMobile);

const fadeInOptionsDesktop = {
	threshold: 0.65,
};

const fadeInOnScrollDesktop = new IntersectionObserver(function (
	entries,
	fadeInOnScrollDesktop
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear-desktop');
			fadeInOnScrollDesktop.unobserve(entry.target);
		}
	});
},
fadeInOptionsDesktop);

// faders.forEach((fader) => appearOnScrollMobile.observe(fader));
// faders.forEach((fader) => appearOnScrollDesktop.observe(fader));

faders.forEach((fader) =>
	window.addEventListener('load', function () {
		if (window.matchMedia('(min-width: 62em)').matches) {
			fadeInOnScrollDesktop.observe(fader);
		} else {
			fadeInOnScrollMobile.observe(fader);
		}
	})
);

const slideOptionsMobile = {
	threshold: 0,
	rootMargin: '0px 0px -200px 0px',
};
const slideOnScrollMobile = new IntersectionObserver(function (
	entries,
	slideOnScrollMobile
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear-mobile');
			slideOnScrollMobile.unobserve(entry.target);
		}
	});
},
slideOptionsMobile);

const slideOptionsDesktop = {
	threshold: 0,
	rootMargin: '0px 0px -300px 0px',
};

const slideOnScrollDesktop = new IntersectionObserver(function (
	entries,
	slideOnScrollDesktop
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear-desktop');
			slideOnScrollDesktop.unobserve(entry.target);
		}
	});
},
slideOptionsDesktop);

sliders.forEach((slider) =>
	window.addEventListener('load', function () {
		if (window.matchMedia('(min-width: 62em)').matches) {
			slideOnScrollDesktop.observe(slider);
		} else {
			slideOnScrollMobile.observe(slider);
		}
	})
);

const fadeUpOptionsMobile = {
	threshold: 0.4,
	// rootMargin: '0px 0px -100px 0px',
};
const fadeUpOnScrollMobile = new IntersectionObserver(function (
	entries,
	fadeUpOnScrollMobile
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear-mobile');
			fadeUpOnScrollMobile.unobserve(entry.target);
		}
	});
},
fadeUpOptionsMobile);

const fadeUpOptionsDesktop = {
	threshold: 0.65,
};

const fadeUpOnScrollDesktop = new IntersectionObserver(function (
	entries,
	fadeUpOnScrollDesktop
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear-desktop');
			fadeUpOnScrollDesktop.unobserve(entry.target);
		}
	});
},
fadeUpOptionsDesktop);

fadeUppers.forEach((fadeUp) =>
	window.addEventListener('load', function () {
		if (window.matchMedia('(min-width: 62em)').matches) {
			fadeUpOnScrollDesktop.observe(fadeUp);
		} else {
			fadeUpOnScrollMobile.observe(fadeUp);
		}
	})
);

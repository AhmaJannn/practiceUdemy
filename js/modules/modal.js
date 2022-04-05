function openModal(modalSelector, modalTimerId) {
	const modalWindow = document.querySelector(modalSelector);
	modalWindow.classList.add('show');
	modalWindow.classList.remove('hide');
	document.body.style.overflow = 'hidden';

	console.log(modalTimerId);
	if (modalTimerId) {
		clearTimeout(modalTimerId);
	}
}

function closeModal(modalSelector) {
	const modalWindow = document.querySelector(modalSelector);
	modalWindow.classList.add('hide');
	modalWindow.classList.remove('show');
	document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {

	// Modal

	const modalBtn = document.querySelectorAll(triggerSelector),
		modalWindow = document.querySelector(modalSelector);

	modalBtn.forEach(element => {
		element.addEventListener('click', () => openModal(modalSelector, modalTimerId));
	});

	modalWindow.addEventListener('click', (event) => {
		const target = event.target;

		if (target === modalWindow || target.getAttribute('data-close') == '') {
			closeModal(modalSelector);
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
			closeModal(modalSelector);
		}
	});

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal(modalSelector, modalTimerId);
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export { openModal };
export { closeModal };
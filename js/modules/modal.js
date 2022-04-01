function modal() {

	// Modal

	const modalBtn = document.querySelectorAll('[data-modal]'),
		modalWindow = document.querySelector('.modal');

	modalBtn.forEach(element => {
		element.addEventListener('click', openModal);
	});

	function openModal() {
		modalWindow.classList.add('show');
		modalWindow.classList.remove('hide');
		document.body.style.overflow = 'hidden';
		clearTimeout(modalTimerId);
	}

	function closeModal() {
		modalWindow.classList.add('hide');
		modalWindow.classList.remove('show');
		document.body.style.overflow = '';
	}

	modalWindow.addEventListener('click', (event) => {
		const target = event.target;

		if (target === modalWindow || target.getAttribute('data-close') == '') {
			closeModal();
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.code === 'Escape' && modalWindow.classList.contains('show')) {
			closeModal();
		}
	});

	const modalTimerId = setTimeout(openModal, 50000);

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;
var tjejerKodar = (function() {
	var publ = this,
		priv = {},
		openMenu = document.getElementById('open-menu'),
		menu = document.getElementById('main-menu');

	priv.init = function () {
		priv.addEventListeners();
	};

	priv.addEventListeners = function () {
		document.addEventListener('DOMContentLoaded', function () {
			openMenu.classList.remove('js-isOpen');
		});

		openMenu.addEventListener('click', priv.addMenuClass);
	};

	priv.addMenuClass = function (e) {
		e.preventDefault();

		if (this.classList.contains('js-isOpen')) {
			this.classList.remove('js-isOpen');
			menu.classList.remove('is-open');
		} else {
			this.classList.add('js-isOpen');
			menu.classList.add('is-open');
		}
	};

	priv.init();

}(tjejerKodar || {}));

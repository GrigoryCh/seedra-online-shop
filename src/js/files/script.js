// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Меню Бургер
const iconMenu = document.querySelector('.icon-menu');
const bodyMenu = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener (
		"click", function (e) {
	document.body.classList.toggle('lock');
	iconMenu.classList.toggle('_active');
	bodyMenu.classList.toggle('_active');
});
}
window.onload = function () {
// Isotope
// init Isotope
const elem = document.querySelector('.catalog__products');
const iso = new Isotope( elem, {
  // options
  itemSelector: '.product',
	layoutMode: 'masonry',
});
// filtering
document.querySelectorAll('.filter-btn').forEach(el => {
	el.addEventListener('click', (e) => {
		let filter = e.currentTarget.dataset.filter;
		iso.arrange({filter: `${filter}`});
	});
});

// change is-checked class on buttons
const buttonGroups = document.querySelectorAll('.catalog__buttons');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  const buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // only work with buttons
   //  if (!matchesSelector( event.target, 'button')) {
   //    return;
   //  }
   //  buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
   //  event.target.classList.add('is-checked');

   //    Press a button  or     an icon on the button
    if (event.target.classList.contains('catalog__button')) {
      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      event.target.classList.add('is-checked');
   } else if (event.target.closest('.catalog__button')) {
      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      event.target.closest('.catalog__button').classList.add('is-checked');
   } 
   // else if (event.target.parentElement.classList.contains('catalog__button')) {
   //    buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
   //    event.target.parentElement.classList.add('is-checked');
   // } 
   
   else {
      return;
   }
  });
}

	document.addEventListener("click", documentActions);

	// Actions (делегирование события click)
	function documentActions(e) {
      const targetElement = e.target;

		if (targetElement.classList.contains('search-form__icon')) {
			document.querySelector('.search-form').classList.toggle('_active');
		} else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
			document.querySelector('.search-form').classList.remove('_active');
		}

      if (targetElement.classList.contains('buttons__clear')) {
         e.preventDefault();
         if(document.querySelectorAll('.popup__item').length > 1 ) {
            document.querySelector('.popup__item').remove();
         } else {
            document.querySelector('.popup__item').remove();
            document.querySelector('.popup__buttons').remove();
         }
      }

      if (targetElement.classList.contains('product__cart')) {
         targetElement.classList.toggle('_active');
         e.preventDefault();
      }

      if (targetElement.classList.contains('product__label')) {
         targetElement.classList.toggle('_active');
         e.preventDefault();
      }

      if (targetElement.classList.contains('buttons__add')) {
         targetElement.classList.toggle('_active');
         e.preventDefault();
      }

      if (targetElement.classList.contains('bottom-body__button')) {
         targetElement.classList.toggle('_active');
         e.preventDefault();
      }

      if (targetElement.classList.contains('bottom-body__icon')) {
         targetElement.classList.toggle('_active');
         e.preventDefault();
      }

      if (targetElement.closest('.item-cart__icon')) { 
         targetElement.closest('.cart__item').classList.add('_hideme');
         }

      if (targetElement.closest('.form-payment__type')) {
         const typesGroup = document.querySelector('.form-payment__types');
         typesGroup.querySelector('._active').classList.remove('_active');
         e.preventDefault();
         if (targetElement.classList.contains('form-payment__type')) {
            targetElement.classList.add('_active');
         } else  {
            targetElement.closest('.form-payment__type').classList.add('_active');
         } 
      }
   }
}
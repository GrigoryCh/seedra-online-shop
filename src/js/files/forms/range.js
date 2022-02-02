// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

// export function rangeInit() {
// 	const rangeItems = document.querySelectorAll('[data-range]');
// 	if (rangeItems.length) {
// 		rangeItems.forEach(rangeItem => {
// 			const fromValue = rangeItem.querySelector('[data-range-from]');
// 			const toValue = rangeItem.querySelector('[data-range-to]');
// 			const item = rangeItem.querySelector('[data-range-item]');
// 			noUiSlider.create(item, {
// 				start: [Number(fromValue.value), Number(toValue.value)], // [0,200000]
// 				connect: true,
// 				tooltips: [true, true],
// 				range: {
// 					'min': [Number(fromValue.dataset.rangeFrom)],
// 					'max': [Number(toValue.dataset.rangeTo)]
// 				}
// 			});
// 			item.noUiSlider.on('update', function (values, handle) {
// 				fromValue.value = values[handle];
// 				toValue.value = values[handle];
// 			});
// 		});
// 	}
// }
// rangeInit();
const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
    start: [1232,999999],
		connect: true,
		step: 1,
    range: {
			'min': [1232],
			'max': [999999]
    }
	});

	const input0 = document.getElementById('input-0');
	const input1 = document.getElementById('input-1');
	const inputs = [input0, input1];

	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}
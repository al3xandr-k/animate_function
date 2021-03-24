document.addEventListener('DOMContentLoaded', () => {
	const total = document.getElementById('total');
	// истоговая сумма.
	const totalCount = 1000;
	total.textContent = 0;


	// функция запуска анимации (итоговый каунтТотал мы узнаем ранее)
	function animate({ duration, draw, timing }) {

			let start = performance.now();

			requestAnimationFrame(function animate(time) {

					let timeFraction = (time - start) / duration;

					if (timeFraction > 1) timeFraction = 1;

					let progress = timing(timeFraction)

					draw(progress);

					if (timeFraction < 1) {
							requestAnimationFrame(animate);
					}

			});
	}

	animate({
			// скорость анимации
			duration: 2000,
			// Функция расчёта времени
			timing(timeFraction) {
					return timeFraction;
			},
			// Функция отрисовки
			draw(progress) {
					// в ней мы и производим вывод данных
					total.textContent = Math.floor(progress * totalCount)

			}
	});

})
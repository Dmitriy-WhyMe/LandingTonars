(function ($) {
	$(document).ready(function () {
		var swiper = new Swiper(".mySwiper__1", {
			loop: true,
			slidesPerView: 1,
			//autoplay: {
				//delay: 2500,
				//disableOnInteraction: false,
			//},
			pagination: {
				el: ".swiper-dots"
			}
		});
		var swiper = new Swiper(".mySwiper__2", {
			loop: true,
			slidesPerView: 1,
			//autoplay: {
				//delay: 2500,
				//disableOnInteraction: false,
			//},
			pagination: {
				el: ".swiper-dots__1"
			}
		});
		var swiper = new Swiper(".mySwiper__3", {
			loop: true,
			slidesPerView: 1,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			//autoplay: {
				//delay: 2500,
				//disableOnInteraction: false,
			//},
		});
		var swiper = new Swiper(".mySwiper__4", {
			loop: true,
			slidesPerView: 4,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				310: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
				1025: {
					slidesPerView: 4,
				},
			}
			//autoplay: {
				//delay: 2500,
				//disableOnInteraction: false,
			//},
		});

		//Popup
		$('#pop_1').magnificPopup({
			type: 'inline'
		});
		$('#pop_2').magnificPopup({
			type: 'inline'
		});
		$('input[type="tel"]').inputmask({
			mask: "+7 ([9][9][9]) [9][9][9]-[9][9]-[9][9]",
			greedy: false
		});

		$(document).ready(function () {
	        $('form').submit(function () {
	            var formID = $(this).attr('id'); // Получение ID формы
	            var formNm = $('#' + formID);
	            $.ajax({
	                type: 'POST',
	                url: '/php/check.php', // Обработчик формы отправки
	                data: formNm.serialize(),
	            });
	            return false;
	        });
	    });



		const quizData = [
			{
				question: "Укажите массу перевозимого груза",
				a: "4400 кг",
				b: "5500 кг",
				c: "6600 кг",
				correct: "b",
			},
			{
				question: "Укажите массу перевозимого груза1",
				a: "4400 кг",
				b: "5500 кг",
				c: "6600 кг",
				correct: "a",
			},
			{
				question: "Укажите массу перевозимого груза2",
				a: "4400 кг",
				b: "5500 кг",
				c: "6600 кг",
				correct: "c",
			},
			{
				question: "Укажите массу перевозимого груза3",
				a: "4400 кг",
				b: "5500 кг",
				c: "6600 кг",
				correct: "b",
			},
		];
		
		const quiz = document.getElementById('quiz');
		const answerElements = document.querySelectorAll('.answer');
		const questionElement = document.getElementById('question');
		const a_text = document.getElementById('a_text');
		const b_text = document.getElementById('b_text');
		const c_text = document.getElementById('c_text');
		const submit = document.getElementById('submit');
		
		let currentQuiz = 0;
		let score = 0;
		
		loadQuiz();
		
		function loadQuiz(){
			deselectAnswers();
		
			const currentQuizData = quizData[currentQuiz];
		
			questionElement.innerText = currentQuizData.question;
			a_text.innerText = currentQuizData.a;
			b_text.innerText = currentQuizData.b;
			c_text.innerText = currentQuizData.c;
		}
		
		function deselectAnswers(){
			answerElements.forEach(answerEl => answerEl.checked = false)
		}
		
		function getSelected(){
			let answer;
		
			answerElements.forEach(answerEl => {
				if(answerEl.checked){
					answer = answerEl.id;
				}
			});
		
			return answer;
		}
		
		submit.addEventListener('click', () => {
			const answer = getSelected();
		
			if(answer){
				if(answer === quizData[currentQuiz].correct){
					score++;
				}
		
				currentQuiz++;
		
				if(currentQuiz < quizData.length){
					loadQuiz();
				}
				else{
					quiz.innerHTML = `<h2>Спасибо за пройденный опрос</h2>
					<button onclick="location.reload()">Пройти заново</button>
					`;
				}
			}
		});
	});
})(jQuery);
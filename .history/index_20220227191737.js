const quizData = [
	{
		question: 'How old are you?',
		a: '25',
		b: '26',
		c: '27',
		d: '28',
		currect: 'c'
	},
	{
		question: 'What is the most used best programing language in 2019?',
		a: 'Java',
		b: 'C',
		c: 'Python',
		d: 'JavaScript',
		currect: 'a'
	},
	{
		question: 'who is he President of USA?',
		a: 'Trump',
		b: 'Obama',
		c: 'Bush',
		d: 'Clinton',
		currect: 'b'
	},
	{
		question: 'What does HTML stand for?',
		a: 'Hyper Text Markup Language',
		b: 'Cascading style sheet',
		c: 'Jason Object Notation',
		d: 'Aplication Type Markup Language',
		currect: 'a'
	},
	{
		question: 'What year was javaScript launched?',
		a: '1995',
		b: '1996',
		c: '1997',
		d: 'none of the above',
		currect: 'd'
	}
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function getSelected() {
	const answersEls = document.querySelectorAll('.answer');

	answersEls.forEach((answerEl) => {
		if (answerEl.checked) {
			return answerEl.id;
		}
	});

	return undefined;
}

submitBtn.addEventListener('click', () => {
	const answer = getSelected();

	if (answer) {
		currentQuiz++;
	}

	if (answer) {
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			alert('You finished! Get yourself an Orange Lemonade!');
		}
	}
});

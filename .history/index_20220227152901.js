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
		qwstion: 'who is he President of USA?',
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

let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
	currentQuestion++;
}

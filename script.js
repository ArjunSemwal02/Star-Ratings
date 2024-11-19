const initialQuestions = [
    {
        label: 'Problem Solving',
        rating: 0
    }
]

const storedQuestions = JSON.parse(localStorage.getItem('storedQuestions'));

const questions = initialQuestions || storedQuestions;
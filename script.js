const initialQuestions = [
    {
        label: 'Problem Solving',
        rating: 0
    }
]

const storedQuestions = JSON.parse(localStorage.getItem('storedQuestions'));

const questions = initialQuestions || storedQuestions;

const makeStars = (maxValue, question) => {
    const starContainer = document.createElement('div');

    for( let starPosition = 1; starPosition < maxValue; starPosition++){
        const starElement = document.createElement('span');
        starContainer.appendChild(starElement);

        if(starPosition <= question.rating)     
            starElement.classList.add('filled');
        else    
            starElement.classList.add('empty');

        return starContainer;
    }
}

const makeStarRating = question => {
    const container = document.createElement('div');
    const label = document.createElement('label');
    label.textContent = question.label;
    container.appendChild(label);
    container.appendChild(makeStars(5, question));

    return container;
}

const ratingElement = document.getElementsByClassName('ratings');

questions.forEach(question => {
    ratingElement.appendChild(makeStarRating(question));
})
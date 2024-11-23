const initialQuestions = [
    {
        label: 'Problem Solving',
        rating: 0
    },
    {
        label: 'Cognitive thinking',
        rating: 0,
    },
]

const storedQuestions = JSON.parse(localStorage.getItem("storedQuestions"));

const questions = initialQuestions || storedQuestions;

const makeStarRating = question => {
    const container = document.createElement('div');
    const label = document.createElement('label');
    label.textContent = question.label;
    container.appendChild(label);
    container.appendChild(makeStars(5, question));

    return container;
}

const makeStars = (maxValue, question) => {
    const starContainer = document.createElement('div');

    for( let starPosition = 1; starPosition <= maxValue; starPosition++){
        const starElement = document.createElement('span');
        starContainer.appendChild(starElement);

        if(starPosition <= question.rating)     starElement.classList.add('filled');
        else    starElement.classList.add('empty');


        starElement.onclick = () => {
            for( let i = 0; i < maxValue; i++ ){
                if( i < starPosition ){
                    starContainer.children[i].classList.add('filled');
                }
                else{
                    starContainer.children[i].classList.remove('filled');
                    starContainer.children[i].classList.add('empty');
                }
                    
            }

            question.rating = starPosition;
            localStorage.setItem("storedQuestions", JSON.stringify(questions));
        }
    }

    return starContainer;
}



const ratingElement = document.getElementById('ratings');

questions.forEach(question => {
    ratingElement.appendChild(makeStarRating(question));
});
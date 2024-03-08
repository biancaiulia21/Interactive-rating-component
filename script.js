const submit_btn = document.querySelector('.btn');
const card__1 = document.querySelector('.card__1');
const card__2 = document.querySelector('.card__2');
const ratingBtns = document.querySelectorAll('.rating');
const score = document.querySelector('.score_value');
let rating_score = 0 

submit_btn.addEventListener('click', onSubmit);
ratingBtns.forEach( btn => {
    btn.addEventListener('click', RatingBtnClick);
});

function onSubmit(){
    card__1.classList.add('hide');
    score.textContent = rating_score;
    card__2.classList.remove('hide');
    
}

function RatingBtnClick(event) {
    ratingBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    

    if (event.target.classList.contains('rating')){
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }
    
    rating_score = event.target.textContent;
    
}
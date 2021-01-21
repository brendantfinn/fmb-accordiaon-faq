
let content = document.querySelectorAll(".faq-topic-top");
let questions = document.querySelectorAll(".faq-question");
let answer = document.querySelectorAll(".faq-answer");
let arrow = document.querySelectorAll(".img-arrow");
// console.log(content)
// console.log(questions)
console.log(answer[1])
// console.log(arrow)


for(let i=0;i<content.length;i++){
    content[i].addEventListener('click',() => {
        // content.classList.remove('hidden');
        questions[i].classList.toggle('faq-question-active');
        answer[i].classList.toggle('hidden');
        arrow[i].classList.toggle('img-arrow-active');
    })
}
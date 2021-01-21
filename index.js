
let content = document.querySelectorAll(".faq-topic");
let questions = document.querySelectorAll(".faq-question");
let answer = document.querySelectorAll(".faq-answer");
let arrow = document.querySelectorAll(".img-arrow");
// console.log(content)
// console.log(questions)
// console.log(answer[1])
// console.log(arrow)


for(let i=0;i<content.length;i++){
    content[i].addEventListener('click',() => {
        
        for (let index = 0; index < answer.length; index++) {
            answer[index].classList.add('hidden');
            questions[index].classList.remove('faq-question-active');
            arrow[index].classList.remove('img-arrow-active');
        }
        questions[i].classList.toggle('faq-question-active');
        answer[i].classList.toggle('hidden');
        arrow[i].classList.toggle('img-arrow-active');  
        

        let activeArrow = document.querySelector('.img-arrow-active')
        // console.log(activeArrow)
        for (let i = 0; i < answer.length; i++){
            activeArrow.addEventListener('click', function(){
                // console.log('up arrow clicked')
                console.log(answer[i])
                answer[i].classList.toggle('hidden');
                questions[i].classList.remove('faq-question-active');
                arrow[i].classList.remove('img-arrow-active');
            })      
        }
    })

    
}


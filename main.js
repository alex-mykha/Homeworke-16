const questions = [
    {question: 'Скільки буде 2+2?', answer: "4"},
    {question: 'Сонце встає на сході?', answer: "Tak"},
    {question: 'Скільки буде 5 / 0?', answer: "0"},
    {question: 'Якого кольору небо?', answer: "блакитного" },
    {question: 'Яка правильна відповідь на головне питання життя, всесвіту та всього такого.', answer: "42"},
]
let score = 0;
questions.forEach(obj=>{
    let userAnswer = prompt(obj.question);
    if (userAnswer !== null){
        if (userAnswer.toLowerCase() === obj.answer.toLowerCase()){
            score += 10
        }
    }
    else{
        score += 0
    }
})
alert(`Ваш результат складає ${score}`)

function whatAnswer(question, yes, no) {
    if(confirm(question)) yes();
    else no();
}

whatAnswer('Вы согласны?', 
() => console.log ('Yes'), () => console.log('No')
);
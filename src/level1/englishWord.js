function solution(s){
    let answerString = s;
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for(let i =0; i <10 ; i++){
        answerString = answerString.split(numbers[i]).join(i);
        console.log(answerString);
    }
    return answerString;

}

console.log(solution('one1one1one'));
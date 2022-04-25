function othersSolution(s){
    let answerString = s;
   const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for(let i =0; i <10 ; i++){
        answerString = answerString.split(numbers[i]).join(i);
        console.log(answerString);
    }
    return answerString;

}



//replaceAll 도 괜찮은거 같음. It works!
function mySolution(s){
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for(num of numbers){
        s= s.replaceAll(num,numbers.indexOf(num))
    }
    return +s;
}

console.log(mySolution('one1one1one'));
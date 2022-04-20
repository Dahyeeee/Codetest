function collatz(num){
    let times = 0;
    while(num != 1){
    if(num % 2 === 0){
        num = num/2;
        times++;
        }
    else{
        num =  num*3+1;
        times++
        }}
    return times<500 ? times : -1
}

console.log(collatz(16));

//깔끔한 버전

function otehrscollatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}

//재귀함수

function otherscollatz2(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) 
    : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}
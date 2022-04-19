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
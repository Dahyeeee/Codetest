function solution(x){
    const xArr = Array.from(`${x}`,Number);
    const sum = xArr.reduce((sum,val)=> sum + val, 0);
    // if(x % sum ===0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return x % sum == 0 ? true : false;    
}

console.log(solution(11));

//this is possible too. amazing people..

function Harshad(n){
    return !(n%(n+'').split('').reduce(function (i, sum) {return +sum + +i;}));
  }
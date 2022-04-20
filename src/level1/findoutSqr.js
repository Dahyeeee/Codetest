function findout(num){
    let x = Math.sqrt(num);
    return Number.isInteger(x) ? Math.pow(x+1,2) : -1;
}

console.log(findout(9));
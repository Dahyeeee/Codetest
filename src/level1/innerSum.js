function solution(a,b){
    let multiply = []
    for(let i =0; i<a.length ; i++){
        multiply.push(a[i]*b[i]);
    }
    return multiply.reduce((a,b)=>a+b,0);
}

//sum =0;
//sum += a[i]*b[i]


//한줄코드 ㅎㅎㅎ
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
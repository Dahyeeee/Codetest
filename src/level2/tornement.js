//did it by myself!!
function solution(N, A, B){
    let round =1;
    for(let i =N; i>0 ; i /= 2){
        A = Math.ceil(A/2);
        B = Math.ceil(B/2);
        console.log(A, B)
        if(A != B) round++
        else break;
    }
    return round;
}

console.log(solution(8, 4, 7))

//while문 잘 쓰면 될 텐데 ㅎㅅㅎ 어렵네
//while(a !== b){
//     a =Math.ceil(a/2);
//     b =Math.ceil(b/2);
//     answer++
// }

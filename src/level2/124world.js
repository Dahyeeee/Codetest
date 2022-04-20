function solution(n) {
    var answer = '';
    const oneTwoFour = ['4','1','2']
    while (n>0){
        const remainder = n % 3
        answer = oneTwoFour[remainder] + answer;
        n = Math.floor((n-1)/3) //나누어떨어지지 않을 때에도 -1해도 상관없음
    }
    return answer;
}

//재귀함수 사용
function change124(n) {
    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
  }
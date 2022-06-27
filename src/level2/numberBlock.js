//효율성 통과 못함 ㅎㅅㅎ
function solution(begin, end) {
  let asnwer = [];
  for (let i = begin; i <= end; i++) {
    let each = getBlockNum(i);
    asnwer.push(each);
  }

  function getBlockNum(num) {
    if (num === 1) return 0;
    let divider = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divider = num / i;
        break;
      }
    }

    console.log(divider);
    return divider;
  }

  return asnwer;
}

console.log(solution(10, 20));

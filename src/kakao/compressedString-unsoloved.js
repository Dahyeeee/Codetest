//other's need to try again later
function solution(s) {
    var answer = 0;
    let lengthArr = []
    for(let i=1; i<=s.length/2; i++) lengthArr.push(compressedString(s, i).length)
    answer = Math.min(...lengthArr)
    return answer;
}
function compressedString(str, unitNum){
    let count = 1
    let result = ['']
    for(let repeat=0; repeat<=str.length/unitNum; repeat++) {
        const slicedGroup = str.slice(unitNum * repeat, unitNum * repeat+ unitNum)
        if (result[result.length - 1] === slicedGroup) {
            count++
        } else {
            if(count > 1) result[result.length - 1] = count + result[result.length - 1]
            result.push(slicedGroup)
            count = 1
        }
    }
    return result.join('')
}  

const others = s => {
    const range = [...Array(s.length)].map((_, i) => i + 1);
    return Math.min(...range.map(i => compress(s, i).length));
  };
  
  const compress = (s, n) => {
    const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
    return make(
      chunk(s, n).reduce(
        ([a, l, c], e) => e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1],
        ['', '', 0]
      )
    );
  };
  
  const chunk = (s, n) =>
    s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];

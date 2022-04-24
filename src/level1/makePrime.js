//unsolved
function solution(nums){
    function isPrime(x){
        let result = false;
        for(let i=2 ; i<= Math.sqrt(x); i++){
            if(x%i ===0 ) result= false;
            else result = true;
        }
        return result;
    }
    let len = nums.length, answer = 0;
  
    for (let i = 0; i < len - 2; i++) {
      for (let j = i + 1; j < len - 1; j++) {
        for (let k = j + 1; k < len; k++) {
          if (isPrime(nums[i] + nums[j] + nums[k])) {
            answer++;
          }
        }
      }
    }
    return answer;
}

console.log(solution([4,6,8,7,9,12]))
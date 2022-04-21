function solution(nums){
    let answer = 0;
    let pick =nums.length/2;
    const newNums = [...new Set(nums)];
    newNums.length >= pick ? answer = pick : answer = newNums.length;

    return answer;
}
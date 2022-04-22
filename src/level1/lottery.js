function solution (lottos, win_nums){
    let newLottos = lottos.filter((item) => item != 0);
    const unknownNumbers  =lottos.length - newLottos.length;
    let match =7;
    const highestRank = match-unknownNumbers;
    let result = [];
    for(nums of newLottos){
        if(win_nums.includes(nums)) match --;
        }
    if(highestRank === 7) highestRank = 6;
    if(match ===7) match = 6;
    result.push(match-unknownNumbers);
    result.push(match);
    return result;
}

solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19])

//rank을 배열로 만들어두면 되는 군. 
function others(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}
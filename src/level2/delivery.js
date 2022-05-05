//so unsolved
function solution(N, road, K){
    let answer=0;
    let dict = {1:0};
    road.forEach(each =>{
        [prev, next] = each.slice(0,2).sort();
        if(!dict[next]){
            if(prev ===1) dict[next] = each[2]
            else dict[next] = dict[prev]+each[2]
        }
        else(dict[next])
    })
}

console.log(solution(5,[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]],3))
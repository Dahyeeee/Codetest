//others try again later

function solution(N, stages){
    let result = [];
    let stageNFailRate =[];
    for (let stage =1; stage<=N; stage ++){
        const playerReached = stages.filter(player => player >=stage).length;
        const playerChallneging = stages.filter(player => player === stage).length;
        stageNFailRate.push([stage, playerChallneging/playerReached]);
    }
    stageNFailRate.sort((a,b) =>b[1]-a[1])
    result = stageNFailRate.map(stage =>stage[0]);
    return result;
}

console.log(solution(5,[2,1,2,6,2,4,3,3]))
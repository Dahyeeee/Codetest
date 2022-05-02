//I did it :)

function solution(N, stages){
  let failRate = []
  for(let i=1 ; i<=N; i++){
    let passThisStage = stages.filter((a)=>a >= i).length;
    let stayingThisStage = stages.filter(a=>a===i).length;
    failRate.push([i, stayingThisStage/passThisStage]);
  }
  console.log(failRate)
  failRate.sort((a,b)=>b[1]-a[1]);
  const result = failRate.map((a)=>a[0])
  return result;
}

console.log(solution(5,[2,1,2,6,2,4,3,3]))
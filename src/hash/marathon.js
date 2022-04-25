function marathon(participant, completion){
  let obj ={};
  participant.forEach(player =>{
      if(obj[player] > 0){
          obj[player]++;
      }else{
          obj[player] =1;
      }
  })
  console.log(obj);
  completion.forEach(player =>{
      obj[player] --;
  })
  console.log(obj);
  return Object.keys(obj).filter(player => obj[player]>0).toString('');
}

marathon(['a','d','c','d'],['a','d','c'])

//other's obj대신 map을 쓰는 게 더 좋을 듯

function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];
        // 이부분 이해 안감.
        // map.get(a)가 있으면 있는 거 쓰고 없으면 0을 쓰라는 거임
        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}
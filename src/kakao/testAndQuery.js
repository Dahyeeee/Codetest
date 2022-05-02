function solution(info, query){
    class Appliers  {
        constructor(language, position, level, food, score){
            this.language = language
            this.position = position
            this.level = level
            this.food = food
            this.score = score
        }
    }

    let infors = [];
    const newInfo = info.map((a)=>a.split(' '));
    console.log(newInfo)
    for(info of newInfo){
        const applier = new Appliers(info[0],info[1],info[2],info[3],+info[4]);
        infors.push(applier);
    }
    console.log(infors);
    const newQuery = query.map((a)=>a.split(' '))
    const finalQuery = newQuery.map((a)=> a.filter((b)=> b !=='and').map((c)=> {
        return c === '-' ? c = false : c =c
    }));
    console.log(finalQuery);
    
    //도랏 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ but it works...
    function findMatch(query){
        let count =0;
        for(let applier of infors){
            if(query[0]? query[0]===applier.language : true
             && query[1]? query[1]===applier.position : true){
                 if(query[2]? query[2]===applier.level : true
                 && query[3]? query[3]===applier.food: true){
                    if(query[4]? +query[4]<=applier.score: true){
                        count++
                        }
                    }
                }
            }
        return count;
    }

    let result = finalQuery.map((a)=>findMatch(a));
    return result;
}

console.log(secondTry(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],
["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]))

function secondTry(info, query){
  const newInfo =info.map(a => a.split(' ').join()).map((a)=>{
      let index = a.match(/\d+/)
      return [a.replace(/\d+/,'').split(',') ,+index[0]]
  })
  const newQuery = query.map(a=>a.split(' '))
                        .map(a => a.filter(b => b!= 'and'&& b !='-').join())
                        .map((a)=>{
                            let index = a.match(/\d+/);
                            return [a.replace(/\d+/,'').split(','),+index[0]]
                        })
  console.log(newInfo, newQuery)
  let result =[]
  for(let query of newQuery){
      let count =0;
      for(let info of newInfo){
          if(info[0].includes(...query[0]) && info[1] >= query[1]) count++
      }
      result.push(count)
  }
  return result;
}
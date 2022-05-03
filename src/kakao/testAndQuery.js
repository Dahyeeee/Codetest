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

//효율성을 어케 돌파해야하나~~ 하나씩 비교해서는 통과못하나봄.
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
          if(query[0].every(req => info[0].includes(req)) && info[1] >= query[1]) count++
      }
      result.push(count)
  }
  return result;
}

function trial(a,b){
    if(a.includes(...b)) return b
    else return a
}

console.log(trial([1,2,3],[1,2]))

//havne't checked yet
function others(info, query) {
    // info의 크기는 50K
    // query의 크기는 100K
    // info에 대해서 query를 전부 검사하는 것은 시간 복잡도 실패
    // info를 인덱싱하는 문제
  
    const props = [
      ['cpp', 'java', 'python'],
      ['backend', 'frontend'],
      ['junior', 'senior'],
      ['chicken', 'pizza'],
    ];
  
    let applicants = {};
    const indexProps = (parent, depth) => {
      if (depth === props.length) return;
      props[depth].forEach((p) => {
        if (depth === props.length - 1) parent[p] = [];
        else parent[p] = {};
        indexProps(parent[p], depth + 1);
      });
    };
    indexProps(applicants, 0);
  
    info.forEach((person) => {
      const [stack, fb, level, food, score] = person.split(' ');
      applicants[stack][fb][level][food].push(Number(score));
    });
  
    const cache = {};
    const getApplicants = (parent, props, depth) => {
      if (depth === props.length) return parent;
  
      if (props[depth] === '-') {
        return Object.values(parent).reduce((acc, item) => {
          return acc.concat(getApplicants(item, props, depth + 1));
        }, []);
      } else {
        return getApplicants(parent[props[depth]], props, depth + 1);
      }
    };
    const cnt = [];
    query.forEach((q) => {
      const [st, fb, lv, fd, sc] = q.replace(/\sand\s/g, ' ').split(' ');
      const props = [st, fb, lv, fd];
      // 점수만 제외하고 가져온다.
      const propStr = props.join(',');
      if (cache[propStr] === undefined) {
        cache[propStr] = getApplicants(applicants, props, 0).sort(
          (a, b) => a - b
        );
      }
  
      if (sc === '-') cnt.push(cache[propStr].length);
      else {
        const num = Number(sc);
        let left = 0;
        let right = cache[propStr].length - 1;
        while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (num <= cache[propStr][mid]) right = mid - 1;
          else left = mid + 1;
        }
        cnt.push(cache[propStr].length - left);
      }
    });
    return cnt;
  }
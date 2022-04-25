function solution(s){
    let result = [];
    const sArr = s.slice(2,-2)
                    .split('},{')
                    .filter((a)=> a)
                    .map((a)=>a.match(/\d+/g))
                    .sort((a,b)=>a.length - b.length);
    for(thing of sArr){
        for(let i =0; i <thing.length ; i++){
        if(!result.includes(thing[i])) result.push(thing[i])
       }                
    }
    console.log(sArr);
    return Array.from(result,Number);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
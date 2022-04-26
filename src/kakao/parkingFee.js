function solution(fees, records){
    const recordsArr = records.map((a)=> a.split(' '));
    console.log(recordsArr);
    const carMap = {}
    for(let record of recordsArr){
        carMap[record[1]] = [];
    }
    for(let record of recordsArr){
        carMap[record[1]].push(record[0].split(':').join(''))
    }    
    console.log(Object.keys(carMap).sort((a,b)=>b-a));
    console.log(carMap);

}

console.log(solution([180, 5000, 10, 600],
    ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]))
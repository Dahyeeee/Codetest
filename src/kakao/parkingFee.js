//I know it's long. but i did it!!!!!
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
    let carAndTime =[]
    for(const key in carMap){
        if(carMap[key].length %2 !=0) carMap[key].push('2359');
        let stayedtime =0;
            for(let i=1 ; i<carMap[key].length ; i +=2){
            stayedtime += (changeTimetoMinute(carMap[key][i])-changeTimetoMinute(carMap[key][i-1]));
            console.log(stayedtime, `${key}: ${stayedtime}`);
            }
        carAndTime.push([`${key}`,+`${stayedtime}`])
    }
    carAndTime.sort((a,b)=>a[0]-b[0]);
    console.log(carAndTime)

    function changeTimetoMinute(time){
        return Math.floor(time/100)*60 + time%100;
    }

    function chargeFee(arr){
        const [basicTime, basicFee, extraTime, extraFee] = fees;
        if(arr[1]<= basicTime) return basicFee;
        else {
            let fee = Math.ceil((arr[1]-basicTime)/extraTime)*extraFee +basicFee;
            return fee;
        }
    }
    console.log(chargeFee(['a', 670]));
    const result=[];
    for(car of carAndTime){
        result.push(chargeFee(car));
    }
    return result;
}

console.log(solution([180, 5000, 10, 600],
    ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]))

//other's 아직 안봄. 나중에 봐야지~~~
function solution(fees, records) {
    const parkingTime = {};
    records.forEach(r => {
        let [time, id, type] = r.split(' ');
        let [h, m] = time.split(':');
        time = (h * 1) * 60 + (m * 1);
        if (!parkingTime[id]) parkingTime[id] = 0;
        if (type === 'IN') parkingTime[id] += (1439 - time);
        if (type === 'OUT') parkingTime[id] -= (1439 - time);
    });
    const answer = [];
    for (let [car, time] of Object.entries(parkingTime)) {
        if (time <= fees[0]) time = fees[1];
        else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1]
        answer.push([car, time]);
    }
    return answer.sort((a, b) => a[0] - b[0]).map(v => v[1]);
}
function solution(n, lost, reserve){
    let result = n - lost.length;
    let newLost = lost.sort((a,b)=>a-b);
    let newReserve = reserve.sort((a,b)=>a-b);
    for(item of newLost){
        if(newReserve.includes(item)){
            result += 1
        }
    }
    newLost =newLost.filter((item)=> !newReserve.includes(item));
    newReserve =newReserve.filter((item)=> !lost.includes(item));
    for(item of newLost){
        if(newReserve.includes(item-1) || newReserve.includes(item+1)){
            result++;
            newLost = newLost.filter((dele)=>dele !== item);
            let lendNumber = newReserve.find((num)=> num == item-1 || num == item+1);
            newReserve = newReserve.filter((dele)=>dele != lendNumber);
        }
    }
    return result;
}

//solution(5,[1,2,4],[2,4,5]);
solution(5,[1,2,4],[2,3,4,5]);

//case한개 실패뜨지만 그래도!
function solution(n, lost, reserve) {      
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}
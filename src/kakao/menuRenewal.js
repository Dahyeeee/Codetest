//did it! combine은 내가 한거 아니지만~ object idea 가져와서 했당
function solution1(orders, course){
    const ordersArr = orders.map((a) =>a.split('').sort());
    
    console.log(ordersArr);
    let popularCombo=[]
    for(let num of course){
        const combos ={};
        for(let order of ordersArr){
            let combis = combine(order, num);
            for(let combi of combis) combos[combi] = (combos[combi]||0) +1
        }
        let max=1
        
        for(let value of Object.values(combos)){
            if(value>max) max= value
        }
        for(let [key,value] of Object.entries(combos)){
            if(value===max && max>1) popularCombo.push(key.split(',').join(''))
        }
        console.log(combos, popularCombo);
    }

    function combine(array, length) {
        if(length ===1) return array.map((v)=>[v]);
        const result = [];
        array.forEach((v,i)=>{
            const rest = array.slice(i+1);
            const combination = combine(rest, length-1);
            const attached = combination.map((combi)=>[v,...combi]);
            result.push(...attached);
        })
        return result;
    }
    return popularCombo.sort()
}

console.log(solution1(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],[2,3,4]))
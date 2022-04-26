//뭔가 하긴 했는데 문제 이해를 잘 못한 듯. 
function solution(orders,course){
    let tempMenu = orders.join('');
    const menus = [...new Set(tempMenu)];
    console.log(menus)
    const possibleCombos =[];

    function combine(array, length) {
        if(length ===1) return array.map((v)=>[v]);
        const result = [];
        array.forEach((v,i)=>{
            const rest = array.slice(i+1);
            const combination = combine(rest, length-1);
            const attached = combination.map((combi)=>[v,...combi]);
            result.push(...attached);
        })
        return checkOrderNumber(result);
    }
    
    function checkOrderNumber(combos){
        let result = combos.filter((combo)=>{
            let count =0;
            for(let order of orders){
                if(combo.every((a)=>order.includes(a))) count++
                if(count >=2) return combo 
        }
    })
    return result;
  }
    const answer=[];
    for( num of course){
       answer.push(...combine(menus, num));
    }
    const finalAnswer = answer.map((a)=>a.join(''))
    return finalAnswer.sort();
}

console.log(solution(["AC", "CD", "ADE", "XYZ", "XYZ", "AD"],[2,3,5]))
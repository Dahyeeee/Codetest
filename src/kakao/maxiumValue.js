//unsolved
function solution(expression){
    const cases = [
        ['*','+','-'],['*','-','+'],
        ['+','*','-'],['+','-','*'],
        ['-','*','+'],['-','+','*']
    ]    

    const e = expression.split(/\D/);
    const operator = expression.split(/\d/).filter(a=>a!=='')
    console.log(e,operator)
    //[20,'+',3,'*',5] 식으로 수식을 array에 넣음
    let formula =[]
    e.forEach((num, i )=>{
        formula.push(+num);
        if(operator[i]) formula.push(operator[i])
    })
    console.log(formula)
    let result =[]
    //something's wrong here.
    cases.forEach((c)=>{
        let newFormula = [...formula]
        c.forEach((symbol)=>{
        
        for(let i=0; i<newFormula.length ; i++){
            if(newFormula[i]===symbol) {
                const outcome = calculate(newFormula[i-1],newFormula[i+1],newFormula[i]);
                newFormula.splice(i-1,3,outcome);               
            }
            //console.log(newFormula)
        }
    })
    result.push(...newFormula)
})
    console.log(result)
    function calculate(a,b,operate){
        if(operate ==='*') return a*b;
        if(operate ==='+') return a+b;
        if(operate ==='-') return a-b;
    }

    result = result.map(a=> Math.abs(a));
    return Math.max(...result);
}

console.log(solution("100-200*300-500+20"))
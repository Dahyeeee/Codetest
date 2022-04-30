function solution(msg){
    let code = ['A','B','C','D','E','F','G','H','I','J','K','L',"M","N",'O','P',"Q",'R','S','T','U','V','W','X','Y','Z']
    let msgArr =msg.split('');
    console.log(msgArr)
    let answer = []
    let stringArr = createCombos(msg);
    
    function getCode(stringArr) {
     for(let i =0; i<stringArr.length ; i++){
        if(stringArr.length===1){
            const index = code.indexOf(stringArr[i]);
            answer.push(index+1)
            break;
        }
        if(code.includes(stringArr[i])){
            const index = code.indexOf(stringArr[i]);
            answer.push(index+1);
            code.push(stringArr[i-1]);
            console.log(i)
            let rest = createCombos(stringArr[0].slice(stringArr[i].length));
            console.log(rest)
            getCode(rest);
        }
        
        if(stringArr.length ===0) break;
        }   
    }

    function createCombos(rest){
        let combos = []
        for(let i=1; i<=rest.length ; i++){
            combos.push(rest.slice(0,i))
        }
        return combos.reverse();
    }
    
    getCode(stringArr);
    console.log(code)
    console.log(createCombos(msg))
    return answer;
}

console.log(solution('KAKAO'))
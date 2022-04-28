//try again later
function solution(p){
    if(!p) return '';
   
    let bracketCount =0;
    let isURight = true;
    for(let i =0; i<p.length ; i++){
        bracketCount = p[i]==='(' ? bracketCount +1 : bracketCount -1;
        if(bracketCount < 0) isURight = false;
        if(bracketCount == 0){
            const u = p.slice(0,i+1);
            const v = p.slice(i+1);
            if(!isURight){
                const rest = solution(v)
                const newU = u.slice(1,u.length-1).split('')
                            .map(bracket =>bracket === '(' ? ')' : '(' )
                            .join('')
                const newP = `(${rest})${newU}`
                return newP;
            }
            else {
                const rest = solution(v);
                return u+rest
            }
        }
    }
}

console.log(solution("()))((()"))
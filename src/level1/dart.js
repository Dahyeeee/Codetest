//I did it by myself!!!!! HAhahahahahah!!!
function soultion(dartResult){
    let result = [];
    const reg = /[0-9]+/g;
    const everyRoundScore = Array.from(dartResult.match(reg),Number);
    const everyRound = dartResult.split(/[0-9]/).filter((a)=>a !='');
    console.log(everyRound, everyRoundScore);
    for(let i =0 ; i<3 ; i++){
        if(everyRound[i].includes('D')){
            result.push(Math.pow(everyRoundScore[i],2))
        }
        if(everyRound[i].includes('S')){
            result.push(everyRoundScore[i]);
        }
        if(everyRound[i].includes('T')){
            result.push(Math.pow(everyRoundScore[i],3));
    }}
    for(let i=0;  i <3 ; i++){
        if(everyRound[i].includes('*')){
           result[i]= result[i]*2;
           result[i-1] =result[i-1]*2
        }
        if(everyRound[i].includes('#')){
            result[i] = result[i]*-1;
        }
    }
    return result.reduce((a,b)=>a+b,0)
}

console.log(soultion(('1D*2S#10S')))
function solution(name){
    let upDownCount =0;
    let leftRightCountList= name.length-1;
    for(let i=0; i<name.length ; i++) upDownCount += minUpOrDownCount(name[i]);
    let notAIndex = [];
    for(let i=1; i<name.length ; i++){
        if(name[i] !== 'A') notAIndex.push = i;
    }
    let Anumber1 =0;
    let Anumber2 = 0;
    for(let i=1; i < notAIndex[0] ; i++){
     if(name[i]==='A') Anumber1 ++
    }
    for(let i=name.length-1 ; i < notAIndex[notAIndex.length-1] ; i--){
        if(name[i]==='A') Anumber2 ++
    }
    leftRightCountList = Math.max(Anumber1,Anumber2);
    function minUpOrDownCount(destination){
        const Alpabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const index = Alpabet.indexOf(destination);
        return Math.min(index, Alpabet.length - index);
    }

    return upDownCount+leftRightCountList;
}

//왜 안되지? 될법한디..
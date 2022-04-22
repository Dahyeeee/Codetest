function solution(name){
    let upDownCount =0;
    let leftRightCountList= name.length-1;
    for(let i=0; i<name.length ; i++) upDownCount += minUpOrDownCount(name[i]);
    let notAIndex = [];
    for(let i=1; i<name.length ; i++){
        if(name[i] !== 'A') notAIndex.push = i;
    }
    for(let i=1; i < notAIndex[0] ; i++){
     if(name[i]==='A') leftRightCountList --
    }
    function minUpOrDownCount(destination){
        const Alpabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const index = Alpabet.indexOf(destination);
        return Math.min(index, Alpabet.length - index);
    }

    return upDownCount+leftRightCountList;
}

//왜 안되지? 될법한디..
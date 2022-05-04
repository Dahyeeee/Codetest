//unsolved.
function solution(name){
    let upDownCount =0;
    let leftRightCountList= 0;
    for(let i=0; i<name.length ; i++) upDownCount += minUpOrDownCount(name[i]);
    if(!name.includes('A')) leftRightCountList = name.length-1;
    let notAIndex = [];
    for(let i=1; i<name.length ; i++){
        if(name[i] !== 'A') notAIndex.push(i);
    }
    let Anumber1 =0;
    let Anumber2 = 0;
    for(let i=1; i <= notAIndex[0] ; i++){
     if(name[i]==='A') Anumber1 ++
    }
    console.log(Anumber1)
    for(let i=name.length-1 ; i>notAIndex[notAIndex.length-1] ; i--){
      if(name[i]==='A') Anumber2 ++
    }
    console.log(Anumber2)
     if(Anumber2===0) leftRightCountList +=1
     else if(Anumber1<=Anumber2) leftRightCountList += notAIndex[notAIndex.length-1]
     else leftRightCountList = name.length-notAIndex[1]+1
    console.log(notAIndex[notAIndex])
    function minUpOrDownCount(destination){
        const Alpabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const index = Alpabet.indexOf(destination);
        return Math.min(index, Alpabet.length - index);
    }
    console.log(upDownCount)
    console.log(leftRightCountList)
    return upDownCount+leftRightCountList;
}

console.log(solution('JEOROEN'))
//왜 안되지? 될법한디..
//haven't checked yet
function others(name) {
    var answer = 0;
    const length = name.length;
    let upDownCount = 0
    let leftRightCountList = [length - 1]//한 방향으로 쭉 갔을 때
    for (let i = 0; i < length; i++) upDownCount += minUpOrDownCount(name[i])
    for (let startOfA = 0; startOfA < name.length; startOfA++) {
        let endOfA = startOfA + 1;
        while (endOfA < length && name[endOfA] === 'A') endOfA++;
        const [moveToStartOfA, moveToEndOfA] = [startOfA, length - endOfA]
        leftRightCountList.push(moveToStartOfA * 2 + moveToEndOfA)// 0 -> A.., 0 <- A.., ..A <- -1
        leftRightCountList.push(moveToEndOfA * 2 + moveToStartOfA)//시작부터 뒤로 가는 경우 ..A <- -1, ..A -> -1, 0 -> A..
    }
    answer = upDownCount + Math.min(...leftRightCountList)
    return answer;
}

function minUpOrDownCount(destination) {
    const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const index = Alphabet.indexOf(destination)
    return Math.min(index, Alphabet.length - index)
}
function solution(str1,str2){
    let newStr1 = str1.toUpperCase().split('');
    let newStr2 = str2.toUpperCase().split('');
 
    let pairArr2 = [];
    for(let i=1; i<str2.length ; i++){
        pairArr2.push(newStr2[i-1]+newStr2[i]);
    };
    let pairArr1 = [];
    for(let i=1; i<str1.length ; i++){
        pairArr1.push(newStr1[i-1]+newStr1[i]);
    };  
   
    console.log(newStr2.length);
    console.log(pairArr1)
    const finalArr1= pairArr1.filter((item)=> item.match(/^\w+$/||/^\d+$/));
    const finalArr2= pairArr2.filter((item)=> item.match(/^\w+$/||/^\d+$/));
    const union = new Set([...finalArr1,...finalArr2]);
    console.log(finalArr1,finalArr2,union)
    let commonAtLeast = 0;
    let commonAtMost =0;
    for(slice of union){
        let a= finalArr1.filter(x=>x===slice).length;
        let b= finalArr2.filter(x=>x===slice).length;
        commonAtLeast += Math.min(a,b);
        commonAtMost += Math.max(a,b);
    }
    console.log(commonAtLeast,commonAtMost);
    if(commonAtLeast==0) return 65536;
    let result = (commonAtLeast/commonAtMost)*65536
    return result === NaN ? 65536 : Math.floor(result)
}

//console.log(solution(E=M*C^2,'AAAA12'))

//i haven't understood this. will check later~
//other's 근접하게 간거 같은데 ㅎㅅㅎ 함수 안에 함수쓰는 거 익숙해져야겠당~~
function solution2(str1, str2) {
    var answer = 0;
    let compare1 = verifiedSlices(str1);
    let compare2 = verifiedSlices(str2);
    const union = new Set([...compare1, ...compare2])
    console.log(union)
    let multiIntersectionLen = 0, multiUnionLen = 0
    for (const slice of union) {
        const compare1Count = compare1.filter(x => x === slice).length,
            compare2Count = compare2.filter(x => x === slice).length
        multiIntersectionLen += Math.min(compare1Count, compare2Count)
        multiUnionLen += Math.max(compare1Count, compare2Count)
    }
    answer = multiUnionLen === 0 ?
     65536 : Math.floor(multiIntersectionLen / multiUnionLen * 65536)
    return answer;
}

function verifiedSlices(str) {
    const onlyAlphabet = /[a-zA-Z]{2}/
    let result = []
    for (let i = 0; i < str.length - 1; i++) {
        const slice = str.slice(i, i + 2)
        if (onlyAlphabet.test(slice)) result.push(slice.toLowerCase())
    }
    return result
}

console.log(solution('E=M*C^2','e=m*c^2'))
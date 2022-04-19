function repeatString(n){
    let answer = '';
    for(let i =0; i <n ; i++){
        i%2 ? answer +='박' : answer +='수' 
    }
    return answer;
}

//this one is nice
const waterMelon = n => "수박".repeat(n).slice(0,n);
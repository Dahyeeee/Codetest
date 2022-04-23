function solution(absolute, signs){
    const realArr = absolute.map((item,index)=>{
        if(signs[index] == true)
        return item = item 
        else return item = item*-1
    })
    return realArr.reduce((a,b)=>a+b,0)
}

console.log(solution([2,4,3,53],[true,false,false,true]))

//굳이 안바꾸고 빼주기도 가능 
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer;
}
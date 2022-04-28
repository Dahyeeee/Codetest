//try again later
function solution(record){
    let answer = [];
    let users ={}
    record.forEach(history =>{
        const[action , id, name] = history.split(' ')
        if(action !== 'Leave') users[id] = name
    });
    console.log(users)
    record.forEach(history =>{
        const[action, id, name] =history.split(' ');
        if(action == 'Enter') answer.push(`${users[id]}님이 들어왔습니다.`)
        if(action == 'Leave') answer.push(`${users[id]}님이 나갔습니다.`)
    })
    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo",
"Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))
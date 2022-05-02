//I did it :)
function solution(record){
    const newRecord = record.map(each => each.split(' '))
    let records ={};
    for(each of newRecord){
        if(each[0] != 'Leave') records[each[1]] = each[2]
    }
    let result=[];
    newRecord.forEach((a)=>{
        if(a[0]==='Enter') result.push(`${records[a[1]]}님이 들어왔습니다.`)
        else if(a[0]==='Leave') result.push(`${records[a[1]]}님이 나갔습니다.`)
    })
    console.log(records)
    return result;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo",
"Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))
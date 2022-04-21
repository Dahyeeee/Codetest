function solution(array, commands){
    let answer = [];
    commands.forEach((item)=>{
        let newArray = array.slice(item[0]-1,item[1]).sort((a,b)=>a-b);
        console.log(newArray)
        answer.push(newArray[item[2]-1]);
    })
    return answer;
}

solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])

function others(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}
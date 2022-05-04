function solution(key, lock){
    let newArr =[];
    
}

function rotateKey(key){
    const answer =[];
    const row =key.length;
    const col =key[0].length;
    for(let i=0; i < col; i++){
        const temp=[];
        for(let j=0; j <row ; j++){
            temp.push(key[row-1-j][i]);
        }
        answer.push(temp);
    }
    return answer;
}

function moveRightKey(key){
    const answer=[];
    const row =key.length;
    const col = key[0].length;
    for(let i=0; i<col; i ++){
        const temp=[];
        for(let j=0 ; j< row; j++){
            let changing = key[i][j-1]
            temp.push(changing ? changing : 0)
        }
        answer.push(temp)
    }
    return answer;
}
console.log(rotateKey([[1,0,0],[1,1,1],[1,0,1]]))

function moveDownKey(key){
    const answer=[];
    const row=key.length;
    const col = key[0].length;
    for(let i=1; i <col ; i++){
        temp =[];
        for(let j=0; j<row ; j++){
            let changing = key[i-1][j];
            temp.push(changing ? changing : 0);
        }
        answer.push(temp)
    }
    return answer;
}

function isRightKey(arr){
    arr.every(a => a.every(b => b === 1))? true : false
}

console.log()
//unsolved hardy solved.
function turn(m,n,board,answer){
    const boardArray = board.map(a=>a.split(''));
    
    let removeItem = []
    for(let i =0; i <n-1 ; i ++){
        for(let j =0; j <m-1 ; j++){
            let item = boardArray[j][i];
            if(item === '0') continue;
            let bottonRight = boardArray[j+1][i+1];
            let botton = boardArray[j+1][i];
            let right = boardArray[j][i+1];
            if(item === bottonRight && item=== botton && item ===right){
                removeItem.push(`${j},${i}`)
                removeItem.push(`${j},${i+1}`)
                removeItem.push(`${j+1},${i}`)
                removeItem.push(`${j+1},${i+1}`)       
            }
        }
    }
    console.log(removeItem)
    removeItem =Array.from(new Set(removeItem))
    console.log(removeItem.length)
    if (removeItem.length >0){
        answer += removeItem.length;
        removeItem.forEach(i =>{
            let y = +(i.split(',')[0])
            let x = +(i.split(',')[1])
            boardArray[y][x]='0';
        });
        for (let i =1; i <m; i++){
            for(let j =0; j<n ; j++){
                let flag = true;
                let sY =i;
                let sX =j;
              //  while(sY>0){
                    if(boardArray[sY][sX]==='0'){
                        boardArray[sY][sX]= boardArray[sY-1][sX];
                        board[sY-1][sX] ='0'
                    }
                    sY --;
                }
            }
        }
        answer =turn(m, n, board, answer);
    }
    return answer;
}

function solution(m,n,board){
    let answer =0;
    answer = turn(m,n,board,answer);
    return answer;
}

console.log(solution(4,5,["CCBDE", "AAADE", "AAABF", "CCBBF"]))
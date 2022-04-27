function solution(m,n,board){
    let answer = 0;
    const boardArray = board.map(a=>a.split(''));
    
    for(let i =0; i <n-1 ; i ++){
      if(boardArray[i][i]==boardArray[i][i+1]
       &&boardArray[i+1][i]==boardArray[i+1][i+1]
       &&boardArray[i][i]==boardArray[i+1][i])

        }
    }
}
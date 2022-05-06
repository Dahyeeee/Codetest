//I'm quite close. but it's pretty mess...!
function solution(m, n, board){
    board = board.map(el => el.split(''));
    
    while(true){
        let breakList =[];
        for(let i=0 ; i<m-1 ; i++){
            for(let j =0; j< n-1; j++){
                if(board[i][j] != ''
                && board[i][j]==board[i][j+1]
                && board[i+1][j]==board[i+1][j+1]
                && board[i][j]==board[i+1][j])
                breakList.push([i, j]);
            }
        }
        console.log(breakList)
        if(breakList.length ==0 ) break;
        
        //같은 블럭자리를 비워주기
        for(let i=0; i<breakList.length; i++){
            board[breakList[i][0]][breakList[i][1]] = '';
            board[breakList[i][0]+1][breakList[i][1]] = '';
            board[breakList[i][0]][breakList[i][1]+1] = '';
            board[breakList[i][0]+1][breakList[i][1]+1] = '';
        }

       // 중력으로 내려주기
       // problem here.    
        for(let i=0 ; i<n ; i++){
            let emptySpace=0;
            for(let j =m-1; j>=0 ; j--){
                if(board[j][i]==''){
                    emptySpace++
                }
                else{
                    if(emptySpace != 0){
                        for(k= j ; k>=0 ; k--){
                            board[k+emptySpace][i] =board[k][i];
                        }
                        for(let q=0 ; q<emptySpace ; q++){
                            board[q][i] =''
                        }
                         emptySpace =0;
                    }
                }
            } console.log(emptySpace)
        }
    }
    console.log(board)
    let count =0;
    board.forEach(a=> a.forEach(b =>{
        if(b==='') count++
    }))
    return count;
}
let a =["AABBEE","AAAEEE","VAAEEV","AABBEE","AACCEE","VVCCEE" ]
console.log(solution(6,6,["AABBEE","AAAEEE","VAAEEV","AABBEE","AACCEE","VVCCEE" ]))
console.log(a.map((a)=>a.split('')))
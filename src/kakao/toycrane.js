//it kinda worked. can't pass few tests
function solution(board, moves){
    let basket = [];
    let result =0;
    const newMoves = moves.map((item)=>item-1);
    //basket에 뽑은 인형을 넣어놈
    for(let move of newMoves){
        const toyrow = board.find(item=> item[move] !== 0);
        if(toyrow !== undefined) {
            basket.push(toyrow[move])
            toyrow[move] = 0;
        }
    }
    console.log(basket);
    function removeToy(basket){
       let basket1 = [...basket]
        for(let i =1; i<basket1.length-1 ; i++){
            if(basket1[i]===basket1[i-1]){
                result +=2;
                basket1.splice(i-1,2);
                removeToy(basket1)
            }
           console.log(basket1)
        }
    }
    removeToy(basket);
    console.log(result);
    return result;
}
    

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]);
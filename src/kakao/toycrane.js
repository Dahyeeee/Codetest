//unsolved
function solution(board, moves){
    let basket = [0];
    let result =0;
    const newMoves = moves.map((item)=>item-1);
    for(let move of newMoves){
        const toyrow = board.find(item=> item[move] !== 0);
        if(toyrow !== undefined) {
            basket.push(toyrow[move])
            toyrow[move] = 0;
            
           // if(basket[-1] === basket[-2]) basket.pop(); basket.pop();
            result +=2
         //   break;
      }  }
     
      console.log(basket);
    // function removeToy(){
    //     for(let i=1; i<=basket.length ; i++){
    //         if(basket[i] === basket[i-1]){
    //             result +=2
    //             basket = basket.filter(item=>item != basket[i]);
    //             //console.log(basket);
    //             removeToy();
    //         }
    //     }
    // }
    // removeToy();
    console.log(result);
    return result;
}
    

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]);
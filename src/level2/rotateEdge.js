//soo unsolved

function solution(rows, columns, queries){
    const array = []
    for(let i=0 ; i<rows ; i++){
        let temp =[];
        for(let j=1; j<=columns; j++){
            temp.push(i*columns+j)
        }
        array.push(temp)
    }
    console.log(array);
    let outcome = rotateKey(array, [1,1],[2,2])
    console.log(outcome);
    function rotateKey(arr, start, end){
        const answer =[];
        const row =end[0]-start[0];
        const col =end[1]-start[1];
        for(let i=0; i <= col; i++){
            const temp=[];
            for(let j=0; j <=row ; j++){
                temp.push(arr[row-1-j][i]);
            }
            answer.push(temp);
        }
        return answer;
    }
}

console.log(solution(4,5,[[1,1,2,2],[1,2,2,3]]))
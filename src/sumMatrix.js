//행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
//2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

function sumMatrix(A,B){
    return A.map((a,i)=> a.map((b,j) => b+ B[i][j]));
}

//미쳤다. 내가 이걸 어떻게 알어 ㅎㅎㅎ

console.log(sumMatrix([[1,2],[3,4]],[[1,3],[8,9]]))

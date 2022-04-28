//not done yet! I'm very close though
function solution(relation){
    //1개가 유일한 애들 찾아냈음..그함수도 이렇게 긴데 ㅎㅅㅎ
    let result = 0;
    
    for(let i =1; i<=relation[0].length; i++){
        let comboAssemble = []
        for(arr of relation){
         let combo = generateCombinations(arr, i)
         comboAssemble.push(combo);
        }
         const unique = checkUniqueness(comboAssemble);
         console.log(comboAssemble)
         result +=unique
    }   
    return result;
}

function checkUniqueness(arr){
    let result =0;
    for(let i =0; i<= arr[0].length ; i++){
        let combos = [];
        for(let j=0; j< arr.length ; j++){
            combos.push(arr[j][i]);
        }
        const combosSet = new Set([combos])
        if(combos.length === combosSet.size) result++
    }
    return result;
}
console.log(solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","20"],["400","con","computer","12"],["500","muzi","music","25"],["600","apeach","music","29"]]))

function generateCombinations(sourceArray, comboLength) {
    const sourceLength = sourceArray.length;
    if (comboLength > sourceLength) return [];
  
    const combos = []; // Stores valid combinations as they are generated.
  
    // Accepts a partial combination, an index into sourceArray, 
    // and the number of elements required to be added to create a full-length combination.
    // Called recursively to build combinations, adding subsequent elements at each call depth.
    const makeNextCombos = (workingCombo, currentIndex, remainingCount) => {
      const oneAwayFromComboLength = remainingCount == 1;
  
      // For each element that remaines to be added to the working combination.
      for (let sourceIndex = currentIndex; sourceIndex < sourceLength; sourceIndex++) {
        // Get next (possibly partial) combination.
        const next = [ ...workingCombo, sourceArray[sourceIndex] ];
  
        if (oneAwayFromComboLength) {
          // Combo of right length found, save it.
          combos.push(next);
        }
        else {
          // Otherwise go deeper to add more elements to the current partial combination.
          makeNextCombos(next, sourceIndex + 1, remainingCount - 1);
        }
          }
    }
  
    makeNextCombos([], 0, comboLength);
    return combos;
    
  }
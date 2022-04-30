//not done yet! I'm very close though
function solution(relation){
    const attriNumber = Array.from(Array(relation[0].length),(x,index)=>index+1)
    //[1,2,3,4]
    let result =0;
    let uniqueIndex =[];
    for(let i =0; i<attriNumber.length ; i++){
      
      for(arr of relation){
      let combos =generateCombinations(arr,i)
      let combosSet = new Set(combos);
      if(combos.length == combosSet.size){
        uniqueIndex.push(i);
        result ++;
      }
    }
    console.log(result, uniqueIndex)
}
console.log(solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","20"],["400","con","computer","12"],["500","muzi","music","25"],["600","apeach","music","2"]]))

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
          combos.push(next.join(''));
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
function getAverage(arr){
    const sum = arr.reduce((accu,val) => accu +val,0);
    return (sum/arr.length).toFixed(1);
}

console.log(getAverage([12,4,3]))
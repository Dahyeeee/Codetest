function solution(files){
//unsolved. 
    class Files{
        constructor(fullname,string,number){
        this.fullname = fullname
        this.string = string
        this.number = number
        }
    }

    const array = []

    for(let file of files){
        array.push(new Files(file, findString(file), findNumber(file)))
    }

    const stringOrderArray = array.forEach((a)=>{
        a.string.sort()
    })

    function findString(file){
        // const reg = /^[A-Z]/g;
        // let result = file.replace(reg,'');
        return file.toUpperCase();
    }

    function findNumber(file){
        const reg = /\d/g;
        return +file.search(reg).join('');
    }
}

console.log(findNumber('FIile01.png'))

//what the heck
function solution(files) {
    var answer = [];
    const numberRegex = /[0-9]+/
    answer = files.sort((a, b) => {
        const [matchA, matchB] = [a.match(numberRegex), b.match(numberRegex)]
        const [headA, headB] = [a.slice(0, matchA.index).toLowerCase(), b.slice(0, matchB.index).toLowerCase()]
        const [numberA, numberB] = [parseInt(matchA[0]), parseInt(matchB[0])]
        return headA < headB ? -1 : headA > headB ? 1 : numberA < numberB ? -1 : numberA > numberB ? 1 : 0
    })
    return answer;
}
function wordPlay(n,words){
    let result =[];
   // 중복되는 단어가 있는 경우
    const sameWord = words.filter((item,index)=>{
        for(let i =index+1 ; i<words.length ; i++)
        if(item === words[i]){
            return item;
        }
    }).join('')
    if(sameWord !== '' ){
        const sameWordIndex = words.lastIndexOf(sameWord);
        let person;
        (sameWordIndex+1) % n === 0 ? person = n : person = (sameWordIndex+1) % n;
        result.push(person);
        result.push(Math.ceil((sameWordIndex+1)/n));
    }
//  마지막 알파벳과 첫 알파벳이 일치하지 않는 경우
    let wrongWord = '' 
        for(let i =1; i <words.length; i++){
            if( words[i-1].slice(-1) !== words[i][0]){
                wrongWord =  words[i];
            }
        }
    if(wrongWord !== ''){
        const wrongWordIndex = words.indexOf(wrongWord);
        let person2;
        (wrongWordIndex+1) % n === 0 ? person2 = n : person2 = (wrongWordIndex+1) % n;
        result.push(person2);
        result.push(Math.floor((wrongWordIndex+1)/n)+1);
    }
    else if(wrongWord =='' && sameWord == ''){
        result = [0,0];
    }
    return result;
}

console.log(wordPlay(3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));

function others(n, words){
    let turn =0;
    const newWords = [...new Set(words)]
    console.log(newWords);
    if(words.length == newWords.length){
        for(let i=1 ; i<words.length ; i++){
            let pass = (words[i][0] === words[i-1].slice(-1));
            if(i % n ===0) turn ++
            if(!pass) return [i%n+1, turn];
        }
    }
    if(words.length !== newWords.length){
        for(let i=0 ; i<words.length ; i++){
            for(let j=i+1 ; j < words.length ; j++){
            let pass = words[i] !== words[j];
            if(i % n === 0) turn ++
            if(!pass) return [j%n+1, Math.ceil(turn/n)];
        }
    }
}   
    return [0,0]
}

console.log(others(2,['land', 'dream', 'mom', 'mom']));
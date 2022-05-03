//yeahy! 
function solution(cacheSize, cities){
    if(cacheSize===0) return cities.length *5;

    let answer =0;
    cities = cities.map(a =>a.toUpperCase())
    let cache = [];
    cities.forEach((city)=>{
        if(!cache.includes(city)){
            answer +=5;
            if(cache.length<cacheSize) {
                cache.push(city);
            }else{
                cache.shift();
                cache.push(city);
            }    
        }else{
            answer +=1;
            cache = cache.filter(a=>a !== city);
            cache.push(city);
        }
    })
    return answer;
}

console.log(secondTry(3,["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]))

//other's but haven't checked yet 
function solution2(cacheSize, cities) {
    const MISS = 5, HIT = 1;

    if (cacheSize === 0) return MISS * cities.length;

    let answer = 0,
        cache = [];

    cities.forEach(city => {
        city = city.toUpperCase();

        let idx = cache.indexOf(city);

        if (idx > -1) {
            cache.splice(idx, 1);
            answer += HIT;
        } else {
            if (cache.length >= cacheSize) cache.shift();
            answer += MISS;
        }

        cache.push(city);
    });

    return answer;
}

function secondTry(cacheSize, cities){
    const hit = 1;
    const miss = 5;
    if( cacheSize === 0 ) return miss*cities.length;
    let cache = [];
    let time =0;
    cities.forEach((city)=>{
        city = city.toUpperCase();

        if(!cache.includes(city)){
            if(cache.length >=cacheSize){
            cache.shift();
            }
        time += miss;
        }else{
            time +=hit;
            cache = cache.filter(each => each !== city)
        }
        cache.push(city);
    }
    )
    return time;
}
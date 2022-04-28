//it works. 'replaceAll'function doesn't work at programmers.. so i can't pass.
function solution(m, musicinfos){
    var answer = '';
    const musicInfor = musicinfos.map((a) =>a.split(','))
    let musicNameAndMelody =new Map();
    for(music of musicInfor){
        const playtime = getPlayTime(music[1],music[0]);
        const replacedMelody = replaceMelody(music[3]);
        if(playtime>replacedMelody.length){
            let howMany = Math.ceil(playtime/replacedMelody.length)
            console.log(howMany)
            musicNameAndMelody.set(music[2], replacedMelody.repeat(howMany))}
        else musicNameAndMelody.set(music[2], replacedMelody.slice(0,playtime))
    }

    const whatIHeard = replaceMelody(m);
    for(const [key, value] of musicNameAndMelody){
        if(value.includes(whatIHeard)) answer = key
    }

    function getPlayTime(endtime, starttime){
        const end = +endtime.replace(':','');
        const start = +starttime.replace(':','');
        let realend = Math.floor(end/100)*60+end%100;
        let realstart = Math.floor(start/100)*60+start%100;
        return realend-realstart
    }

    function replaceMelody(melody){
        const realMelody = melody.replaceAll('D#','d')
                                 .replaceAll('C#','c')
                                 .replaceAll('F#','f')
                                 .replaceAll('A#','a')
                                 .replaceAll('G#','g')
        return realMelody;
    }
    console.log(musicNameAndMelody)
    console.log(musicInfor)
    return answer;
}

console.log(solution("CC#BCC#BCC#BCC#B",["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]))
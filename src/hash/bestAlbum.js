function bestAlbum(genres, plays){
    let album = {};
    for(let i=0; i <genres.length ; i++){
        if(album[genres[i]]===undefined){
             album[genres[i]]=[[`${i}`,plays[i]]];
        }else{
            album[genres[i]].push([`${i}`,plays[i]]); 
        }
    }
console.log(album);
}
bestAlbum(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500]);

function solution(genres, plays){
    const songs = [];
    const genresSumHash ={};
    const genresSumArr = [];
    let answer =[];

    genres.forEach((genre, id)=>{
        songs.push({id: id, genre: genre, play: plays[id]})
        genresSumHash[genre] = genresSumHash[genre] ? genresSumHash[genre] + plays[id] : plays[id]
    })
    console.log(songs);
    console.log(genresSumHash)

    for(const genre in genresSumHash) genresSumArr.push([genre, genresSumHash[genre]])
    genresSumArr.sort((a,b)=>b[1]-a[1]);
    console.log(genresSumArr);


    for( const genre in genresSumArr){
        const sorted = songs.filter(song =>song.genre === genre[0]).sort((a,b)=>b.play - a.play)
        for(let i=0; i<2 && i < sorted.length; i++) answer.push(sorted[i].id)
    }
    return answer;
}

solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500]);

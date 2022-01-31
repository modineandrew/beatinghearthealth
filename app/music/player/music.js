const songs = [
    ["Lobby", "songs/andrewm/Lobby.mp3", "andrewm"], 
    ["Lofi Idea", "songs/andrewm/Lofi Idea.mp3", "andrewm"],
    ["Celebrations", "songs/andrewm/Celebrations.mp3", "andrewm"],
    ["Summer", "songs/andrewm/Summer.mp3", "andrewm"],
    ["Through The Years", "songs/andrewm/Through The Years.mp3", "andrewm"],
    ["Isaías 41:10", "songs/BOUE/BOUE - Isaias 41_10.mp3", "BOUE"],
    ["Better Days", "songs/LAKEY INSPIRED/LAKEY INSPIRED - Better Days.mp3", "LAKEY INSPIRED"],
    ["By The Pool", "songs/LAKEY INSPIRED/LAKEY INSPIRED - By The Pool.mp3", "LAKEY INSPIRED"],
    ["Days Like These", "songs/LAKEY INSPIRED/LAKEY INSPIRED - Days Like These.mp3", "LAKEY INSPIRED"],
    ["Saydee", "songs/LAKEY INSPIRED/LAKEY INSPIRED - Saydee.mp3", "LAKEY INSPIRED"],
    ["Warm Nights", "songs/LAKEY INSPIRED/LAKEY INSPIRED - Warm Nights.mp3", "LAKEY INSPIRED"],
    ["biscuit", "songs/lukrembo/biscuit - prod. by lukrembo.mp3", "lukrembo"],
    ["Waves", "songs/prod.riddiman/Waves - Prod. Riddiman.mp3", "prod.riddiman"],
    ["Lost In Echoes", "songs/S N U G/S N U G - Lost In Echoes.mp3", "S N U G"]
]

function changeSong() {
    var songObj = songs[Math.floor(Math.random() * songs.length)]
    if (songObj[0] == songname.innerHTML) {
        songObj = songs[Math.floor(Math.random() * songs.length)]
    }
    player.src = songObj[1]
    songname.innerHTML = songObj[0]
    artistname.innerHTML = songObj[2]
}
function changeSongToIndex(index) {
    var songObj = songs[index]
    player.src = songObj[1]
    songname.innerHTML = songObj[0]
    artistname.innerHTML = songObj[2]
}

for (var i = 0;i<songs.length;i++) {
    var toInject = "<div class='text pageText'><button onclick=changeSongToIndex(" + i + ")><img src='/icon/play.png' style='width:10px'></button> " + songs[i][0] + "</div>"
    var divToInject = document.createElement("div")
    divToInject.innerHTML = toInject
    document.body.appendChild(divToInject)
}

player.onended = changeSong()
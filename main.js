let progress = document.getElementById('progress');
let song = document.getElementById('song');
let icon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime

}

song.addEventListener('timeupdate',() =>{
    progress.value = song.currentTime;

    const durationDisplay = document.getElementById('music-time');
    const durationSong = song.currentTime;

    const minutesSong = Math.floor(durationSong/60);
    const secondsSong = Math.floor(durationSong%60).toString().padStart(2,"0");

    durationDisplay.innerHTML = minutesSong +":"+secondsSong;
});


function playPause() {
    if (icon.classList.contains('fa-circle-pause')) {
        icon.classList.remove('fa-circle-pause');
        icon.classList.add('fa-circle-play');
        song.pause();
    } else {
        icon.classList.remove('fa-circle-play');
        icon.classList.add('fa-circle-pause');
        song.play();
    }
}

if(song.play()){
    setInterval(()=>
    progress.value = song.currentTime,300)
}

progress.onchange = function(){
    song.currentTime = progress.value;
    song.play();
    icon.classList.add("fa-circle-pause");
    icon.classList.remove("fa-circle-play");
}

function restartSong(){
    song.currentTime=0;
}

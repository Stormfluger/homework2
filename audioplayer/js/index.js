'use strict';

const player = document.getElementsByClassName('mediaplayer')[0];

const playstate = player.getElementsByClassName('playstate')[0];
const back = player.getElementsByClassName('back')[0];
const next = player.getElementsByClassName('next')[0];
const stop = player.getElementsByClassName('stop')[0];

const songTitle = player.getElementsByClassName('title')[0];

const audio = player.getElementsByTagName('audio')[0];

const songs = [
    'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Chill Tour.mp3',
    'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This is it band.mp3',
    'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA Fusion Jam.mp3'
];
songs.currIndex = 0;

function songNameTitle(href) {
    return href.match(/\/([\w\s]+)\.mp3$/)[1];
}
audio.src = songs[songs.currIndex];
songTitle.title = songNameTitle( songs[songs.currIndex] );

playstate.onclick = () => {
    if (player.classList.contains('play')) {
        player.classList.remove('play');
        audio.pause();
    } else {
        player.classList.add('play');
        audio.play();
    }
};

stop.onclick = () => {
    if (player.classList.contains('play')) {
        player.classList.remove('play');
        audio.pause();
    }
    audio.currentTime = 0;
};

back.onclick = () => {
    const currentSong = player.classList.contains('play');
    stop.onclick();
    
    const songsNumber = songs.length;
    songs.currIndex = (songs.currIndex + songsNumber - 1) % songsNumber;
    audio.src = songs[songs.currIndex];
    songTitle.title = songNameTitle( songs[songs.currIndex] );
    if (currentSong) playstate.onclick();
};

next.onclick = () => {
    const currentSong = player.classList.contains('play');
    stop.onclick();

    const songsNumber = songs.length;
    songs.currIndex = (songs.currIndex + 1) % songsNumber;
    audio.src = songs[songs.currIndex];
    songTitle.title = songNameTitle( songs[songs.currIndex] );
    if (currentSong) playstate.onclick();
};
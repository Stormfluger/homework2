
'use strict';

const drums = document.getElementsByClassName('drum-kit__drum');

function drumsPlay() {
    const drumSound = this.getElementsByTagName('audio')[0];
    drumSound.currentTime = 0;
    drumSound.play();
}

for (const drum of drums) {
    drum.onclick = drumsPlay;
}
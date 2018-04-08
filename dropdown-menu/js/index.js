'use strict';

const buttonDropdown = document.getElementsByClassName('wrapper-dropdown')[0];

function toggleActive() {
  this.classList.toggle('active');
}

buttonDropdown.onclick = toggleActive;
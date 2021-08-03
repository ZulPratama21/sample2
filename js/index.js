const play = document.querySelector('.play')
const pause = document.querySelector('.pause')

var el = document.getElementById("music");
function playAudio() { 
  el.play();
  pause.classList.remove('d-none');
  play.classList.add('d-none');
} 
function pauseAudio() { 
  el.pause();
  pause.classList.add('d-none');
  play.classList.remove('d-none');
} 

$(document).ready(function() {
    $('.btn-modal').trigger('click');
});

function copy_mandiri() {
    document.getElementById("mandiri").select();
    document.execCommand("copy");
    alert('No. Rekening Berhasil di Copy, Kami tunggu tranferannya :)');
}

function copy_bca() {
    document.getElementById("bca").select();
    document.execCommand("copy");
    alert("No. Rekening Berhasil di Copy, Kami tunggu tranferannya :)");
}

function copy_permata() {
    document.getElementById("permata").select();
    document.execCommand("copy");
    alert("No. Rekening Berhasil di Copy, Kami tunggu tranferannya :)");
}
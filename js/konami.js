let secretModal = document.querySelector('.modal');
let span = document.getElementsByClassName('close')[0];
let myVideo = document.getElementById('myVideo');

const keys = [];
const secretCode = ['l','e','o','n'];

function videoAutoplay() {
    myVideo.autoplay=true;
    myVideo.load();
}
function disableAutoplay(){
    myVideo.autoplay=false;
    myVideo.load();
}

function keysDetector(e) {
    console.log(e.key)
    keys.push(e.key)

    if (keys.length > secretCode.length) {
        keys.shift()
    }

    if (JSON.stringify(keys)===JSON.stringify(secretCode)){
       
        secretModal.style.display = 'flex';
        videoAutoplay();
    }
    span.onclick = function() {
        secretModal.style.display = 'none';
        disableAutoplay();
    }
    window.onclick = function(event) {
        if (event.target == secretModal) {
          secretModal.style.display = 'none';
          disableAutoplay();
        }
    }
}
window.addEventListener('keyup', keysDetector);


      
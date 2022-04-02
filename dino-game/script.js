const dino = document.querySelector(".dino")
const background = document.querySelector(".background")
var position = 0;

var isJumping = false;

function handleKeyUp(event) {
    if(event.keyCode === 32) {
        if(!isJumping) {
            jump();
        }
    }
}

function jump() {
    
    isJumping = true;
    //Subindo
    var intervaloPulo = setInterval(() => {
        if(position >= 150) {
            clearInterval(intervaloPulo);

            //Descendo
            var intervaloDescida = setInterval(() => {
                if(position <= 0) {
                    clearInterval(intervaloDescida);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
        position += 20;
        dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    var cactusPosition = 1000;
    var randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    var leftInterval = setInterval(() => {
        if(cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60 ) {
            //Gameover;
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class = "game-over">Fim de jogo</h1>';
        } else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);


const dino = document.querySelector(".dino")
const background = document.querySelector(".background")
var position = 0;

var isJumping = false;
//Capturando o evento da tecla espaço!!
function handleKeyUp(event) {
    if(event.keyCode === 32) {
        if(!isJumping) {
            jump();
        }
    }
}
//Função para fazer o dino pular!
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

//Função para criar os cactus!!
function createCactus() {
    const cactus = document.createElement('div');
    //Definindo a posição dos cactus
    var cactusPosition = 1000;
    var randomTime = Math.random() * 6000;

    //Criando cactus aleatoriamente
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    //Criando movimento do cactus!!
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


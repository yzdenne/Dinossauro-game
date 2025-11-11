const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

// Função de salto
function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");

    setTimeout(() => {
      dino.classList.remove("jump");
    }, 600); // duração da animação
  }
}


// Detecta tecla pressionada
document.addEventListener("keydown", jump);

// Animação do cacto
cactus.style.animation = "cactusMove 2.0s infinite linear";

// Colisão
let checkCollision = setInterval(() => {
  const dinoRect = dino.getBoundingClientRect();
  const cactusRect = cactus.getBoundingClientRect();

  const overlap = !(
    dinoRect.top > cactusRect.bottom ||
    dinoRect.bottom < cactusRect.top ||
    dinoRect.right < cactusRect.left ||
    dinoRect.left > cactusRect.right
  );

  if (overlap) {
    // Fim de jogo
    alert("💥 Game Over!");

    // Parar animação e esconder cacto
    cactus.style.animation = "none";
    cactus.style.display = "none";

    // Parar verificação de colisão
    clearInterval(checkCollision);

    // Reiniciar após 2 segundos
    setTimeout(() => {
      cactus.style.display = "block";
      cactus.style.animation = "cactusMove 1.5s infinite linear";

      // Reiniciar verificação de colisão
      checkCollision = setInterval(() => {
        const dinoRect = dino.getBoundingClientRect();
        const cactusRect = cactus.getBoundingClientRect();

        const overlap = !(
          dinoRect.top > cactusRect.bottom ||
          dinoRect.bottom < cactusRect.top ||
          dinoRect.right < cactusRect.left ||
          dinoRect.left > cactusRect.right
        );

        if (overlap) {
          alert("💥 Game Over!");
          cactus.style.animation = "none";
          cactus.style.display = "none";
          clearInterval(checkCollision);
        }
      }, 10);
    }, 2000);
  }
}, 10);

let audio   = document.getElementById("meuAudio");
audio.volume = 0.1;

function playAudio() {
  const audio = document.getElementById("meuAudio");
  audio.play();
}

function pauseAudio() {
  const audio = document.getElementById("meuAudio");
  audio.pause();
}

function meuTeste() {
  const audio = document.getElementById("meuTeste");
  audio.pause();
}
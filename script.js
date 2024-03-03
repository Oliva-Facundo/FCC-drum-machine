const keys = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

function changeDisplay(item) {
  let father = item.parentNode
  display.innerText = father.id
  father.classList.add('playing')
}

function removeTransitions(e) {
  if (e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

function playAudio(id) {
  const audio = document.getElementById(id);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    changeDisplay(audio)
  }
}

keys.forEach((key) =>
  key.addEventListener("click", () => {
    playAudio(key.innerText);
  })
);

keys.forEach(key => key.addEventListener('transitionend', removeTransitions))

window.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  const btn = document.getElementById(key);
  if (btn) {
    playAudio(btn.id);
  }
});

// ปุ่มเปิด/ปิดเพลง
const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("toggleMusic");

let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    isPlaying = false;
  } else {
    music.play();
    isPlaying = true;
  }
});


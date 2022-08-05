const video = document.getElementsByTagName("video")[0];
const key = 17; //ctrl
const bulletSpeed = 4;

window.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === key) {
    if (video.playbackRate !== bulletSpeed) {
      video.playbackRate = bulletSpeed;
    }
  }
});
window.addEventListener("keyup", (event) => {
  if (event.isComposing || event.keyCode === key) {
    video.playbackRate = 1; //normal
  }
});

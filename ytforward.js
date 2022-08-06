const video = document.getElementsByTagName("video")[0];
const selectedSpeed = document.getElementById("selected-speed");
const key = "Control";
const bulletSpeed = 4;

const speedStore = document.createElement("input");
speedStore.hidden = true;
speedStore.id = "speed-store";
speedStore.value = video.playbackRate;
document.body.appendChild(speedStore);

window.addEventListener("keydown", (event) => {
  if ((event.isComposing || event.key === key) && !event.repeat) {
    speedStore.value = video.playbackRate;
    video.playbackRate = bulletSpeed;
  }
});
window.addEventListener("keyup", (event) => {
  if (event.isComposing || event.key === key) {
    video.playbackRate = speedStore.value; //normal
  }
});

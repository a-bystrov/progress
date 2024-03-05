const progressCircle = document.querySelector(".progressCircle");
const progressValue = document.querySelector(".progressValueInput");
const stateAnimate = document.querySelector("#stateAnimate");
const stateHide = document.querySelector("#stateHide");

progressValue.addEventListener("input", () => {
  if (progressValue.value < 0) progressValue.value = 0;
  if (progressValue.value > 100) progressValue.value = 100;

  progressCircle.style.background = `conic-gradient(#005ff9 ${
    progressValue.value * 3.6
  }deg, #dae6ec 0deg)`;
});

stateAnimate.addEventListener("change", () => {
  if (stateAnimate.checked) {
    progressCircle.style.animationName = "rotation";
  } else {
    progressCircle.style.animationName = "none";
  }
});

stateHide.addEventListener("change", () => {
  if (stateHide.checked) {
    progressCircle.style.display = "none";
  } else {
    progressCircle.style.display = "flex";
  }
});


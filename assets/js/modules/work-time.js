export default function initWorkTime() {
  const workTime = document.querySelector("[data-time]");
  const weekTime = workTime.dataset.time.split(",").map(Number);

  const date = new Date();
  const actualTime = date.getHours();

  const timeIsOpen = actualTime >= weekTime[0] && actualTime < weekTime[1];

  if (timeIsOpen) {
    workTime.classList.add("open");
  }
}

export default function initWorkTime() {
  const workTime = document.querySelector("[data-week]");
  const weekDay = workTime.dataset.week.split(",").map(Number);
  const weekTime = workTime.dataset.time.split(",").map(Number);

  const date = new Date();
  const actualDay = date.getDay();
  const actualTime = date.getHours();

  const weekIsOpen = weekDay.indexOf(actualDay) !== -1;
  const timeIsOpen = actualTime >= weekTime[0] && actualTime < weekTime[1];

  if (weekIsOpen && timeIsOpen) {
    workTime.classList.add("open");
  }
}

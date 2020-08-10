let hour = document.getElementById("hour");
let minute = document.getElementById("minute");

document.getElementById("calcBtn").addEventListener("click", calculate);

function calculate() {
  let h = Number(hour.value);
  let m = Number(minute.value);
  let angle = findInnerAngle(h, m);
  document.getElementById("angle").innerText = angle;
}

function findInnerAngle(hour, minute) {
  let angleH = (hour + minute / 60) * (360 / 12);
  let angleM = minute * (360 / 60);
  console.log(angleH);
  console.log(angleM);
  let angle = angleH - angleM;
  if (angle > 180) {
    angle = 360 - angle;
  }
  console.log(angle);

  return angle;
}

findInnerAngle(hour, minute);

let ran3 = [];
let box = $(".Box");
let color = ["red", "blue", "yellow", "green"];
let arrclick = [];
let i = 0;
let flag = 0;
var level = 0;
var started = false;
var dislevel = document.querySelector(".level");
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", function () {
    arrclick.push(i);
    playSound(color[i]);
    var a = this;
    // buttonPress(value);
    this.classList.add("buttonActive");
    setTimeout(function () {
      a.classList.remove("buttonActive");
    }, 100);
    check();
  });
}
// document.addEventListener("keydown", function (event) {
//   for (i = 0; i < box.length; i++) {
//     if (box[i].innerHTML == event.key) box[i].click();
//   }
// });
j = 0;
arrshow = [];
var b = arrshow.length;
$(document).keydown(function () {
  if (!started) {
    dislevel.innerHTML = "level  :  " + level;
    arrclick = [];
    flag = 0;
    random();
    started = true;
  }
});
$(".refresh").click(function () {
  if (!started) {
    dislevel.innerHTML = "level  :  " + level;
    arrclick = [];
    flag = 0;
    random();
    started = true;
  }
});
function random() {
  arrclick = [];
  flag = 0;
  var r = Math.floor(Math.random() * 4);
  ran3.push(r);
  playSound(color[r]);
  $(".Box")[r].classList.add("buttonActive");
  setTimeout(function () {
    $(".Box")[r].classList.remove("buttonActive");
  }, 500);
}
function check() {
  for (k = 0; k < arrclick.length; k++) {
    if (ran3[k] == arrclick[k]) {
      flag = k + 1;
      if (flag == ran3.length) {
        level++;
        dislevel.innerHTML = "level  :  " + level;
        setTimeout(function () {
          flag = 0;
          random();
        }, 1000);
      }
    } else {
      dislevel.innerHTML = "Press Refresh or any key to Start";
      level = 0;
      playSound("wrong");
      arrclick = [];
      ran3 = [];
      started = false;
    }
  }
}
function playSound(name) {
  var audio = new Audio(name + ".mp3");
  audio.play();
}

//* score display
var score_get = localStorage.getItem("scoreLocalStorage");
var score = Number(score_get);
document.getElementById("score").innerHTML = `Your score: ${score}`

//* max combo

//* time spent
var time_get = localStorage.getItem("secondsLocalStorage");
var time = Number(time_get);
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
secondsLabel.innerHTML = pad(time % 60);
minutesLabel.innerHTML = pad(parseInt(time / 60));

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    };
};
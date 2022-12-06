function timer() {
    var timer = 0;
    var timerId = setInterval(function () {
        timer += 1;
        if (timer === 1) {
            document.getElementById("id_timer").innerHTML = "На моей странице вы провели " + timer + " секунду";
        }
        else if (timer > 1 && timer < 5) {
            document.getElementById("id_timer").innerHTML = "На моей странице вы провели " + timer + " секунды";
        }
        else {
            document.getElementById("id_timer").innerHTML = "На моей странице вы провели " + timer + " секунд";
        }
    }, 1000);
}

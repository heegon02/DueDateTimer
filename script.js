let countdown;
function startTimer() {
    const deadlineInput = document.getElementById("deadline").value;
    const deadline = new Date(deadlineInput).getTime();
    clearInterval(countdown);

    countdown = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = deadline - now;

        // 타이머가 종료되었을 때 동작 사항.
        // 1. 타이머 00:00:00 으로 출력.
        // 2. AlertSound.mp3 소리 재생.
        // 3. 배경색 전환. 
        if (timeLeft <= 0) {
            clearInterval(countdown);
            document.getElementById("timer-display").innerHTML = "00  :  00  :  00";

            var audio = new Audio("AlertSound.mp3");
            audio.play();

            let container = document.querySelector(".container");
            let isRed = false;

            let bgInterval = setInterval(()=> {
                container.style.backgroundColor = isRed ? "white" : "red";
                isRed = !isRed;
            },500);

            setTimeout(() => {
                clearInterval(bgInterval);
                container.style.backgroundColor = "white";
            }, 10000); 

            return;
        }
    
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / (1000));

        document.getElementById("timer-display").innerHTML = `${hours}  :  ${minutes}  :  ${seconds}`
        }, 1000);
}

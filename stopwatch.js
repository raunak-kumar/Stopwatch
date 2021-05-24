const timer = document.querySelector('#stopwatch');
        const start_btn = document.querySelector('#start');
        const pause_btn = document.querySelector('#pause');
        const reset_btn = document.querySelector('#reset');

        let time = 0, interval;

        function showTime() {
            time += 1;
            timer.innerHTML = toHHMMSS(time);
        }

        function start() {
            interval = setInterval(showTime, 1000);
			console.log(typeof interval)
            start_btn.disabled = true
            pause_btn.disabled = false
            reset_btn.disabled = false
        }

        function pause() {
            if (interval) {
                clearInterval(interval);
                interval = null;
                pause_btn.innerHTML = 'continue';
            } else {
                interval = setInterval(showTime, 1000);
                pause_btn.innerHTML = 'pause';
            }
			console.log(interval)
        }

        function reset() {
            clearInterval(interval);
            interval = null;
            pause_btn.innerHTML = 'pause';
            time = 0;
            timer.innerHTML = toHHMMSS(time);
            start_btn.disabled = false
            pause_btn.disabled = true
            reset_btn.disabled = true
			console.log(interval)

        }

        function toHHMMSS(time) {
            let hours = Math.floor(time / 3600);
            let minutes = Math.floor((time - hours * 3600) / 60);
            let seconds = time - hours * 3600 - minutes * 60;

            hours = `${hours}`.padStart(2, '0');
            minutes = `${minutes}`.padStart(2, '0');
            seconds = `${seconds}`.padStart(2, '0');

            return hours + ':' + minutes + ':' + seconds;
        }

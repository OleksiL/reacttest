function StopWatch() {
    this.duration = 0;
    this.started = false;
    let timeStart = 0;
    let timeStop = 0;

    this.reset = function() {
        this.duration = 0;
        this.started = false;
    }

    this.start = function() {
        if (this.started)
            throw new error("SW is already started");

        this.started = true;
        let currentDate = new Date();
        timeStart = currentDate.getTime();
        console.log("Time started: ", timeStart);
    }

    this.stop = function() {
        if (!this.started)
            throw new error("SW is already started");

        this.started = false;
        let currentDate = new Date();
        timeStop = currentDate.getTime();
        this.duration += timeStop - timeStart;
        console.log("Time stopped: ", timeStop);
    }

    this.reset = function() {
        this.started = false;
        this.duration = 0;
        timeStart = 0;
        timeStop = 0;
    }

    this.showTime = function () {
        console.log(this.duration);

    }

}

let stopWatch = new StopWatch();
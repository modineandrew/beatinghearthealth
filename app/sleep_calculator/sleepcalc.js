var bedtime;
var wakeuptime;

var totalSleep;

const modeselect = document.getElementById("modeselect")
const sleepcalc_main = document.getElementById("sleepcalc_main")
modeselect.onchange = () => {
    console.log("changed: " + modeselect.value)
    if (modeselect.value == "nomode") {
        sleepcalc_main.innerHTML = nomode_html
    }
    if (modeselect.value == "lastnight") {
        sleepcalc_main.innerHTML = lastnight_html
        bedtime = document.getElementById("bedtime")
        wakeuptime = document.getElementById("riseandshine")
        bedtime.onchange = () => lastnight_calc_update()
        wakeuptime.onchange = () => lastnight_calc_update()
    }
    if (modeselect.value == "tonight") {
        sleepcalc_main.innerHTML = tonight_html
    }
}

function lastnight_calc_update() {
    console.log("Updating sleep calculation.")
    console.log(bedtime.value)
    console.log(wakeuptime.value)

    var bedtimehours = bedtime.value.split(":")[0] // Imagine this is 1
    var wakeuphours = wakeuptime.value.split(":")[0] // Imagine this is 6
    if (bedtimehours < 13) {
        totalSleep = wakeuphours - bedtimehours
        console.log("USED METHOD 1")
    }
    else {
        var rudimentaryHours = bedtimehours - wakeuphours // Then this is 1 - 6, which is -5
        totalSleep = 24 - rudimentaryHours // And this is 24 - (-5), which is 31.
        console.log("USED METHOD 2")
    }
    
    
    console.log(totalSleep)

    if ((24 - rudimentaryHours) < 11) {
        document.getElementById("sleeptime").innerHTML = "You got " + totalSleep.toString() + " hours of sleep! <br>That may not be enough for you."
    }
    else {
        document.getElementById("sleeptime").innerHTML = "You got " + totalSleep.toString() + " hours of sleep!"
    }
    
}

function tonight_calc_update() {
    console.log("Updating sleep calculation.")
}

const nomode_html = "<p>Please select a mode</p>"
const lastnight_html = "<br><p>What time did you go to bed?</p><input type='time' id='bedtime'>\
<br><p>What time did you wake up?</p><input type='time' id='riseandshine'><br><br><p id='sleeptime'></p>"
const tonight_html = "<iframe src='./embedded/' width=1000px height=500px seamless>"

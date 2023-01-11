export function secondsToMinutes(seconds: number) {   
    var mins = Math.floor((seconds / 60));
    var secs = Math.floor(seconds % 60);

    var ret = "";

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

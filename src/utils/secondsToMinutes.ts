export function secondsToMinutes(seconds: number) {   
    var mins = ~~((seconds % 3600) / 60);
    var secs = ~~seconds % 60;

    var ret = "";

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

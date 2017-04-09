module.exports = function(context, options) {
    // console.log(context);
    if (context != null) {
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(context*1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        minutes = minutes.substr(-2);
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();
        seconds = seconds.substr(-2);
        var day = "0" + date.getDate();
        day = day.substr(-2);
        // getMonth() returns the month from 0-11
        var month = date.getMonth() + 1;
        month = "0" + month;
        month = month.substr(-2);
        var year = date.getFullYear();
        // Will display time in 10:30:23 format
        var formattedTime = day + "." + month + "." + year + " " + hours + ':' + minutes + ':' + seconds ;
        return formattedTime;
    }
    // console.log("  " + formattedTime);
    return "---";   
};
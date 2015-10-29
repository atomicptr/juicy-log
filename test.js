var Logger = require("./index.js");

var juicy = new Logger();

juicy.add(function(type, message, timestamp) {
    var hours = timestamp.getHours();
    var mins = timestamp.getMinutes();

    var pad = function(num) {
        return num < 10 ? "0" + num : num;
    }

    var time = pad(hours) + ":" + pad(mins);

    if(type == Logger.type.ERROR) {
        console.error("ERROR [" + time + "] " + message);
    } else if(type == Logger.type.WARNING) {
        console.warn("WARN [" + time + "] " + message);
    } else {
        console.log("INFO [" + time + "] " + message)
    }
});

juicy.log("Testa ftw");
juicy.log("2 + 2 ist {0}", 2 + 2);
juicy.warn("{0} + {1} = {2}", 5, 3, 5+3);

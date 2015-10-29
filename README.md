# juicy-log

Juicy logging library for Javascript.

## Install

    npm install juicy-log --save

## Usage

    var Logger = require("juicy-log");
    var juicy = new Logger();

    // add new logger
    juicy.add(function(type, message, timestamp) {
        // Arguments:
            // **type** is one of these three types: Logger.types.{INFO, WARNING, ERROR} depending on
            // whetever or not you called juicy.log, juicy.error or juicy.warn
            // **message** is a formatted message for instance juicy.log("2 + 2 = {0}", 2 + 2) will have
            // "2 + 2 = 4" as message
            // **timestamp** is a Date object of the time when the log was called

        // This example will treat all 3 types equal
        console.log("[" + timestamp.getTime() + "] " + message);
    });

    juicy.log("Hello, World!");

## License

MIT

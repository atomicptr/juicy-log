var Logger = require("../index.js");


describe("Testing juicy-log", function() {
    var juicy = new Logger();
    var test = {};

    beforeEach(function() {
        juicy = new Logger();
        test = {};

        juicy.add(function(type, message, timestamp) {
            test = {
                type: type,
                message: message,
                timestamp: timestamp
            };
        });
    });

    describe("logging", function() {
        it("logs correct message", function() {
            var message = "Hello, World";
            juicy.log(message);
            expect(test.message).toEqual(message);
        });

        it("logs info", function() {
            juicy.log("Raxacoricofalapatorious");
            expect(test.type == Logger.type.INFO).toBeTruthy();
        });

        it("logs warning", function() {
            juicy.warn("Raxacoricofalapatorious");
            expect(test.type == Logger.type.WARNING).toBeTruthy();
        });

        it("logs error", function() {
            juicy.error("Raxacoricofalapatorious");
            expect(test.type == Logger.type.ERROR).toBeTruthy();
        });
    });

    describe("formatting", function() {
        it("format number", function() {
            juicy.log("2 + 2 = {0}", 2 + 2)
            expect(test.message).toEqual("2 + 2 = 4");
        });

        it("format string", function() {
            juicy.log("Hello, {0}!", "World")
            expect(test.message).toEqual("Hello, World!");
        });

        it("format multiple things", function() {
            var now = new Date();
            juicy.log("Today is the {0}th second since January 1st 1970. A great {1} for {2}. {3}", now.getTime(), "day", "us", 3.141592);
            expect(test.message).toEqual("Today is the " + now.getTime() + "th second since January 1st 1970. A great day for us. 3.141592");
        })
    })
});

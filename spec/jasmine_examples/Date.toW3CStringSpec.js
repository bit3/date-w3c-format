describe("Date.toW3CString", function() {
    require('../../Date.toW3CString.js');

    it("function should exists", function() {
        var date = new Date("Sat, 21 Nov 2015 08:27:38 GMT");
        expect(date.toW3CString).not.toBe(undefined);
        expect(typeof(date.toW3CString)).toBe("function");
    });

    describe("should return a valid W3C datetime string", function() {
        it("from GMT timezone", function() {
            var date = new Date("Sat, 21 Nov 2015 08:27:38 GMT");
            var string = date.toW3CString();
            expect(string).toBe("2015-11-21T09:27:38+01:00");
        });

        it("from another timezone", function() {
            var date = new Date("2015-11-21T02:27:38-06:00");
            var string = date.toW3CString();
            expect(string).toBe("2015-11-21T09:27:38+01:00");
        });
    });
});

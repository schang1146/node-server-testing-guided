const calculator = require("../calculator.js");

describe("calculator functions", () => {
    describe("add", () => {
        it("should add 'n' numbers", () => {
            let valA = 2;
            let valB = 2;
            let valC = 29;
            let expectedResult = 33;

            let result = calculator.add(valA, valB, valC);

            expect(result).toBe(expectedResult);
        });
    });

    it("should subtract 2 numbers", () => {
        let valA = 156;
        let valB = 48;
        let expectedResult = 108;

        let result = calculator.subtract(valA, valB);

        expect(result).toBe(expectedResult);
    });

    it("should multiply 2 numbers", () => {
        let valA = 15;
        let valB = 12;
        let expectedResult = 180;

        let result = calculator.multiply(valA, valB);

        expect(result).toBe(expectedResult);
    });

    it("should divide 2 numbers", () => {
        let valA = 42;
        let valB = 7;
        let expectedResult = 6;

        let result = calculator.divide(valA, valB);

        expect(result).toBe(expectedResult);
    });
});

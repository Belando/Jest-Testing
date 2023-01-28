const Calculator = require("./calculadora")

const calculator = new Calculator()

describe("Casos de la suma", () => {
    test("strings", () => {
        expect(calculator.suma("1", "2")).toBe(3)
    })

    test("numbers", () => {
        expect(calculator.suma(1, 2)).toBe(3)
    })

    test("number y string", () => {
        expect(calculator.suma(1, "no")).toBe(NaN)
    })

    test("negativos", () => {
        expect(calculator.suma(-2, -4)).toBe(-6)
    })

    test("decimales", () => {
        expect(calculator.suma(1.1, 2.5)).toBe(3.6)
    })

    test("null", () => {
        expect(calculator.suma(null, 2.5)).toBe(NaN)
    })
})

describe("Casos de la multiplicacion", () => {
    test("strings", () => {
        expect(calculator.multiplicacion("1", "2")).toBe(2)
    })

    test("numbers", () => {
        expect(calculator.multiplicacion(1, 2)).toBe(2)
    })

    test("number y string", () => {
        expect(calculator.multiplicacion(1, "no")).toBe(NaN)
    })

    test("negativos", () => {
        expect(calculator.multiplicacion(-2, -4)).toBe(8)
    })

    test("decimales", () => {
        expect(calculator.multiplicacion(1.1, 2.5)).toBe(2.75)
    })

    test("null", () => {
        expect(calculator.multiplicacion(null, 2.5)).toBe(NaN)
    })
})

describe("Casos de la resta", () => {
    test("strings", () => {
        expect(calculator.resta("1", "2")).toBe(-1)
    })

    test("numbers", () => {
        expect(calculator.resta(1, 2)).toBe(-1)
    })

    test("number y string", () => {
        expect(calculator.resta(1, "no")).toBe(NaN)
    })

    test("negativos", () => {
        expect(calculator.resta(-2, -4)).toBe(2)
    })

    test("decimales", () => {
        expect(calculator.resta(1.1, 2.5)).toBe(-1.4)
    })

    test("null", () => {
        expect(calculator.resta(null, 2.5)).toBe(NaN)
    })
})

describe("Casos de la division", () => {
    test("strings", () => {
        expect(calculator.division("1", "2")).toBe(0.5)
    })

    test("numbers", () => {
        expect(calculator.division(1, 2)).toBe(0.5)
    })

    test("number y string", () => {
        expect(calculator.division(1, "no")).toBe(NaN)
    })

    test("negativos", () => {
        expect(calculator.division(-2, -4)).toBe(0.5)
    })

    test("decimales", () => {
        expect(calculator.division(1.1, 2.5)).toBe(0.44000000000000006)
    })

    test("null", () => {
        expect(calculator.division(null, 2.5)).toBe(NaN)
    })
    test("resultado infinito", () => {
        expect(calculator.division(2, 0)).toBe(null)
    })
    test("Infinito", () => {
        expect(calculator.division(Infinity, 1)).toBe(Infinity)
    })
})
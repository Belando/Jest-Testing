module.exports = class Calculator {
    suma(num1, num2) {
        return Number(parseFloat(num1)) + Number(parseFloat(num2))
    };
    resta(num1, num2) {
        return Number(parseFloat(num1)) - Number(parseFloat(num2))
    };
    multiplicacion(num1, num2) {
        return Number(parseFloat(num1)) * Number(parseFloat(num2))
    };
    division(num1, num2) {
        const resultado = Number(parseFloat(num1)) / Number(parseFloat(num2))
        if (num1, num2) {
            return resultado
        } else (num2 || num1 === Infinity);{
            return null
        }
    }}
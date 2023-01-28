const Contador = require("./contador")

const contador = new Contador()

beforeEach(() => {
    return contador.reinicio();
});

describe("Casos del test", () => {
    test("0", () => {
        expect(contador.get()).toBe(0);
    })
    afterEach(() => {
        return contador.incremento();
    });
})

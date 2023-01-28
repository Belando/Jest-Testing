const Moneda = require ("./moneda")

test("cara", async () => {
    expect(await Moneda()).toBe("cara");
})

test("cruz", async () => {
    expect(await Moneda()).toBe("cruz");
})
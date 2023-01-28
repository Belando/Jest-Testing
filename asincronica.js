const foo = () => Promise.resolve("hola")

foo ()

const cb = (async () => {
    const prueba = await foo()
    console.log (prueba)
})

foo () .then((response)=> console.log(response)).catch(error)



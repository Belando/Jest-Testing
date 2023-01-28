// module.exports = Moneda = async () => {
//     return new Promise((res) => {
//         const lanzar = Math.random() < 0.5 ? 'cara' : 'cruz';
//         res(lanzar)
//     });
// };

module.exports = () => {
    const lanzar = Math.random() < 0.5 ? 'cara' : 'cruz';
    if(lanzar!=="cara"){
        return lanzar
    }else {
        return lanzar
    }
}


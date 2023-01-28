module.exports = class Contador {
    constructor() {
        this.value = 0;
      }
      incremento () {
        this.value ++;
      }
      reinicio () {
        this.value = 0
      }
      get () {
        return this.value
      }
    }
//mjs - arquivo module

class FormaGeometrica {
    // # = private
    #base
    #altura
    #tipo

    // constructor(base, altura, tipo) {
    //     this.#base = base;
    //     this.#altura = altura;
    //     this.#tipo = tipo;
    // }

    get base() {
        return this.#base;
    }

    get altura(){
        return this.#altura;
    }

    get tipo() {
        return this.#tipo;
    }

    set base(base) {
        if (typeof base !== 'number' || base <= 0) {
            throw new Error("Erro: a base precisa ser numérica e maior que zero.");          
        }
        this.#base = base;
    }

    set altura(altura) {
        if(typeof altura !== 'number' || altura <= 0) {
            throw new Error("Erro: a altura precisa ser numérica e maior que zero.")
        }
        this.#altura = altura;
    }

    set tipo(tipo) {
        if(! ["R", "T", "E"].includes(tipo.toUpperCase())) {
            throw new Error("Erro: o tipo precisa ser um dos valores: 'R', 'T' ou 'E'")
        }
        this.#tipo = tipo.toUpperCase();
    }

    calcArea() {
        switch(this.#tipo) {
            case "R":
                return this.#base * this.#altura;
            case "T":
                return this.#base * this.#altura;
            case "E":
                return (this.#base / 2) * (this.#altura/2) * Math.PI;
        }
    }
}
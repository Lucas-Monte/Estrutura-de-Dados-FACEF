class HashTable {
    constructor(size = 11) {
        this.tamanho = size;
        this.tabela = new Array.from({ length: size }, () => []);
        this.quantidade = 0;
    }

    _hash(chave) {
        let hash = 0;
        for (let i = 0; i < chave.length; i++) {
            hash = (hash * 31 + chave.charCodeAt(i)) % this.tamanho;
        }
        return hash;
    }

    set(chave, valor) {
        const balde = this.tabela[this._hash(chave)];
        for (par of balde) {
            if(par[0] === chave) {
                par[1] = valor;
                return;
            }
        }
        balde.push([chave, valor]);
        this.quantidade++;
        if(this.quantidade / this.tamanho > 0.75) {
            this._rehash();
        }
    }

    get(chave) {
        const balde = this.tabela[this._hash(chave)];
        for(const [k,v] of balde) {
            if(k === chave) {
                return v;
            }
        }
        return undefined;
    }

    delete(chave) {
        const balde = this.tabela[this._hash(chave)];
        const i = balde.findIndex(([k]) => k === chave);

        if(i === -1) {
            return false;
        }

        balde.splice(i,1); //remove o elemento do balde, o 1 indica que queremos remover apenas 1 elemento
        this.quantidade--;
        return true;
    }
}
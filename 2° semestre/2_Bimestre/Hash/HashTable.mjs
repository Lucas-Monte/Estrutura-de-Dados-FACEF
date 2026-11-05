class HashTable {
    constructor(size = 11) {
        this.tamanho = size;
        this.tabela = Array.from({ length: size }, () => []);
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
        for (const par of balde) {
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

    _rehash() {
        const antiga = this.tabela;
        this.tamanho = this.tamanho * 2 + 1;
        this.tabela = Array.from({ length: this.tamanho }, () => []);
        this.quantidade = 0;
        for(const balde of antiga) {
            for(const [k,v] of balde) {
                this.set(k, v);
            }
        }
    }

    imprimir() {
        this.tabela.forEach((balde, i) => {
            const itens = balde.map(([k,v]) => `${k}:${v}`).join(" -> ");
            console.log(` ${i}: ${itens || "(vazio)"}`);
        })

        console.log(` quantidade=${this.quantidade} tamanho=${this.tamanho}`);
    }

}


const t = new HashTable()
const cenario = (n, titulo) => console.log(`\n=== Cenario ${n}: ${titulo}`);

cenario(1, 'set("Ana",8) em balde vazio');
t.imprimir();

t.set("Ana", 8);
t.imprimir();

cenario(2, 'set("Eva",6) Colide com Ana');
t.set("Eva", 6);
t.imprimir();

cenario(3, 'set("Maria",7) em outro balde');
t.set("Maria", 7);
t.imprimir();

cenario(4, 'set("Pedro",4) Colide com Maria');
t.set("Pedro", 4);
t.imprimir();

cenario(5, 'set("Ana",9) Atualiza, não duplica');
t.set("Ana", 9);
t.imprimir();

cenario(6, 'get("Eva") segunda do balde');
console.log(" Valor de Eva -> ", t.get("Eva"));

cenario(7, 'get("Zeca") balde vazio e get("Mel") balde cheio');
console.log(" Zeca -> ", t.get("Zeca"));
console.log(" Mel -> ", t.get("Mel"));

cenario(8, 'get("ana") seginda do balde');
console.log(" ana -> ", t.get("ana"));

cenario(9, 'delete("Ana") Primeira do balde');
console.log(" Ana deletada -> ", t.delete("Ana"));
t.imprimir();

cenario(10, 'delete("Zeca") e delete("Mel"), chaves ausentes');
console.log(" Zeca deletado -> ", t.delete("Zeca"));
console.log(" Mel deletada -> ", t.delete("Mel"));
t.imprimir();

cenario(11, 'set par avalor 0 e valor undefined')
t.set("Zeca", 0);
t.set("Lia", undefined);
console.log("get de Zeca -> ", t.get("Zeca"));
console.log("get de Lia -> ", t.get("Lia"));
console.log("get de Mel -> ", t.get("Mel"));
t.imprimir();

cenario(12, 'rehash: 8 chaves e carga 0,73, depois a 9 chaves');
t.set("Bia", 7);
t.set("Caio", 5);
t.set("Davi", 9);
console.log("Antes: quantidade = ", t.quantidade, "carga = ", (t.quantidade/t.tamanho).toFixed(2));
t.set("Lucas", 5);
console.log("Depois")
t.imprimir();
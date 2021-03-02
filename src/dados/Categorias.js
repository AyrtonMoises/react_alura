export default class Categorias {
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    //Registra funcao
    inscrever(func){
        this._inscritos.push(func);
    }

    //Remover funcao apos destruir algum elemento
    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    //Executa funcao que esta inscrita em cima do array alterado
    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias)
        });
    }

    //Guarda no array
    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}
import React, { Component } from 'react';
import './estilo.css';
class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state = {categorias:[]};
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    //inscreve funcao apos componente estar pronto pela primeira vez
    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }

    //desinscreve apos componentes nao existir
    componentWillMount(){
        this.props.categorias.desinscrever(this._novasCategorias);
    }


    _novasCategorias(categorias){
        this.setState({...this.state,categorias});
    }

    _handleEventoInput(e) {
        if (e.key === "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) => {
                       return <li className="lista-categorias_item" key={index}>{categoria}</li>
                    })}
                </ul>
                <input
                    className="lista-categorias_input"
                    type="text"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                >
                </input>
            </section>

        );
    }
}

export default ListaDeCategorias;
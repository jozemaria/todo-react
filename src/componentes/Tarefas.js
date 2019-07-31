import React, { Component, Fragment } from "react";


export default class Tarefas extends Component {

    constructor(props){
        super(props);
        this.state = { 
            tarefa : "",
            tarefas : ['Terminar TODO List - JSF', 'Simgle Page APP']
        };

        this.handleChande = this.handleChande.bind(this);
        this.adicionatarefas = this.adicionatarefas.bind(this);
    }

    render(){
        return (
        <Fragment>
            <h1>{ this.props.titulo }</h1>
            <input type="text" class="form-control" onChange={ this.handleChande } value={ this.state.tarefa} />
          <button type="button" class="btn btn-light" onClick={ this.adicionatarefas }>Adicionar</button>
            <ul>
                { this.state.tarefas.map(tarefa => <li class="teste" key={ tarefa }>  {tarefa} </li>)}
            </ul>
        </Fragment>
        );
    }

    adicionatarefas(){
        const { tarefa, tarefas } = this.state;
        this.setState({ 
            tarefa : "",
            tarefas : [].concat(tarefas,tarefa)});
    }


    handleChande(event){
        this.setState({ tarefa : event.target.value });
    }
}


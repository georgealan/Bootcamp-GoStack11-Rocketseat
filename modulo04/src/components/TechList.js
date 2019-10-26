import React, { Component } from 'react';
import TechItem from './TechItem';

/**
 * Componente no formato de classe. Elas permitem a adição de estados, state, que 
 * guarda informações para manipulação.
 */
class TechList extends Component {
/** 
 * States são imutaveis, não podem sofrer alterações, se for necessário mudar algo
 * é necessário copiar os valores existentes para depois adicionar novos.
 */
state = {
  newTech: '',
  techs: []
};

// Executado assim que o componente aparece em tela
componentDidMount() {
  const techs = localStorage.getItem('techs');

  if (techs) {
    this.setState({ techs: JSON.parse(techs) });
  }
}

/**
 * Executado sempre que houver alterações nas props ou estado
 * Se não vamos utilizar algum dos 2 paramêtros usamos o underscore _ no lugar.
 * @param {*} prevProps 
 * @param {*} prevState 
 */
componentDidUpdate(_, prevState) {
  
  /**
   * Se os dados anteriores da propriedade techs do array state for diferente 
   * dos dados atuais ai gravamos as alterações no banco de dados do navegador.
   */
  if (prevState.techs !== this.state.techs) {
    
    localStorage.setItem('techs', JSON.stringify(this.state.techs));
    
  }
}

// Executado quando o componente deixa de existir
componentWillUnmount() {

}

/**
 * Quando precisamos criar uma função que tenha acesso a outras propriedades deste
 * componente com o uso do this, temos que utilizar arrow functions, ao invés de
 * funções normais.
 */
handleInputChange = e => {
  this.setState({ newTech: e.target.value });
}

handleSubmit = e => {
  e.preventDefault();
  
  // O ...this.state.techs captura todos os valores já existentes no array
  this.setState({ 
    techs: [...this.state.techs, this.state.newTech],
    newTech: ''
  });
}

handleDelete = (tech) => {
  this.setState({ techs: this.state.techs.filter(t => t !== tech)});
}
  /**
   * O render é o que irá ser renderizado na tela.
   */
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <ul>
       {this.state.techs.map(tech => (
        <TechItem 
          key={tech} 
          tech={tech}
          onDelete={() => this.handleDelete(tech)}
        />
       ))}
      </ul>
      <input 
        type="text" 
        onChange={this.handleInputChange} 
        value={this.state.newTech}
      />
      <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
import React, {Component} from 'react';
 
export default class Events extends Component {

  constructor(){
    super();
    this.state = {mouseX: 0, mouseY: 0}
    // Se bindea el contexto del modulo this
    // al ejecutarse en un evento del navegador se enlaza en otro contexto
    // this.handleMouseMove = this.handleMouseMove.bind(this)
    // Esto es equivalente a usar las arrow functions
  }

  handleClick(e){
    console.log(e);
    alert("Hola")
  }

  handleMouseMove = (e) => {
    const {clientX, clientY} = e
    this.setState({mouseX: clientX, mouseY: clientY})
  }

  render(){
    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hola</button>
        <div
          onMouseMove={this.handleMouseMove} 
          style={{ border: '1px solid #000', marginTop: 10, padding: 10}}>
            <p>{this.state.mouseX}, {this.state.mouseY}</p>

        </div>
      </div>
    );
  }
}

import React, {Component} from 'react'

export default class Forms  extends Component{

    constructor(){
        super();
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
                
    }

    handleChange = (e) =>{
        console.log(e.target.checked);  
        this.setState({inputTerms: e.target.checked})          
    }

    render(){
        return(
            <div>
                <h4>Formulario jeje</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Nombre:</label>
                        <input 
                            id='name'
                            name='userName'
                            onChange={e =>this.setState({inputName: e.target.value})}
                            // ref={ inputElement => this.inputName = inputElement }
                            placeholder='Introduce el nombre'
                            value={this.state.inputName}/>
                    </p>

                    <p>
                        <label htmlFor='twitter'>Twitter:</label>
                        <input 
                            id='twitter'
                            name='twitterAccount'
                            value={this.state.inputTwitter}
                            onChange={e => this.setState({inputTwitter: e.target.value})}
                            placeholder='Introduce tu twitter'/>
                    </p>

                    <p>
                        <label>
                            <input
                                type='checkbox'
                                checked={this.state.inputTerms}
                                onChange={this.handleChange}></input>
                                Términos de aceptación
                        </label>
                    </p>

                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}
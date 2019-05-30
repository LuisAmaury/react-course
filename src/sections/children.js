import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types'

class Box extends Component{
    render(){
        return(
            <div style={{border: '1px solid #09f', margin: 5, padding: 5}}>
                {this.props.children}
            </div>
        )
    }
}

class Article extends Component{

    static propTypes = {
        author: PropTypes.string.isRequired
    }

    render(){
        const {author, children,date,title} = this.props
        
        return(
            <section>
                <h2>{title}</h2>
                { author && <p>Escrito por {author}</p>}
                <Box>{date}</Box>
                <article>
                    {children}
                </article>
            </section>
        )
    }
}
 
class App extends Component {

  render(){
    return (
      <div className="App">
          <h4>Children Props</h4>
          <Article
            author='Luis'
            date={new Date().toLocaleDateString()}
            title='Articulo sobre la prop children'>

                <p>Este es el contenido que le estoy enviando
                     a mi componente para mostrar el articulo</p>
                <strong>Y este contenido tmbn lo pongo bien fuerte</strong>     
            </Article>
      </div>
    );
  }
}

export default App;

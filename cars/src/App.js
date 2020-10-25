import React, { Component } from 'react';
import './App.css';

import Mycars from './components/Mycars'

class App extends Component {

  state = {
    titre : "Mon Catalogue Voitures."
  }

  changeTitle = (e) => {

    this.setState({titre : "Nouveau Titre !"})

  }

  changeViaParam = (t) => {

    this.setState({titre : t})

  }

  changeViaBind = (t) => {

    this.setState({titre : t})

  }

  changeViaInput = (e) => {

    this.setState({titre : e.target.value})

  }


  render() {

    return (
      <div className="App">
        
        <Mycars title ={this.state.titre} />
        
        <button onClick= {this.changeTitle} >Changer le nom en dur</button>
        <button onClick= {() => this.changeViaParam('Nouveau titre via Param')} >Changer via paramètre</button>
        <button onClick= {this.changeViaBind.bind(this,'Nouveau titre via Bind')} >Changer via bind</button>

        <input type="text" onChange={this.changeViaInput} value={this.state.titre}></input>
      </div>
    );

  }

}

export default App;

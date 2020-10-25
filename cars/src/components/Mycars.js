import React, { Component } from 'react';
import Car from './Cars'

class Mycars extends Component {


    state = {
        voitures: [
            { name: 'Ford', color: 'red', year: '2019' },
            { name: 'Tucson', color: 'gray', year: '2017' },
            { name: 'Opel', color: 'black', year: '2002' },
        ]
    }

    // addStyle = (e) => {

    //     e.target.classList.toggle('styled')
    // }

    addTenYears = () => {
        const updatedState = this.state.voitures.map((e) => { e.year = parseInt(e.year) - 10 })
        this.setState({ updatedState })
    }


    render() {


        return (

            <div>

                <h1 > {this.props.title}</h1>
                <button onClick={this.addTenYears} >+10 ans</button>

                {
                    this.state.voitures.map((voiture,index) => {
                        return (
                            <Car key={index} color={voiture.color} year={voiture.year}>
                                {voiture.name}
                            </Car>

                        )
                    }

                    )
                }

            </div>
        )
    }

}

export default Mycars;
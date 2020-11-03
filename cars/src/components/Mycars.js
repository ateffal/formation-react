import React, { Component, Fragment } from 'react';
import Car from './Cars'

class Mycars extends Component {


    state = {
        voitures: [
            { name: 'Ford', color: 'red', year: '2019' },
            { name: 'Tucson', color: 'gray', year: '2017' },
            { name: 'Opel', color: 'black', year: '2002' },
        ],
        messageDeApp : 'Message de App à MyCars',
        messageDeMyCars : 'pas de message'


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

            <Fragment>

                <h1 > {this.props.title}</h1>
                <button onClick={this.addTenYears} >+10 ans</button>
                <table>
                    <tr>
                        <th>Marque</th>   
                        <th>Age</th>
                        <th>Couleur</th>              
                        
                    </tr>

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

                </table>



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




            </Fragment>
        )
    }

}

export default Mycars;
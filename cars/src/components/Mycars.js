import React, { Component } from 'react';
import Car from './Cars'

class Mycars extends Component {


    onCopy = () => {
        alert('Merci de ne pas copier le texte !')
    }

    // addStyle = (e) => {

    //     e.target.classList.toggle('styled')
    // }


    render() {


        return (

            <div>

                <h1 > {this.props.title}</h1>
                <p onCopy={this.onCopy}>Lorem ipsum dolor sit amet consectetur adipisicing , voluptatem eius.</p>

                <Car color="gray"> Tucson </Car>
                <Car color="black">  Opel </Car>
                <Car color="green"> Renault </Car>
                <Car> </Car>


            </div>
        )
    }

}

export default Mycars;
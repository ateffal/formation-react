import { Component } from "react";
import React  from 'react'

const Car =  ({children, color}) => {

    var colorInfo = ""
    if(color) {
        colorInfo = color
    } else {
        colorInfo = "Néant"
    }

    if(children) {

        return (
        

            <div style={ {backgroundColor:'green', width:'50%', padding:'10px', margin:'5px auto'} }>
                <p>Marque : {children}</p>
                <p>Couleur : {colorInfo}</p>
                
    
            </div>
    
    
        )

    }
    

}


export default Car
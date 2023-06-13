import React from 'react'

export default function Salut(props) {
    let element
    
    if(props.curs) {
        element = <div>Sunt {props.nume} si sunt la cursule de {props.curs} </div>
    }else {
        element = <div>Sunt {props.nume}</div>
    }

    return element
  
}

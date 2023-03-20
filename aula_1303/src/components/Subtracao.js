import React from 'react'

const Subtracao = (props) => {
    return (
        <div>
            <h1>A subtração de {props.num1} - {props.num2} é igual a {props.num1 - props.num2}</h1>
        </div>
      )
}

export default Subtracao
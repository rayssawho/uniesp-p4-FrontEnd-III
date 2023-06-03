import React from 'react'

const RenderizandoComFuncoes = () => {

    function escolhaDeRenderizacao(seraRenderizado){
        if(seraRenderizado === "h1"){
            return <h1>Texto H1</h1>
        } else {
            return <h2>Texto H2</h2>
        }
    }

  return (
    <div>{escolhaDeRenderizacao("h1")}
        {escolhaDeRenderizacao("h2")}
    </div>
  )
}

export default RenderizandoComFuncoes
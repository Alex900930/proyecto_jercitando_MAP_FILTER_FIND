import React from 'react'
import '../hoja-estilo-componentes/ReyesNombresinG.css';

function ReyesNombresinG({reyes}) {
  const remover = (e) => {
    e.target.parentNode.remove();
  }

    const resultado = reyes.filter(e => !e.nombre.includes('g') ).map(e => <div key={e.nombre} className='rey'>
        {e.nombre} <button onClick={remover}>Borrar</button>
    </div>)
  return (
    <>
        {resultado}
    </>
  )
}

export default ReyesNombresinG
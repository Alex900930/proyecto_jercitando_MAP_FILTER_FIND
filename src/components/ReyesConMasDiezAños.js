import React from 'react'
import '../hoja-estilo-componentes/ReyesConMasDiezAños.css';

function ReyesConMasDiezAños({reyes}) {
    
    const sumar = (e) => {
      console.log(e.target.innerHTML);
      const result1 = Number(e.target.innerHTML) + 1;
      e.target.innerHTML = result1;
    } 
    const resultado = reyes.filter(e => e.años >= 10 && e.comido > 10).map(e => 
    <div key={e.nombre} className='rey'>
        {e.nombre}
        <div className='contador' onClick={sumar}>
          0
        </div>
    </div>)
    return (
    <>
        {resultado}
    </>
  )
}

export default ReyesConMasDiezAños
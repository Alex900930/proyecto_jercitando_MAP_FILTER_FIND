import React from 'react';
import '../hoja-estilo-componentes/Reyes.css';
import imagen0 from '../imagenes/imagen0.jpg';

function Reyes({reyes}) {
  const resultado = reyes.map(e => 
  <div key={e.nombre} className='rey'>
    <div><span style={{color:"red"}}> {e.nombre.toUpperCase()} </span>
     ha comido {e.comido} en sus {e.años} años de reinado </div>
     <img src={imagen0}  alt={e.nombre}/>
  </div>)
  return (
    <>
     {resultado}
     </>
  )
}

export default Reyes
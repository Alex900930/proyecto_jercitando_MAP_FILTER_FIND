import React from 'react'

function ReyconLetraE({reyes}) {
  const resultado = reyes.find(e => e.nombre[0].includes("E"));
    return (
    <>
      {resultado === undefined ? "No se ha encontrado" : resultado.nombre}
    </>
  )
}

export default ReyconLetraE;
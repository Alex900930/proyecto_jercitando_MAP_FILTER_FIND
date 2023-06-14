import './App.css';
import ReyesConMasDiezAños from './components/ReyesConMasDiezAños';


function App() {
  const reyes = [
    {
      nombre: "Atanagildo",
      comido: 49275,
      años: 5,
    },
    {
      nombre: "Ervigio",
      comido: 7665,
      años: 7,
    },
    {
      nombre: "Ataulfo",
      comido: 29200,
      años: 5,
    },
    {
      nombre: "Leogivildo",
      comido: 19770,
      años: 8,
    },
    {
      nombre: "Recesvinto",
      comido: 76285,
      años: 19,
    },
    {
      nombre: "Sisebuto",
      comido: 42705,
      años: 9,
    },
    {
      nombre: "Teodorico",
      comido: 144540,
      años: 33,
    },
  ];

  return (
    <>
        <h1>Actividad 4:</h1>
        <ReyesConMasDiezAños reyes={reyes}/>
      
    </>
  );
}

export default App;

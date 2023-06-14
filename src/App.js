import Reyes from "./components/Reyes";
import './App.css';

function App() {
  const reyes = [
    {
      nombre: "Atanagildo",
      comido: 49275,
      años: 15,
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
      años: 18,
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
        <h1>Actividad 1:</h1>
        <Reyes reyes={reyes}/>
      
    </>
  );
}

export default App;

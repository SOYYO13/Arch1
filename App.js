import { useState } from "react";
import "./App.css";
import Dado from "./Dado";
import { Container } from "react-bootstrap";

function App() {
  const [tiro, setTiro] = useState(Math.floor(Math.random() * (7 - 1)) + 1);
  const [turno, setTurno] = useState(1);
  const [historial,setHistorial] = useState([])

  const tirada = () => {
    setTiro(Math.floor(Math.random() * (7 - 1)) + 1);
    setTurno(turno === 1 ? 2 : 1);
    setHistorial([...historial,tiro])
  };

  return (
    <Container className="text-center App">
      <Dado tirada={tirada} turno={turno} tiro={tiro} historial={historial}/>
    </Container>
  );
}

export default App;

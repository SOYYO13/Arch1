import React from "react";
//import {H1} from "react-bootstrap"
import Image from "react-bootstrap/Image";
import { Row, Col,Button } from "react-bootstrap/";

const Dado = ({tiro,turno,tirada,historial}) => {
  const imagen = `${tiro}.png`;
  const ganador = `${turno}.jpg`;
  return (
    <>
      <Row>
        <Col md={6} className="text-center mt-5">
          <h1 className="text-center" variant="primary">
            Juego del Dado Magico
          </h1>
          <h3 className="text-primary" variant="">es el turno del jugador num {turno}</h3>
          <br />
          <Button onClick={tirada}>jugar</Button>
          <br />
          <br />
          <Image src={imagen} alt="" />
          <br />
          <br />
          
        </Col>
        <Col md={6} className="text-center mt-5" variant="primary">
          <h3>Historial de Jugadas</h3>
          {historial.map((hist,index) => <h4 key={index}>resultado #{hist}</h4>)}
           
        </Col>
      </Row>
      {tiro === 6 && (
            <h4>
              El ganador es <br />
              <br />
              <Image className="fluid" src={ganador} alt="" />
            </h4>
          )}
    </>
  );
};

export default Dado;

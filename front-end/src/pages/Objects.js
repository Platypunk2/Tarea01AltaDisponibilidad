import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import data_js from './Example.json';
import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Obj = (prop) => {
  const send = { pathname: '/ObjDetails' }
  const props = {id: prop.item.idProd}
  return(/*console.log(prop),*/
  <>
    <Card >
        <Card.Img variant="top" src={prop.item.nombre+".png"} />
        <Card.Body>
          <Card.Title>{prop.item.nombre}</Card.Title>
          <Card.Text>
            Precio: {prop.item.precio}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <LinkContainer to={send} state={props}>
          <Button variant="primary">Ir al Producto</Button>
        </LinkContainer>
        </Card.Footer>
    </Card>
  </>
    
  );
};
console.log(process.env)
const Objects = () => {

    const [ProdList, setProdList] = useState([])

    useEffect(() => {
      fetch(process.env.WDS_SOCKET_HOST+'productos')
         .then((response) => response.json())
         .then((data) => {
            //console.log(data_js);
            console.log(data);
            setProdList(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
    }, [])
    

    return(
      <>
      <div className="ms-4 me-4 mt-4">
      <Row md={5} className="g-4 pb-4">
      {ProdList.map((item) => (
        <Col md={2} >
          <Obj key={item.idProd} item={item}></Obj>
        </Col>
      ))}
      </Row>
      </div>
      </>
      
    );
  };
  
  export default Objects;
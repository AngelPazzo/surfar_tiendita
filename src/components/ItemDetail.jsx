import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ( props ) => {
  const [amount, setAmount] = useState(0);
   const { addItem} = useContext(CartContext);
  
  const onAdd = (item, count, amount) => {
     addItem(item, count);
     setAmount(amount);
   }


    return props.loading ? (
      <>
        <Container style={{ width: "18rem" }}>
          <Row className="d-flex  mb-5 flex-nowrap">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={props.details.image} alt={props.details.title} />
                <Card.Body>
                  <Card.Text>Modelo: {props.details.title}</Card.Text>
                  <Card.Text>Descripción: {props.details.info}</Card.Text>
                  <Card.Text>Tamaño: {props.details.size}</Card.Text>
                  <Card.Text>Color: {props.details.color}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Stock disponible: {props.details.stock}
                  </small>
                </Card.Footer>
                <Card.Footer>
                  <small>Precio: {props.details.price} U$S</small>
                </Card.Footer>
                
                <ItemCount stock={props.details.stock} initial={0} onAdd={onAdd} item = {props.details} amount = {amount} />
                <Link to="/cart"><Button variant="warning"size="sm">Ir al carrito</Button></Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    ) : (
      <>
      <div className ="col-md-12 text-center">
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...</Button>
        </div>
    </>
  );
};


export default ItemDetail;

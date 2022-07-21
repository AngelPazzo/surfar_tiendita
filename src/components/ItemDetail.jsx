import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "./ItemCount";

const onAddItem = (count) => {
  alert(`${count} items agregados al carrito!`);
};

const ItemDetail = ({ item, loading }) => {
  console.log(item);
  if (loading) {
    return <h1> Loading...</h1>;
  } else {
    return (
      <>
        <Container style={{ width: "18rem" }}>
          <Row className="d-flex  mb-5 flex-nowrap">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.image} alt={item.title} />
                <Card.Body>
                  <Card.Text>Modelo: {item.title}</Card.Text>
                  <Card.Text>Descripción: {item.info}</Card.Text>
                  <Card.Text>Tamaño: {item.size}</Card.Text>
                  <Card.Text>Color: {item.color}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Stock disponible: {item.stock}
                  </small>
                </Card.Footer>
                <Card.Footer>
                  <small>Precio: {item.price} U$S</small>
                </Card.Footer>
                <ItemCount stock={item.stock} initial={0} onAdd={onAddItem} />
              </Card>
            </Col>
          </Row>
        </Container>

        {/* <Container style={{ width: "18rem" }}>
          <Row className="d-flex  mb-5 flex-nowrap">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.image} alt={item.title} />
                <Card.Body>
                  <Card.Text>Modelo: {item.title}</Card.Text>
                  <Card.Text>Descripción: {item.info}</Card.Text>
                  <Card.text>Tamaño: {item.size}</Card.text>
                  <Card.Text>Color: {item.color}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Stock disponible: {item.stock}
                  </small>
                </Card.Footer>
                <Card.Footer>
                  <small>Precio: {item.price}</small>
                </Card.Footer>
                <ItemCount stock={item.stock} initial={0} onAdd={onAddItem} />
              </Card>
            </Col>
          </Row>
        </Container> */}
      </>
    );
  }
};

export default ItemDetail;

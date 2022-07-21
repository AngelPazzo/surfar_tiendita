import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Items = (props) => {
  return (
    <>
      <Container style={{ width: "18rem" }}>
        <Row className="d-flex  mb-5 flex-nowrap">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={props.item.image}
                alt={props.item.title}
              />
              <Card.Body>
                <Card.Text>Modelo: {props.item.title}</Card.Text>
                <Card.Text>Tamaño: {props.item.size}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Items;

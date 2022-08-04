import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";








const Items = (props) => {
  return (
    <>
      
      <Container style={{ width: "18rem" }}>
        <Row className="d-flex  mb-5 flex-nowrap">
          <Col  md="auto">
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
              <div className ="col-md-12 text-center">
                <Link to={`/item/${props.item.id}`}>
                  <Button className="btn btn-info">ver más... </Button>
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      
    {/* <div className="card1"> 
      <Container style={{ width: "18rem" }}>
        <Row className="d-flex  mb-5 flex-nowrap">
          <Col  md="auto">
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
              <div className ="col-md-12 text-center">
                <Link to={`/item/${props.item.id}`}>
                  <Button className="btn btn-info">Detalles </Button>
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div> */}
    
    </>
  );
};

export default Items;

import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./item.css"


const Items = (props) => {
  return (
    <>
     <div className="m-4" >
      <div className="card card border-primary mb-3">
        <div className="card-body">
          <h5 className="card-title">{props.item.title}</h5>
          <img className="img2" src={props.item.image} alt={props.item.title} />
          <Link to={`/item/${props.item.id}`}>
                  <Button className="btn btn-info">ver más... </Button>
                </Link>

        </div>
      </div>
    </div>




      {/* <div className= "row row-cols-1 row-cols-sm-4 d-flex justify-content-center">
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
              
                <Link to={`/item/${props.item.id}`}>
                  <Button className="btn btn-info">ver más... </Button>
                </Link>
              
            </Card>
      </div>
     */}
    </>
  );
};

export default Items;

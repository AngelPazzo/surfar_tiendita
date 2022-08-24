import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./item.css"


const Items = (props) => {
  return (
    <>
     <div className="m-3" >
      <div className="card card border-primary mb-3">
      <Card.Body>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Img variant="top" src={props.item.image} alt={props.item.title}  />
        </Card.Body>
          <Card.Body>
          <Link to={`/item/${props.item.id}`}>
            
                  <Button variant="dark" size="md">Ver más... </Button>
                </Link>
                </Card.Body>

        
      </div>
    </div>


    </>
  );
};

export default Items;

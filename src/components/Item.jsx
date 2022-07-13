import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// const ItemListContainer = ({ greeting }) => {
//   const onAddItem = (count) => {
//     alert(`Added ${count} items to cart`);
//   };
//   return (
//     <>
//       <ItemCount stock={10} initial={0} onAdd={onAddItem} />
//       <ItemList />
//       <Item />
//     </>
//   );
// };
const Items = (props) => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
          <Card className="mb-3">
            <Card.Img variant="top" src={props.item.image} />
            <Card.Body>
              <Card.Title>{props.item.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text> Price: U$S{props.item.price}</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Items;

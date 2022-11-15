import { Card, Col, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { run } from "holderjs";
import PropTypes from "prop-types";
import NumberSpinner from "./NumberSpinner";
import Dropdown from 'react-bootstrap/Dropdown';

function Option({ name, price }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    run();
  });

  function onChange(value) {
    setQuantity(value);
  }

  return (
      <Dropdown.Menu show>
        <Dropdown.Header>
          잼+꿀
        </Dropdown.Header>
        <Dropdown.Item eventKey="2">
          <Card>
           <Row className="g-0">
            <Col xs={5}>
              <Image className="rounded-start" src="holder.js/100px180" />
            </Col>
            <Col>
              <Card.Body>
               <Card.Title>{name}</Card.Title>
               <Card.Text>{(price * quantity).toLocaleString()}원</Card.Text>
               <NumberSpinner value={quantity} onChange={onChange} />
              </Card.Body>
            </Col>
          </Row>
           </Card> 
        </Dropdown.Item>
        <Dropdown.Item eventKey="3"> 
        그래놀라
        <Card>
           <Row className="g-0">
            <Col xs={5}>
              <Image className="rounded-start" src="holder.js/100px180" />
            </Col>
            <Col>
              <Card.Body>
               <Card.Title>{name}</Card.Title>
               <Card.Text>{(price * quantity).toLocaleString()}원</Card.Text>
               <NumberSpinner value={quantity} onChange={onChange} />
              </Card.Body>
            </Col>
          </Row>
           </Card> 
        
        </Dropdown.Item>
     </Dropdown.Menu>
   );
  }



Option.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
};

Option.defaultProps = {
  name: "그래놀라",
  price: 300,
};

export default Option;

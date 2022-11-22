import { Container, Row, Col } from "react-bootstrap";
import OptionItem from "./OptionItem";

function OptionTab({ data }) {
  return (
    <Container>
      <h5>{data.title}</h5>
      <Row xs={2} lg={3} className="d-flex flex-row flex-nowrap overflow-auto">
        {data.items.map((data, index) => (
          <Col key={index}>
            <OptionItem data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default OptionTab;

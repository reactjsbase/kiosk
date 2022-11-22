import { Card, Stack } from "react-bootstrap";
import OptionItem from "./OptionItem";

function OptionTab({ data }) {
  return (
    <Card>
      <Card.Header>{data.title}</Card.Header>
      <Card.Body className="px-0">
        <Stack gap={3} className="px-3 d-flex flex-row overflow-auto">
          {data.items.map((data, index) => (
            <OptionItem key={index} data={data} />
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default OptionTab;

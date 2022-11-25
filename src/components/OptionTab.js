import { useState } from "react";
import { Card, Stack } from "react-bootstrap";
import OptionItem from "./OptionItem";

function OptionTab({ data, onDataClick }) {
  const [selected, setSelected] = useState();

  function onItemClick(option) {
    setSelected(option);
    onDataClick(option);
  }

  return (
    <Card>
      <Card.Header>{data.title}</Card.Header>
      <Card.Body className="px-0">
        <Stack gap={3} className="px-3 d-flex flex-row overflow-auto">
          {data.items.map((data, index) => (
            <OptionItem
              key={index}
              data={data}
              onClick={onItemClick}
              selected={selected === data ? "selected" : ""}
            />
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default OptionTab;

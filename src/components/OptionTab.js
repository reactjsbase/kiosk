import { useState } from "react";
import { Card, Stack } from "react-bootstrap";
import OptionItem from "./OptionItem";

function OptionTab({ data, onDataClick }) {
  const [selected, setSelected] = useState();

  function onItemClick(option) {
    setSelected(option);
    onDataClick(option, data.title);
  }

  return (
    <Card>
      <Card.Header>{data.title}</Card.Header>
      <Card.Body className="px-0">
        <Stack gap={3} className="px-3 d-flex flex-row overflow-auto">
          {data.items.map((item, index) => (
            <OptionItem
              key={index}
              data={item}
              onClick={onItemClick}
              selected={selected === item}
            />
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default OptionTab;

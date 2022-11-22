import { Button, Form, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { BsDash, BsPlus } from "react-icons/bs";

function NumberSpinner({ value, min, max, onChange, ...props }) {
  function onIncrease(e) {
    if (value < max) onChange(++value);
  }

  function onDecrease(e) {
    if (value > min) onChange(--value);
  }

  return (
    <InputGroup {...props}>
      <Button variant="outline-secondary" onClick={onDecrease}>
        <BsDash />
      </Button>
      <Form.Control className="text-center" value={value} readOnly />
      <Button variant="outline-secondary" onClick={onIncrease}>
        <BsPlus />
      </Button>
    </InputGroup>
  );
}

NumberSpinner.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

NumberSpinner.defaultProps = {
  value: 1,
  min: 1,
  max: 100,
};

export default NumberSpinner;

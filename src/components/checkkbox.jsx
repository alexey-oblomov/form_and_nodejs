import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import img from './icons/Shape.png';

export default function CustomizedCheckbox(props) {
  const {name, value, onChange, label} = props;
  const InputProps = {
    name,
    value,
    onChange,
    label,
  };

  return (
    <Label htmlFor={name}>
      <Input className="checkbox__input" type="checkbox" id={name} {...InputProps} />
      <Box value={value} />
      {label}
    </Label>
  );
}

CustomizedCheckbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

const Label = styled.label`
  cursor: pointer;
  max-width: 250px;
  font-size: 14px;
  color: #323336;
  margin-left: 25px;
`;

const Box = styled.span`
  position: absolute;
  margin-left: -25px;
  width: 15px;
  height: 15px;
  border: ${props => (props.value ? '1px solid #2196f3' : '1px solid #c4c4c4')};
  box-sizing: border-box;
  border-radius: 3px;
  background: ${props => (props.value ? `no-repeat url('${img}') center` : '#ffffff')};
  :hover {
    cursor: pointer;
    border: 1px solid #000000;
  }
`;

const Input = styled.input`
  padding-left: 25px;
  appearance: none;
  position: absolute;
  :hover {
    cursor: pointer;
  }
`;

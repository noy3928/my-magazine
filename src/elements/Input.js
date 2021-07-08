import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    is_Submit,
    onSubmit,
    borderRadius,
  } = props;

  const styles = {
    borderRadius,
  };

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          value={value}
          rows={5}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        {is_Submit ? (
          <ElInput
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            {...styles}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput
            type={type}
            {...styles}
            placeholder={placeholder}
            onChange={_onChange}
          />
        )}
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  is_Submit: false,
  borderRadius: false,
  onSubmit: () => {},
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  font-family: "GmarketL";
  border: 1px solid #212121;
  width: 100%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 25px;
  padding: 12px 12px;
  box-sizing: border-box;
  overflow: hidden;
  :focus {
    outline: none;
  }
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
`;

const ElInput = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  :focus {
    outline: none;
    font-weight: 600;
  }
  ::-webkit-placeholder {
    transition: transition: 0.5s ease-in-out;
  }
 box-shadow: 0 25px 25px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(25px);
      ${(props) =>
        props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
`;

export default Input;

import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, pointer, _onClick } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin,
    pointer,
    _onClick,
  };
  return (
    <P {...styles} onClick={_onClick}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#616161",
  size: "14px",
  margin: false,
  pointer: false,

  _onClick: () => {},
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.pointer ? `cursor:pointer;` : "")}
`;

export default Text;

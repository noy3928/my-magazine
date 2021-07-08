import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    is_float,
    children,
    margin,
    width,
    padding,
    borderRadius,
    is_glass,
    height,
    bold,
    size,
  } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    borderRadius,
    is_glass,
    height,
    bold,
    size,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  borderRadius: false,
  is_glass: false,
  size: false,
  bold: false,
  height: "100%",
  width: "100%",
  padding: "12px 0px",
};

const ElButton = styled.div`
  cursor: pointer;
  width: ${(props) => props.width};
  background-color: transparent;
  height: ${(props) => props.height};
  color: #616161;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) =>
    props.borderRadius ? `border-radius:${props.borderRadius};` : ""}
    ${(props) =>
    props.is_glass
      ? `box-shadow: 0 25px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(25px);`
      : ""}
      font-family: "GmarketL";
  transition: 0.5s ease-in-out;
  :hover {
    font-family: "GmarketL";
  }
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

export default Button;

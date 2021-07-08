import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    margin,
    padding,
    bg,
    children,
    center,
    _onClick,
    justifyContent,
    alignItems,
    is_glass,
    borderRadius,
    is_grid,
    flex,
    height,
    flexDirection,
    relative,
    scroll,
    overhidden,
    font,
    minHeight,
    maxHeight,
    color,
    whitebackground,
    notishadow,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    justifyContent,
    alignItems,
    is_glass,
    borderRadius,
    is_grid,
    flex,
    flexDirection,
    relative,
    scroll,
    overhidden,
    font,
    minHeight,
    maxHeight,
    color,
    whitebackground,
    notishadow,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  height: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  borderRadius: false,
  is_glass: false,
  flex: false,
  justifyContent: false,
  alignItems: false,
  is_grid: false,
  flexDirection: false,
  relative: false,
  scroll: false,
  overhidden: false,
  font: false,
  minHeight: false,
  maxHeight: false,
  color: false,
  whitebackground: false,
  notishadow: false,
  _onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) =>
    props.flexDirection ? `flex-direction: ${props.flexDirection};` : ""}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.flex ? `display:flex;` : "")}
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ""}
  ${(props) => (props.alignItems ? `align-items:${props.alignItems};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
  ${(props) => (props.center ? `text-align: center;` : "")}
  ${(props) =>
    props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
  ${(props) =>
    props.is_glass
      ? `box-shadow: 0 25px 25px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(25px);`
      : ""}
  ${(props) =>
    props.is_grid
      ? `display: grid; grid-template-columns: 27% 70%; grid-column-gap: 20px; `
      : ""}
  ${(props) => (props.relative ? `position: relative;` : "")}
  ${(props) =>
    props.scroll
      ? `overflow-y: scroll;
  overflow-x: hidden;`
      : ""}
  ${(props) => (props.overhidden ? `overflow: hidden;` : "")}
  ${(props) => (props.font ? `font-family:${props.font};` : "")}
  ${(props) => (props.minHeight ? `min-height: ${props.minHeight};` : "")}
  ${(props) => (props.maxHeight ? `max-height: ${props.maxHeight};` : "")}
  ${(props) => (props.color ? `position: ${props.color}` : "")}
  ${(props) =>
    props.whitebackground
      ? `background:linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.1)
  );`
      : ""}
  ${(props) =>
    props.notishadow ? `box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);` : ""}
`;

export default Grid;

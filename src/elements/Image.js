import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const { shape, src, size, height, width, _onClick, pointer } = props;

  const styles = {
    src: src,
    size: size,
    height,
    width,
    pointer,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles} onClick={_onClick}></AspectInner>
      </AspectOutter>
    );
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "circle",
  src: "https://preview.redd.it/u4vgnguacr471.jpg?width=960&crop=smart&auto=webp&s=9ea5b963ac93d3107747e7439f00cd0a2a096df6",
  size: 36,
  width: "100%",
  height: "auto",
  pointer: false,
  _onClick: () => {},
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const AspectOutter = styled.div`
  width: 100%;
  max-height: 500px;
`;

const AspectInner = styled.img`
  ${(props) => (props.pointer ? `cursor:pointer;` : "")}
  position: relative;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  overflow: hidden;
  src: url("${(props) => props.src}");
  // background-size: cover;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

export default Image;

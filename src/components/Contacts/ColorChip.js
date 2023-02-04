import React from "react";
import styled from "styled-components";

const ColorChipBlock = styled.div`
  width: 50%;
  margin: 9px auto; // 중앙에 놔줌

  .color-box {
    // background: skyblue;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 70px;
  }

  .color-name {
    background: #fff;
    height: 40px;
    position: relative;
    padding: 5px 20px;

    font-size: 12px;
    font-weight: medium;
    text-transform: uppercase;
    color: #444545;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    -webkit-box-shadow: 0px 3px 0px 0px rgba(226, 228, 231, 0.75);
    -moz-box-shadow: 0px 3px 0px 0px rgba(226, 228, 231, 0.75);
    box-shadow: 0px 3px 0px 0px rgba(226, 228, 231, 0.75);
  }

  // hover시 위치 올리기
  position: relative;
  top: 0;
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    top: -4px;
    box-shadow: 0 8px 20px rgba(gray, 0.12);
  }

  #no-select {
    background: pink;
    color: white;
  }
`;

function ColorChip({ children }) {
  return <ColorChipBlock>{children}</ColorChipBlock>;
}

export default ColorChip;

import React from "react";
import styled from "styled-components";

const ColorChipBlock = styled.div`
  width: 50%;
  margin: 9px auto; // 중앙에 놔줌

  .color-box {
    // background: skyblue;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding-top: 60%;
    height: 70px;
  }

  .color-name {
    background: #fff;
    padding: 10px;
    position: relative;

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

  #color-code {
    font-size: 11px;
    line-height: 0.8em;
    text-transform: uppercase;
    color: #a9abab;
    padding-top: 0px;
  }

  // hover시 위치 올리기
  position: relative;
  top: 0;
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    top: -5px;
    box-shadow: 0 8px 20px rgba(gray, 0.12);
  }

  #no-select {
    background: pink;
    color: black;
  }
`;

export const ColorChipRoundBlock = styled.div`
  // Contact Show 안에 있는 dot 들에 적용

  .round {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
`;

export const ColorChipItem = styled.div`
  // ColorChipRound랑 InfoBlck 감싸고 있음ㅠㅠ

  display: inline-flex;
  align-items: center;

  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 0.8px solid #e7eaef;

  width: 100%;
`;

function ColorChip({ children }) {
  return <ColorChipBlock>{children}</ColorChipBlock>;
}

export function ColorChipRound({ children }) {
  return <ColorChipRoundBlock>{children}</ColorChipRoundBlock>;
}

export default ColorChip;

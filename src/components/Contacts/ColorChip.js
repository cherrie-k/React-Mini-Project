import React from "react";
import styled from "styled-components";

const ColorChipBlock = styled.div`
  min-width: 90px;
  max-width: 400px;
  width: 50%;
  margin: 9px auto; // 중앙에 놔줌
  margin-top: 23px;
  box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.05); // 이거 0.1 대신 0.04정도로도 바꿔보기

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
    display: flex;
    justify-content: center;
    //align-items: center;
    margin-top: 100px;
    background: linear-gradient(-45deg, #ffff00, #f8c0ce, #5cf0f8, #fff700);
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`;

export const ColorChipRoundBlock = styled.div`
  // Contact Show 안에 있는 dot 들에 적용
  display: inline-flex;

  .round {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: inline;
  }
`;

export const ColorChipItem = styled.div`
  // ColorChipRound랑 InfoBlck 감싸고 있음ㅠㅠ

  display: flex;
  align-items: center;

  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 0.8px solid #e6e6fa; // 라벤더 그레이 회색

  width: 100%;
`;

export function ColorChipRound({ children }) {
  return <ColorChipRoundBlock>{children}</ColorChipRoundBlock>;
}

export default function ColorChip({ children }) {
  return <ColorChipBlock>{children}</ColorChipBlock>;
}

// 각 투두 정보를 렌더링해주는 컴포넌트. 여기에 체크 원과 휴지통도 렌더링됨

import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: green; // <-------
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: pink;
  }
  display: none;
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid red;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  // 끝나서 체크 된 애들
  ${(props) =>
    props.done &&
    css`
      border: 1px solid pink;
      color: pink;
    `}
`;

// Component Selector 기응 사용. TodoItemBlock 위에 커서가 있을 때, Remove 컴포넌트를 보여주라는 뜻!
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: blue;
  ${(props) =>
    props.done &&
    css`
      color: red;
    `}
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;

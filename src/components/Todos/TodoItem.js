// 각 투두 정보를 렌더링해주는 컴포넌트. 여기에 체크 원과 휴지통도 렌더링됨

import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "./TodoContext";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a9b2ad;
  font-size: 24px;
  cursor: pointer;
  opacity: 70%;
  &:hover {
    color: #ff8094;
  }
  display: none;
`;

const CheckCircle = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 16px;
  border: 1.6px solid #d2dbd6;
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
      border: 2px solid #76c69e;
      color: #76c69e;
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
      display: initial; // 지우기?
    }
  }
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #c7ccd1;
    `}
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

// React.memo를 하면 다른 항목이 업데이트 될 때 불필요한 리렌더링을 방지해줌. (성능 최적화)
export default React.memo(TodoItem);

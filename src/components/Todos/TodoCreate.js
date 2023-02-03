// 새 할 일을 등록하는 컴포넌트.하단부 + 버튼 렌더링.

import React, { useState } from "react"; //  useState 따로 import 해줘야함~!
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.button`
  background: blue; // 버튼 제일 기본색
  &:hover {
    background: yellow; // 버튼 눌리진 않았지만 hover일 때
  }
  &:active {
    background: red;
  }

  z-index: 5; // 요소들 겹칠 때 수직 위치 정해줌
  cursor: pointer;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  font-size: 60px; // + icon 사이즈임
  color: white;
  border: none;
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute; //absolute는 부모(조상) 요소를 기준으로 배치
  left: 50%;
  bottom: 0px; // 젤밑에다 붙여줌
  transform: translate(-50%, 50%); // 얘도 +버튼 위치에 관여

  transition: 0.125s all ease-in; // 부드럽게 버튼 돌려줌

  ${(props) =>
    props.open &&
    css`
      // 눌려서 X자 됐을 때 버튼 색
      background: salmon;
      &:hover {
        background: lime;
      }
      &:active {
        background: red;
      }
      // 누르면 +아이콘을 45도 돌려서 x로 만들어줌
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  position: absolute; // 부모 요소에 상대적으로
  width: 100%;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: ghostwhite;
  padding: 30px;
  padding-bottom: 42px;

  // 이 radius랑 TodoTemplate.js의 TodoTemplateBlock의 radius랑 맞춰줘야함!
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid gainsboro;
`;

const Input = styled.input`
  padding: 11.6px;
  border-radius: 5px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
`;

function TodoCreate() {
  // useState로 토글 할 수 있는 open값 관리. 이게 true면 + 아이콘을 돌려서 X 되게 하고, 할일 입력 칸 나옴.
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input
              autoFocus
              placeholder="Input your to-do, then press 'Enter'"
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;

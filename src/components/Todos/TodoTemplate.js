// 투두리스트의 레이아웃을 설정하는 컴포넌트

import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  max-width: 520px;
  min-width: 300px;
  height: 600px; /*height 좀 다름*/

  position: relative;
  background: #fff;
  border-radius: 16px; // 둥근 네모로 만들어줌. 얘랑 TodoCreate.js의 InsertForm의 border radius랑 맞춰줘야함!
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1); // 이거 0.1 대신 0.04정도로도 바꿔보기

  margin: 0 auto; // auto를 통해 페이지 중앙에 나타나게 됨
  margin-top: 42px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;

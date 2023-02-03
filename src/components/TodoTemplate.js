// 투두리스트의 레이아웃을 설정하는 컴포넌트

import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 600px; /*height 좀 다름*/

  position: relative;
  background: white;
  border-radius: 16px; // 둥근 네모로 만들어줌
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; // auto를 통해 페이지 중앙에 나타나게 됨
  margin-top: 50px;
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;

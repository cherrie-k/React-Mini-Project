import React from "react";
import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import { TodoProvider } from "./TodoContext";

import { createGlobalStyle } from "styled-components";

// 글로벌 스타일로 페이지 전체 설정 가능
const GlobalStyle = createGlobalStyle`
  body{ 
    background: #ddf7c3;// f9f2b3 f8f3d0 노랑 cef3b9  d6f5c5 연두
  }   
`;

export default class Todo extends React.Component {
  render() {
    return (
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    );
  }
}

import React from "react";
import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import { TodoProvider } from "./TodoContext";

import { createGlobalStyle } from "styled-components";

// 글로벌 스타일로 페이지 전체 설정 가능
const GlobalStyle = createGlobalStyle`
  body{ background: pink;}
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

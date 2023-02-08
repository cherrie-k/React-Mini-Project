import React from "react";
import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import { TodoProvider } from "./TodoContext";

// 페이지별로 body color 다르게 해줌
import setBodyColor from "../../setBodyColor";

// 색깔 정신 없는 애들 고치기

export default class Todo extends React.Component {
  render() {
    setBodyColor({ color: "linear-gradient(#fff8d6, #cedfbd)" });
    return (
      <TodoProvider>
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    );
  }
}

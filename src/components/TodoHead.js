// 오늘의 날짜, 요일, 앞으로 해야 할 일의 개수를 표시하는 컴포넌트
import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

// CSS 추가 할 때 주의할 점: 중복되는 클래스명 생성하지 않기! - 네이밍과 CSS Selector를 통해 방지 가능.
const TodoHeadBlock = styled.div`
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    color: lightseagreen;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  console.log(todos);
  return (
    <TodoHeadBlock>
      <h1>2023년 02월 04일</h1>
      <div className="day"> 토요일</div>
      <div className="tasks-left">할 일 150개 남음ㅠ</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;

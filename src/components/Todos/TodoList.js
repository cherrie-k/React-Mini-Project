// 할 일에 대한 정보가 들어있는 todo 배열을 내장함수 map을 사용하여 복수의 TodoItem 컴포넌트를 렌더링해주는 컴포넌트

import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  /*자신이 차지 할 수 있는 영역을 꽉 채우도록 설정해줌.
   참고: flex: 1은 flex-grow, flex-shrink: 1 임을 의미하고, 
   flex-basis: 0% 임을 의미한다. 
   즉, 점유 크기를 0으로 만든 후 화면 비율에 따라 유연하게 
   늘어나거나 줄어들게 만들 수 있는 속성임!*/
  padding: 20px 22px;
  padding-bottom: 40px;
  overflow-y: auto; // 스크롤버 보여줄지 말지 자동으로 결정. 내부 컨텐츠 크기가 주어진 공간을 넘어가는 경우에만 스크롤바 생김.
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="2시 치과" done={true} />
      <TodoItem text="헬스장 운동" done={true} />
      <TodoItem text="비타민 C 챙겨먹기" done={false} />
      <TodoItem text="프로젝트 코딩" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;

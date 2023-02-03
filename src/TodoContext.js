// Reducer 로서 상태를 관리하는 컴포넌트.

// useContext는 커스텀 hook을 만들기 위해, useRef는 nextId(새로운 항목 추가시 사용되는 고유 id)를 관리해주기 위해 가져옴.
import React, { createContext, useReducer, useContext, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: "리액트 공부하기",
    done: true,
  },
  {
    id: 2,
    text: "영어 회화 연습",
    done: true,
  },
  {
    id: 3,
    text: "설거지",
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map(
        (todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo) //...는 스프레드
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

/* state와 dispatch를 두 개의 context를 만들어서 그 안에 따로 따로 넣어준다.
   하나 말고 두개로 한 이유 -> 컴포넌트에서 불필요한 렌더링 방지, 그리고 사용의 편의성(?) */
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
// nextId는 새로운 항목을 추가 할 때 사용 할 고유 ID. 이 값은 useRef 를 사용하여 관리한당
const TodoNextIdContext = createContext();

// Context에서 사용 할 값을 지정할 땐 Provider 컴포넌트를 렌더링하고 value 설정. 그리고 props로 받아온 children 값을 그 내부에 렌더링!
export function TodoProvider({ children }) {
  // useReducer는 'react'에서 import 해옴
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5); // useRef는 임포트해옴

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// 하단 3개의 커스텀 hook을 사용하려면 해당 컴포넌트가 TodoProvider 컴포넌트 내부에 렌더링되어 있어야함.
// 만약 그렇지 않다면 error 발생시키도록 처리해줘야 후에 있을 불상사를 방지 할 수 있음.

export function useTodoState() {
  // useContext는 리액트에서 임포트해옴
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Error: Cannot find TodoProvider!");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Error: Cannot find TodoProvider!");
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Error: Cannot find TodoProvider!");
  }
  return context;
}

/*
    useTodoState나 useTodoDispatch 같은 custom hook이 없을 땐 
    다른 컴포넌트에서 state나 dispatch를 사용하고 싶을 땐 하단과 같이 할 수 있음. 
    
    import React, { useContext } from 'react';
    import { TodoStateContext, TodoDispatchContext } from '../TodoContext';
    
    function Sample() {
        const state = useContext(TodoStateContext);
        const dispatch = useContext(TodoDispatchContext);
        return <div>Sample</div>;
    }
   
    useTodoState나 useTodoDispatch 같은 custom hook을 만들었다면, 하단과 같이 할 수 있음. 

    import React from 'react';
    import { useTodoState, useTodoDispatch } from '../TodoContext';

    function Sample() {
        const state = useTodoState();
        const dispatch = useTodoDispatch();
        return <div>Sample</div>;
    }

    정답은 없고, 사용성과 취향의 차이이다!
*/

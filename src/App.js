import React from "react";
// routes들을 정의하고 그룹하게 도와주는 애들.
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contacts/Contact";
import Todo from "./components/Todos/Todo";
import About from "./components/Abouts/About";

import "./App.css";

// 글로벌 스타일로 페이지 전체 설정 가능
const GlobalStyle = createGlobalStyle`
  body{ 
    background: #f1f1f1;  // #e6e6fa(연보라 eaeaf6); fff1f1(연핑크)}
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  };  
`;

function App() {
  return (
    // 다만 이렇게 Routes 설정 해줘도 NavBar에서 React Router에서 지원해주는 link component 대신 <a> 태그 같은거 쓰면 여전히 페이지가 통째로 리프레쉬됨.
    <>
      <NavBar />
      <div className="container">
        <Routes>
          {/*<Route path="/" element={<Home />} />    참고) 아직 Home 띄우는 곳 없음!!*/}
          <Route path="/" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/colors" element={<Contact />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <GlobalStyle />
    </>
  );
  //return <Contact />;

  // 하단처럼 switch를 설정한 routing도 가능하긴 하지만, 웬만하면 react route를 사용하자!
  /*
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/contacts":
      component = <Contact />;
      break;
    case "/about":
      component = <About />;
      break;

    // no default
  }
  */
}

export default App;

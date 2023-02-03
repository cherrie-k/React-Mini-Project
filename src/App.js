import React from "react";
// routes들을 정의하고 그룹하게 도와주는 애들.
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contacts/Contact";
import Todo from "./components/Todos/Todo";
import About from "./components/About";

//import "./App.css";

// 글로벌 스타일로 페이지 전체 설정 가능
const GlobalStyle = createGlobalStyle`
  body{ background: skyblue;}
`;

function App() {
  return (
    // 다만 이렇게 Routes 설정 해줘도 NavBar에서 React Router에서 지원해주는 link component 대신 <a> 태그 같은거 쓰면 여전히 페이지가 통째로 리프레쉬됨.
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
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

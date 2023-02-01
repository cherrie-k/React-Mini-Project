import React from "react";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

//import "./App.css";

function App() {
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
  return (
    <>
      <NavBar />
      <div className="container">{component}</div>
    </>
  );
  //return <Contact />;
}

export default App;

import { createGlobalStyle } from "styled-components";
import ContentBox from "./ContentBox";

const GlobalStyle = createGlobalStyle`
  body{ 
    background-image: url("img/sit-pic.jpg");
    // background-image: url("img/sky4.jpg");

    background-size: cover;
  }   
`;

export default function About() {
  return (
    <>
      <GlobalStyle />
      <ContentBox />
    </>
  );
}

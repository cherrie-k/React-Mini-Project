import React from "react";
import styled from "styled-components";
import HelloWorld from "./HelloWorld";

const ContentBoxBlock = styled.div`
  display: grid;
  min-width: 900px;
  justify-content: center;
  grid-template-rows: 30% 70%;
  grid-template-columns: 40% 60%;
  grid-template-areas:
    "box1 box2"
    "box1 box3";

  gap: 1vw;
  width: 70%;
  margin: 10px auto;
  margin-top: 32px;
  padding: 60px 70px;
  background-color: rgba(255, 255, 255, 0.85);

  #box1 {
    grid-area: box1;

    display: flex;
    justify-content: end;
    align-items: center;
  }

  #my-pic {
    min-width: 300px;
    min-height: 500px;
    max-width: min-content;
    max-height: min-content;
    width: fit-content;
  }

  #box2 {
    margin-left: 6px;
    grid-area: box2;
  }
  #box3 {
    margin-left: 30px;
    grid-area: box3;
    color: #303232;
  }
`;

const TextBlock = styled.div`
  .intro {
    font-size: 45px;
    font-weight: 600;
  }
  .p1 {
    color: #1164b4;
  }
  .p2 {
  }
`;

function ContentBox() {
  return (
    <ContentBoxBlock>
      <div id="box1">
        <img id="my-pic" alt="my_picture" src="img/sit-pic.jpg" width={"50%"} />
      </div>
      <div id="box2">
        <HelloWorld />
      </div>
      <TextBlock id="box3">
        <div className="intro p1">&infin;</div>
        <div className="intro p1">하는 </div>
        <div className="intro">개발자, </div>
        <div className="intro p2">김채리입니다</div>
      </TextBlock>
    </ContentBoxBlock>
  );
}

export default ContentBox;

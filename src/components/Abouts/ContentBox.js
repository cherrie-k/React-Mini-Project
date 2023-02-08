import React from "react";
import styled from "styled-components";
import HelloWorld from "./HelloWorld";
import { IoInfinite } from "react-icons/io5";

const ContentBoxBlock = styled.div`
  // grid로 하려다가 flex로 바꿈

  display: flex;
  align-items: center;

  min-width: 900px;
  width: 70%;
  height: 100%;
  min-width: 800px;
  margin: 50px auto;
  padding: 60px 70px;

  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 8px;
  box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.06);

  #my-pic {
    min-width: 350px;
    max-width: 100%;
    width: fit-content;
    opacity: 85%;
    border-radius: 6px;
  }

  #right-box {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
  }
`;

const TextBlock = styled.div`
  #infi {
    align-self: center;
    font-size: 50px;
  }

  .line-1 {
    margin-left: 3px;
    font-size: 40px;
    color: #5270a7; //#1164b4;
    #roqkfwk {
      margin-left: 12px;
      font-weight: 600;
    }
  }

  .line-2 {
    font-size: 46px;
    color: #293f47;
    #rlacofl {
      font-weight: 600;
    }
  }

  /*
  // 글자 배치 다른 버젼.. 고민..
  .intro {
    font-size: 35px;
    font-weight: 500;
    padding-left: 15px;
  }

  .p1 {
    color: #1164b4;
  }
  .p2 {
  }
  */
`;

function ContentBox() {
  return (
    <ContentBoxBlock>
      <img id="my-pic" alt="my_picture" src="img/sit-pic.jpg" width={"50%"} />
      <div id="right-box">
        <HelloWorld />
        <TextBlock>
          <div className="line-1" style={{ display: "flex" }}>
            <IoInfinite id="infi" />
            <div id="gksms"> 한</div>
            <div float="left" id="roqkfwk">
              개발자,
            </div>
          </div>
          <div className="line-2" style={{ display: "flex" }}>
            <div id="rlacofl">김채리</div>
            <div id="dlqslek">입니다</div>
          </div>
        </TextBlock>
      </div>
    </ContentBoxBlock>
    /*
     // 글자 배치 다른 버젼.. 고민..
    <ContentBoxBlock>
      <img id="my-pic" alt="my_picture" src="img/sit-pic.jpg" width={"50%"} />
      <div id="right-box">
        <HelloWorld />
        <TextBlock id="box3">
          <div className="intro p1">
            <IoInfinite id="infi" />
          </div>
          <div className="intro p1">하는 </div>
          <div className="intro">개발자, </div>
          <div className="intro p2">김채리입니다</div>
        </TextBlock>
      </div>
    </ContentBoxBlock>
    */
  );
}

export default ContentBox;

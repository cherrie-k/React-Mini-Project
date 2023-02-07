// Contacts의 레이아웃을 설정하는 컴포넌트

import React from "react";
import styled from "styled-components";

const ContactBodyBlock = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  margin-top: 50px;

  #project-title {
    font-size: 40px;
    margin-left: 12%;
    //margin-right: 30%;
    margin-bottom: 15px;
    direction: ltr;
    min-width: 430px;

    font-family: "Lato", sans-serif;
    font-weight: bold;
  }

  #clear-local {
    font-size: 15px;
    margin-top: 15px;
    align-self: center;
    padding-left: 350px;
    min-width: 700px;
    direction: rtl;
  }
`;

const ContactTemplateBlock = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: stretch;

  min-width: 500px;
  width: 70%;
  height: 31rem; /*height 수정 필요*/

  border-radius: 24px; // 둥근 네모로 만들어줌. 얘랑 ContactShow랑 ContactCreate border radius 맞춰줘야 함!
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.05); // 이거 0.1 대신 0.04정도로도 바꿔보기

  margin: 0 auto; // auto를 통해 페이지 중앙에 나타나게 됨
`;

function ContactTemplate({ children }) {
  return (
    <div>
      <ContactBodyBlock>
        <div id="project-title">Cherrie's Color Dictionary</div>
        <ContactTemplateBlock>{children}</ContactTemplateBlock>
        <div id="clear-local">
          To go back to default state, press F12 and type in{" "}
          <code>localStorage.clear();</code> in console
        </div>
      </ContactBodyBlock>
    </div>
  );
}

export default ContactTemplate;

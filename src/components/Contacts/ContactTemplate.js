// Contacts의 레이아웃을 설정하는 컴포넌트

import React from "react";
import styled from "styled-components";

const ContactTemplateBlock = styled.div`
  width: 70%;
  height: 500px; /*height 좀 다름*/

  position: relative;
  background: white;
  border-radius: 24px; // 둥근 네모로 만들어줌. 얘랑 ContactShow랑 ContactCreate border radius 맞춰줘야 함!
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1); // 이거 0.1 대신 0.04정도로도 바꿔보기

  margin: 0 auto; // auto를 통해 페이지 중앙에 나타나게 됨
  margin-top: 90px;
  margin-bottom: 30px;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  background: pink;
`;

function ContactTemplate({ children }) {
  return (
    <div>
      <div>Cherrie's Color Dictionary</div>
      <div>
        <ContactTemplateBlock>{children}</ContactTemplateBlock>
      </div>
      <div>
        To go back to default state, press F12 and type in{" "}
        <samp>localStorage.clear();</samp> in console
      </div>
    </div>
  );
}

export default ContactTemplate;

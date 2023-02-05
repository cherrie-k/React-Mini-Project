// Contacts의 레이아웃을 설정하는 컴포넌트

import React from "react";
import styled from "styled-components";

const ContactTemplateBlock = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: stretch;

  min-width: 500px;
  width: 70%;
  height: 30rem; /*height 좀 다름*/

  border-radius: 24px; // 둥근 네모로 만들어줌. 얘랑 ContactShow랑 ContactCreate border radius 맞춰줘야 함!
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.05); // 이거 0.1 대신 0.04정도로도 바꿔보기

  margin: 0 auto; // auto를 통해 페이지 중앙에 나타나게 됨
  margin-top: 60px;
  margin-bottom: 30px;
`;

const OutsideTextBlock = styled.div`
  color: gray;
`;

function ContactTemplate({ children }) {
  return (
    <div>
      <OutsideTextBlock>
        <h2>Cherrie's Color Dictionary</h2>
      </OutsideTextBlock>
      <ContactTemplateBlock>{children}</ContactTemplateBlock>
      <OutsideTextBlock>
        <h3>
          To go back to default state, press F12 and type in{" "}
          <samp>localStorage.clear();</samp> in console
        </h3>
      </OutsideTextBlock>
    </div>
  );
}

export default ContactTemplate;

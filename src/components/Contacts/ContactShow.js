import React from "react"; //  useState 따로 import 해줘야함~!
import styled from "styled-components";

const ContactShowPositioner = styled.div`
  display: flex;
`;

const ContactShowBlock = styled.div`
  background: white;

  padding: 30px;

  display: flex;
  flex-direction: column;

  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  overflow-x: auto; // 스크롤바 보여줄지 말지 자동으로 결정.
  overflow-y: auto; // 스크롤바 보여줄지 말지 자동으로 결정. 내부 컨텐츠 크기가 주어진 공간을 넘어가는 경우에만 스크롤바 생김.
`;

function ContactShow({ children }) {
  return (
    <ContactShowPositioner>
      <ContactShowBlock>{children}</ContactShowBlock>
    </ContactShowPositioner>
  );
}

export default ContactShow;

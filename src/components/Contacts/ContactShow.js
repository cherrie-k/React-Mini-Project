import React from "react"; //  useState 따로 import 해줘야함~!
import styled from "styled-components";

const ContactShowPositioner = styled.div`
  display: flex;
  border-right: solid 1.5px gainsboro;
`;

const ContactShowBlock = styled.div`
  background: #fff; //white
  padding: 30px;

  width: 250px;
  min-width: 150px;
  max-width: 280px;

  display: flex;
  flex-direction: column;

  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  overflow-x: auto; // 스크롤바 보여줄지 말지 자동으로 결정.
  overflow-y: auto; // 스크롤바 보여줄지 말지 자동으로 결정. 내부 컨텐츠 크기가 주어진 공간을 넘어가는 경우에만 스크롤바 생김.

  .search-bar {
    align-self: center;

    padding: 7px 1px 7px 15px;
    margin-top: 8px;
    margin-bottom: 13px;
    border-radius: 20px;
    border: 2px solid #c688fc; // 보라
    width: 100%;
    font-size: 15px;
  }
`;

function ContactShow({ children }) {
  return (
    <ContactShowPositioner>
      <ContactShowBlock>{children}</ContactShowBlock>
    </ContactShowPositioner>
  );
}

export default ContactShow;

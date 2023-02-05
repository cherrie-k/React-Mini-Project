// 개별 Contact Info에 관한것

import React from "react";
import styled from "styled-components";
import { ColorChipRound } from "./ColorChip";

const InfoBlock = styled.div`
  // Contact Show 안에 있는 개별 색 이름에 적용
  margin-left: 10px;
`;

class ContactInfo extends React.Component {
  render() {
    return (
      <div>
        <ColorChipRound style={{ background: "#" + this.props.contact.phone }}>
          <div
            className="round"
            style={{ background: "#" + this.props.contact.phone }}
          ></div>
        </ColorChipRound>
        <InfoBlock>
          <div onClick={this.props.onClick}>{this.props.contact.name}</div>
        </InfoBlock>
      </div>
    );
  }
}

export default ContactInfo;

// 어떤 name을 선택 했을 때, 그 name에 해당하는 정보가 나타나게 함

import { Component } from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const ContactDetailsPositioner = styled.div`
  background: #f0f2f5; // 아주연한회색
  height: 100%;
  flex-grow: 1; // 왜안됨?ㅠㅠ
`;

const ContactDetailsBlock = styled.div`
  padding: 20px;
  overflow-y: auto; // 스크롤바 보여줄지 말지 자동으로 결정. 내부 컨텐츠 크기가 주어진 공간을 넘어가는 경우에만 스크롤바 생김.
`;

const ColorChipBlock = styled.div`
  width: 50%;
  margin: 9px auto; // 중앙에 놔줌

  .color-box {
    // background: skyblue;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 70px;
  }

  .color-name {
    background: #fff;
    height: 40px;
    position: relative;
    padding: 5px 20px;

    font-size: 12px;
    font-weight: medium;
    text-transform: uppercase;
    color: #444545;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    -webkit-box-shadow: 0px 3px 0px 0px rgba(226, 228, 231, 0.75);
    -moz-box-shadow: 0px 3px 0px 0px rgba(226, 228, 231, 0.75);
    box-shadow: 0px 3px 0px 0px rgba(226, 228, 231, 0.75);
  }

  // hover시 위치 올리기
  position: relative;
  top: 0;
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    top: -4px;
    box-shadow: 0 8px 20px rgba(gray, 0.12);
  }
`;

class ContactDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      name: "",
      phone: "",
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    //this.handleClear = this.handleClear.bind(this); (추후 시간 나면 구현 )
  }

  handleToggle() {
    // edit을 눌렀을 때 기존 값이 뜨고 그 값을 수정하도록 하는 코드.
    // 이걸 안해주면 edit 눌렀을 때 그냥 비어있는 input 박스만 뜸

    if (!this.state.isEdit) {
      // 기존 값이 false 일 때 edit 모드로 됨. 즉 이 코드는 edit 모드로 들어가면~ 인거지
      this.setState({
        name: this.props.contact.name,
        phone: this.props.contact.phone,
      });
    } else {
      this.handleEdit();
    }

    this.setState({
      // 주의: setState는 비동기라 setState가 끝나기 전에 해당 코드가 실행됨.
      isEdit: !this.state.isEdit,
    });
  }

  handleChange(e) {
    // 비어있는 객체 만든다
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleEdit() {
    this.props.onEdit(this.state.name, this.state.phone);
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.handleToggle();
    }
  }

  handleClear;

  render() {
    const details = (
      <div>
        <p>Name: {this.props.contact.name}</p>
        <p>Hex Code: #{this.props.contact.phone}</p>
        <ColorChipBlock>
          <div
            className="color-box"
            style={{ background: "#" + this.props.contact.phone }}
          ></div>
          <div className="color-name">{this.props.contact.name}</div>
        </ColorChipBlock>
      </div>
    );

    const edit = (
      <div>
        <p>
          <input
            required
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            required
            type="text"
            name="phone"
            placeholder="phone number"
            maxLength="6"
            value={this.state.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </p>
      </div>
    );

    //view가 false면 details를 반환
    const view = this.state.isEdit ? edit : details;

    const blank = <div>Not Selected</div>;

    return (
      <ContactDetailsPositioner>
        <ContactDetailsBlock>
          <h2>Details</h2>
          {this.props.isSelected ? view : blank}
          <p>
            <button onClick={this.handleToggle}>
              {this.state.isEdit ? "OK" : "Edit"}
            </button>
            <button onClick={this.props.onRemove}>Remove</button>
          </p>
        </ContactDetailsBlock>
      </ContactDetailsPositioner>
    );
  }
}

ContactDetails.defaultProps = {
  contact: {
    name: "",
    phone: "",
  },

  // 지정되지 않았을 때 에러 발생시킴
  onRemove: () => {
    console.log("onRemove not defined");
  },

  onEdit: () => {
    console.log("onRemove not defined");
  },
};

ContactDetails.propTypes = {
  contact: Proptypes.object,
  onRemove: Proptypes.func,
  onEdit: Proptypes.func,
};

export default ContactDetails;
// 얘는 Contact.js에서 불러온다

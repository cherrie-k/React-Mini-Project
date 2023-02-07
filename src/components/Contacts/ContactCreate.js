import React, { Component } from "react";
import styled from "styled-components";
import { IoColorPalette } from "react-icons/io5";

const ContactCreatePositioner = styled.div`
  display: flex;
  height: 100%;
`;

const ContactCreateBlock = styled.div`
  background: #fff; //white

  display: flex;
  flex-direction: column;

  padding: 26px;

  line-height: 0.8em;

  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;

  h3 {
    color: #da7eff;
  }

  .pulse-icon {
    display: inline-block;

    border-radius: 50%;
    background: rgba(232, 173, 255, 0.8);
    box-shadow: 0 0 0 rgba(232, 173, 255, 0.4);

    animation: pulseIcon 1.7s infinite;
  }

  @-webkit-keyframes pulseIcon {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(232, 173, 255, 0.4);
    }
    70% {
      -webkit-box-shadow: 0 0 0 26px rgba(232, 173, 255, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 0 0 rgba(28, 180, 105, 0);
    }
  }

  @keyframes pulseIcon {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(232, 173, 255, 0.4);
      box-shadow: 0 0 0 0 rgba(232, 173, 255, 0.4);
    }
    70% {
      -moz-box-shadow: 0 0 0 26px rgba(232, 173, 255, 0);
      box-shadow: 0 0 0 26px rgba(232, 173, 255, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(232, 173, 255, 0);
      box-shadow: 0 0 0 0 rgba(232, 173, 255, 0);
    }
  }

  .input-box {
    margin-bottom: 15px;
    padding: 8px;
    font-size: 14px;
    border: solid 1px lightgray;
    border-radius: 6px;
  }

  #create-button {
    margin: 5px 30px;
    padding: 10px 10px;
    background: #fff; //white

    border: 2px solid #d499ff;
    border-radius: 10px;

    cursor: pointer;
    font-size: 16px;
    transition: 0.25s;

    &:hover {
      box-shadow: inset 0 -3.25em 0 0 #d499ff;
      color: #fff;
    }
    &:focus {
      // 클릭시
      box-shadow: inset 0 -3.25em 0 0 pink;
      border-color: #fff;
      color: #fff;
    }
  }
`;

class ContactCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      desc: "",
    };

    // 임의 메소드를 만들었으니 바인딩 해줘야함!! 그리고 이걸 onChange 이벤트에 연결.
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // 여러개의 input을 처리하는 handleChange
  handleChange(e) {
    // 비어있는 객체 만든다
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  // Contact에서 onCreate라는 props 받아오기
  handleClick() {
    const contact = {
      name: this.state.name,
      phone: this.state.phone,
      desc: this.state.desc,
    };

    this.props.onCreate(contact); //onCreate에게 contact 정보 전달
    // onCreate한테 넘겨준 다음엔 정보

    this.setState({
      name: "",
      phone: "",
      desc: "", // 새로만듦
    });

    // 얠 통해서 인풋에 포커스 둠.
    this.nameInput.focus();
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <ContactCreatePositioner>
          <ContactCreateBlock>
            <h3 className="pulse-text">
              Add a New Color <IoColorPalette className="pulse-icon" />
            </h3>
            <p>
              {/*밑에서 ref가 있는 코드 덕분에.. 정보 입력 후 제출이 끝나도 마우스 포인터표시? 포커스가 여전히 input 박스 안에 있을 수 있다. \
            즉, 데이터 추가 후 특정 인풋에 focus를 줄 수 있다.  
          */}
              <div>
                <input
                  className="input-box"
                  required
                  type="text"
                  name="name"
                  placeholder="name of color"
                  value={this.state.name}
                  onChange={this.handleChange}
                  ref={(ref) => {
                    this.nameInput = ref;
                  }}
                />
              </div>
              <div>
                <input
                  className="input-box"
                  required
                  type="text"
                  name="phone"
                  placeholder="hex of color (e.g. ff90a2)"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  maxLength="6"
                  onKeyPress={this.handleKeyPress}
                />
              </div>
              <div>
                <input
                  className="input-box"
                  type="text"
                  name="desc"
                  placeholder="describe more (optional)"
                  value={this.state.desc}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                />
              </div>
            </p>
            <button id="create-button" onClick={this.handleClick}>
              Create
            </button>
          </ContactCreateBlock>
        </ContactCreatePositioner>
      </div>
    );
  }
}

// props를 받았으니 props type이랑 default props를 설정해주자!
/*ContactCreate.propTypes = {
  onCreate: PropTypes.func,
};*/
ContactCreate.defaultProps = {
  onCreate: () => {
    console.error("onCreate not defined");
  },
};

export default ContactCreate;

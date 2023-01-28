import React, { Component } from "react";
//import PropTypes from "prop-types";

class ContactCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
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
    const contact = { name: this.state.name, phone: this.state.phone };

    this.props.onCreate(contact); //onCreate에게 contact 정보 전달
    // onCreate한테 넘겨준 다음엔 정보

    this.setState({
      name: "",
      phone: "",
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
        <h2>Create Contact</h2>
        <p>
          {/*밑에서 ref가 있는 코드 덕분에.. 정보 입력 후 제출이 끝나도 마우스 포인터표시? 포커스가 여전히 input 박스 안에 있을 수 있다. \
            즉, 데이터 추가 후 특정 인풋에 focus를 줄 수 있다.  
          */}
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            ref={(ref) => {
              this.nameInput = ref;
            }}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone number"
            value={this.state.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </p>
        <button onClick={this.handleClick}>Create</button>
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

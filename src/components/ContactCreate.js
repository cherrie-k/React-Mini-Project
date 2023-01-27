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
  }

  render() {
    return (
      <div>
        <h2>Create Contacts</h2>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone number"
            value={this.state.phone}
            onChange={this.handleChange}
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

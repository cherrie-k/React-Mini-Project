// 어떤 name을 선택 했을 때, 그 name에 해당하는 정보가 나타나게 함

import { Component } from "react";

class ContactDetails extends Component {
  render() {
    const details = (
      <div>
        <p>Name: {this.props.contact.name}</p>
        <p>Number: {this.props.contact.phone}</p>
      </div>
    );
    const black = <div>Not Selected</div>;

    return (
      <div>
        <h2>Details</h2>
        {this.props.isSelected ? details : black}
        <button onClick={this.props.onRemove}>Remove</button>
      </div>
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
};

export default ContactDetails;

// 얘는 Contact.js에서 불러온다

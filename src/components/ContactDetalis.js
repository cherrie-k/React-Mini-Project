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
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  contact: {
    name: "",
    phone: "",
  },
};

export default ContactDetails;

// 얘는 Contact.js에서 불러온다

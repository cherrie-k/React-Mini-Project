// 개별 Contact Info에 관한것

import React from "react";

export default class ContactInfo extends React.Component {
  render() {
    return <div onClick={this.props.onClick}>{this.props.contact.name}</div>;
  }
}

import React from "react";

export default class ContactInfo extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        {this.props.contact.name}
        {"\u2B50"}
      </div>
    );
  }
}

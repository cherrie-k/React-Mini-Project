import React from "react";
import ContactInfo from "./ContactInfo";
import ContactDetails from "./ContactDetalis";
import ContactCreate from "./ContactCreate";

import update from "react-addons-update";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 선택(클릭)이 안됐으면 selectedKey가 -1, 선택 됐으면 -1아님
      selectedKey: -1,
      keyword: "",
      contactData: [
        {
          name: "Cherrie",
          phone: "010-0000-0001",
        },
        {
          name: "Berry",
          phone: "010-0000-0002",
        },
        {
          name: "Harry",
          phone: "010-0000-0003",
        },
        {
          name: "Garry",
          phone: "010-0000-0004",
        },
        {
          name: "Kerry",
          phone: "010-0000-0005",
        },
      ],
    };
    // 임의 메소드 만들 때 바인딩하기
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // 데이터 추가, 삭제, 수정 메소드
    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  // input 란에 값이 들어 왔을 때 그걸 어떻게 처리해줄지 설정
  handleChange(e) {
    this.setState({
      keyword: e.target.value,
    });
  }
  handleClick(key) {
    this.setState({
      selectedKey: key,
    });
    console.log(key, "is selected");
  }
  handleCreate(contact) {
    this.setState({
      contactData: update(this.state.contactData, { $push: [contact] }),
    });
  }
  handleRemove() {
    this.setState({
      contactData: update(this.state.contactData, {
        $splice: [[this.state.selectedKey, 1]],
      }),
      selectedKey: -1, // selectedKey 무효화
    });
  }
  handleEdit(name, phone) {
    this.setState({
      contactData: update(this.state.contactData, {
        [this.state.selectedKey]: {
          // this.state.selectedKey번째 아이템 수정
          name: { $set: name },
          phone: { $set: phone },
        },
      }),
    });
  }

  render() {
    const mapToComponents = (data) => {
      data.sort((a, b) => {
        return a.name > b.name;
      });
      // contact를 parameter로 갖고, name에 search에 있는 내용이 포함돼 있을 때만 True 반환하도록 함.
      data = data.filter((contact) => {
        return (
          contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) >
          -1
        );
      });
      return data.map((contact, i) => {
        // 컴포넌트에선 onClick 적용 안됨에 주의!
        return (
          <ContactInfo
            contact={contact}
            key={i}
            onClick={() => this.handleClick(i)}
          />
        );
      });
    };
    return (
      <div>
        <h1>Contacts</h1>
        <input
          name="keyword"
          placeholder="Search for a keyword"
          value={this.state.keyword}
          // onChage일 때 this.handleChange 실행
          onChange={this.handleChange}
        />
        <div>{mapToComponents(this.state.contactData)}</div>
        <ContactDetails
          isSelected={this.state.selectedKey !== -1}
          contact={this.state.contactData[this.state.selectedKey]}
        />
        <ContactCreate onCreate={this.handleCreate} />
      </div>
    );
  }
}

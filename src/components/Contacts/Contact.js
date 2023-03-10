import React from "react";
import ContactTemplate from "./ContactTemplate";
import ContactInfo from "./ContactInfo";
import ContactDetails from "./ContactDetalis";
import ContactCreate from "./ContactCreate";
import { ColorChipItem } from "./ColorChip";

import update from "react-addons-update";
import ContactShow from "./ContactShow";
// 페이지별로 body color 다르게 해줌
import setBodyColor from "../../setBodyColor";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 선택(클릭)이 안됐으면 selectedKey가 -1, 선택 됐으면 -1아님
      selectedKey: -1,
      keyword: "",

      contactData: [
        {
          name: "Charming Cherry",
          phone: "ff90a2",
        },
        {
          name: "Quiet Kiwi",
          phone: "b8cfac",
          desc: "Did you know... There's another color with the code of #c0cfae with the same name!",
        },
        {
          name: "Florida Orange",
          phone: "ffaa00",
          desc: "This color is also called 'Flash of Orange' by California Paints and Dunn-Edwards!",
        },
        {
          name: "Blueberry Bush",
          phone: "4e72b2",
        },
        {
          name: "Banana Peel",
          phone: "ffe774",
          desc: "It was hard for me to decide whether to put 'Lemon Burst(#feee91)' or this. ",
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

  // 컴포넌트가 DOM 위에 마운트 되기 전에 실행되는 코드
  componentWillMount() {
    // 컴포넌트가 가장 처음 그리기 전에 contact data 값이 로컬스토리지 안에 존재한다면 setState를 통해 저장된 값을 불러오게 함.
    // 이거 지우려면 콘솔에 localStorage.clear(); 해주면 된다 !
    const contactData = localStorage.contactData;

    if (contactData) {
      this.setState({
        contactData: JSON.parse(contactData),
      });
    }
  }

  // 컴포넌트의 state가 실행될때마다 업데이트 되는 API
  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevState.contactData) !==
      JSON.stringify(this.state.contactData)
    ) {
      localStorage.contactData = JSON.stringify(this.state.contactData);
    }
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
    //console.log(key, "is selected");
  }

  handleCreate(contact) {
    this.setState({
      contactData: update(this.state.contactData, { $push: [contact] }),
    });
  }

  handleRemove() {
    // 키 선택 안했을 땐 remove 버튼 눌러도 remove 안되게 처리
    if (this.state.selectedKey < 0) {
      return;
    }

    this.setState({
      contactData: update(this.state.contactData, {
        $splice: [[this.state.selectedKey, 1]],
      }),
      selectedKey: -1, // selectedKey 무효화
    });
  }

  handleEdit(name, phone, desc) {
    this.setState({
      contactData: update(this.state.contactData, {
        [this.state.selectedKey]: {
          // this.state.selectedKey번째 아이템 수정
          name: { $set: name },
          phone: { $set: phone },
          desc: { $set: desc },
        },
      }),
    });
  }

  render() {
    setBodyColor({ color: "linear-gradient( #f1eef6 , white)" }); //#f1f1f1
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
          <div>
            <ColorChipItem>
              <ContactInfo
                contact={contact}
                key={i}
                onClick={() => this.handleClick(i)}
              />
            </ColorChipItem>
          </div>
        );
      });
    };

    return (
      <div>
        <ContactTemplate>
          <ContactShow>
            <input
              className="search-bar"
              name="keyword"
              placeholder="Search"
              value={this.state.keyword}
              // onChage일 때 this.handleChange 실행
              onChange={this.handleChange}
            />
            <div>{mapToComponents(this.state.contactData)}</div>
          </ContactShow>
          <ContactDetails
            isSelected={this.state.selectedKey !== -1}
            contact={this.state.contactData[this.state.selectedKey]}
            onRemove={this.handleRemove}
            onEdit={this.handleEdit}
          />
          <ContactCreate onCreate={this.handleCreate} />
        </ContactTemplate>
      </div>
    );
  }
}

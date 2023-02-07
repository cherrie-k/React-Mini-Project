import React from "react";
import ContentBox from "./ContentBox";

// 페이지별로 body color 다르게 해줌
// import setBodyImage from "../../setBodyImage";
import setBodyColor from "../../setBodyColor";

export default class About extends React.Component {
  render() {
    // setBodyImage({ image: `url("img/sit-pic.jpg")` });
    setBodyColor({ color: "linear-gradient(#9fd7e9, #fcd7d6)" }); //skyblue, pink
    return (
      <>
        <ContentBox />
      </>
    );
  }
}

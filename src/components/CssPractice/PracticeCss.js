import React from "react";

// 페이지별로 body color 다르게 해줌
// import setBodyImage from "../../setBodyImage";
import setBodyColor from "../../setBodyColor";

export default class PracticeCss extends React.Component {
  render() {
    // setBodyImage({ image: `url("img/sit-pic.jpg")` });
    setBodyColor({ color: "linear-gradient(pink , black)" }); //skyblue, pink
    return (
      <>
        <h1>Let's Practice Css!</h1>
      </>
    );
  }
}

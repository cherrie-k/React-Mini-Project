/* 페이지별로 body color 다르게 설정해주는 함수.
SPA에서 body element는 하나뿐임. 
styled-components에서 제공해주는 global style 어쩌구로 body 색 지정 가능하긴 하는데,
막상 사이트 deploy 해보면 원하는대로 동적으로 동작하지 않는 경우가 많음. 
그래서 이 방법으로 페이지마다 body color을 바꿔줌!

참고로 root는 index.css에 들어있음!

참고링크: https://dev.to/murtuzaalisurti/setting-background-color-of-body-dynamically-in-react-38k5
*/

export default function setBodyColor({ color }) {
  document.documentElement.style.setProperty("--bodyColor", color);
}

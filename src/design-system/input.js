// import React from "react";
import styled from "styled-components";

// 스타일드 컴포넌ㅇ트 사용 방법
// styled.htmlElement
// 이렇게 만든것 만으로도 컴포넌트가 생성된 것이당.
// 그냥 styled component만 사용할거면 1번재 줄의 ㄹㅣ액트 임포트도 안해도된다.

const Input = styled.input`
  width: 100%;
  padding: 10px;
`;

// 1 : class
// class Input extends React.Component {
//   render() {
//     return <input />;
//   }
// }

// 2 : pure conponent
// class Input extends React.PureComponent{
//     render(){
//         return <input />;
//     }
// }

// 3. function component
// function Input() {
//   return <input />;
// }

export default Input;

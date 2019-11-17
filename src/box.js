import React from "react";
import Input from "./input";
import styled, { css } from "styled-components";

const BaseBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #000;

  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
`;

class Box extends React.PureComponent {
  state = {
    title: "",
    name: "",
    color: "gold"
  };

  handleChange = ({ target: { name, value } }) => {
    // ES6 해체 할당 : event 객체를 한번 풀어냈다.
    // e.target.name, e.target.value  => 해체할당하기.
    // ---
    // prototype
    // const handleChange~ 를 하면 프로토타입이 아니당.
    console.log("target", name, value);
    this.setState({
      [name]: value // 그 인풋의 name을 value로 바꾼다.
    });
  };

  render() {
    return (
      <div>
        <Input name="title" onChange={this.handleChange} />
        <Input name="name" onChange={this.handleChange} />
        <Input name="color" onChange={this.handleChange} />
        타이틀
        <div>{this.state.title}</div>
        이름
        <div>{this.state.name}</div>
        <BaseBox color={this.state.color}>박스박스</BaseBox>
      </div>
    );
  }
}

export default Box;

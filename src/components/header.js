import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../design-system/container";

const BaseLink = styled(Link)`
  font-size: 14px;
  color: pink;
  margin-right: 20px;
`;
function Header() {
  return (
    <Container>
      <BaseLink to="/">메잉</BaseLink>
      <BaseLink to="/write">글작성</BaseLink>
      <BaseLink to="/shop">가게</BaseLink>
    </Container>
  );
}

export default Header;

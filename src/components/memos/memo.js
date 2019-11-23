import React from "react";
import styled from "styled-components";
import Container from "../../design-system/container";
import Text from "../../design-system/text";
import { Link } from "react-router-dom";

function Memo({ source: { id, title } }) {
  return (
    <Container padding={{ top: 20, bottom: 20 }}>
      <Link to={`/detail/${id}`}>
        <Text>{id}</Text>
        <Text>{title}</Text>
      </Link>
      <button>삭제</button>
    </Container>
  );
}
export default Memo;

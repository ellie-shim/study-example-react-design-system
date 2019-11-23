import React, { useState } from "react";
import styled from "styled-components";
import Container from "../design-system/container";
import Input from "../design-system/input";
import Text from "../design-system/text";
import ReactMarkdown from "react-markdown";

const Textarea = styled.textarea``;

const Button = styled.button``;

function WritePage() {
  const [memo, setMemo] = useState({
    title: "",
    content: ""
  });

  const handleMemo = ({ target: { name, value } }) => {
    setMemo({
      ...memo,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8000/memo", {
      method: "POST",
      body: JSON.stringify(memo),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      window.alert("작성완료");
      //after
    }
  };
  const { title, content } = memo;

  return (
    <Container>
      <Container>
        <Text>타이틀</Text>
        <Input name="title" value={title} onChange={handleMemo}></Input>
        <Text>컨텐츠</Text>
        <Textarea
          name="content"
          value={content}
          onChange={handleMemo}
        ></Textarea>
        <Button onClick={handleSubmit}>작성</Button>
      </Container>
      <Container>
        <Text>타이틀</Text>
        <Text>{title}</Text>
        <Text>본문</Text>
        <ReactMarkdown source={content}></ReactMarkdown>
      </Container>
    </Container>
  );
}

export default WritePage;

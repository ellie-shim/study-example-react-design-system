import React, { useEffect, useState } from "react";

import Container from "../design-system/container";
import ReactMarkdown from "react-markdown";

function DetailPage({
  match: {
    params: { id }
  }
}) {
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    async function fetchMemo() {
      const res = await fetch(`http://localhost:8000/memo/${id}`);

      if (res.ok) {
        setMemo(await res.json());
      }
    }
    fetchMemo();
  }, [id]);

  const { title, content } = memo || {};
  return (
    memo && (
      <Container>
        {id} {title}
        <ReactMarkdown source={content}></ReactMarkdown>
      </Container>
    )
  );
}

export default DetailPage;

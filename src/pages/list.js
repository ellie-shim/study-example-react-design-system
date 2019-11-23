import React, { useState, useEffect } from "react";

import Container from "../design-system/container";
import Memo from "../components/memos/memo";

function ListPage() {
  const [memos, setMemos] = useState(null);
  useEffect(() => {
    async function fetchMemos() {
      const response = await fetch("http://localhost:8000/memo");

      if (response.ok) {
        // console.log(await response.json());
        setMemos(await response.json());
      }
    }
    fetchMemos();
  }, []); // dependency를 빈배열로 넣으면 처음에 한번만 돈다. fetch를 한번만 해주면 되니까 빈배열로 설정한댜

  // TODO : 글 삭제(DELETE), 글 수정(PUT), 삭제 후 refresh
  console.log("memos", memos);

  return (
    <Container>
      {memos && (
        <Container>
          {memos.map(memo => (
            <Memo key={memo.id} source={memo}></Memo>
          ))}
        </Container>
      )}
    </Container>
  );
}

export default ListPage;

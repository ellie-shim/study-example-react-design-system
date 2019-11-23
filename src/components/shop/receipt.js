import React from "react";
import Container from "../../design-system/container";
import Text from "../../design-system/text";

function Receipt({ receipt, onRemoveReceipt }) {
  // props.receipt === {receipt}
  return (
    <Container>
      <Text size="massive" bold margin={{ top: 20 }}>
        영수증 <button onClick={() => onRemoveReceipt()}>전체삭제</button>
      </Text>
      {receipt.map(({ name, quantity, date }, idx) => (
        <Container key={idx}>
          <Text>{name}</Text>
          <Text>{quantity}</Text>
          <Text>{date.toString()}</Text>
          {/* TODO : 하나씩 삭제하는 버튼 만들어 보기. */}
        </Container>
      ))}
    </Container>
  );
}

export default Receipt;

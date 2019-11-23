import React from "react";
import Container from "../../design-system/container";
import Text from "../../design-system/text";

function Shop({ items, onChangeItem }) {
  return (
    <Container>
      <Text size="massive" margin={{ bottom: 20 }} bold>
        과일 가게
      </Text>
      {items.map(({ id, name, quantity }, idx) => {
        return (
          <Container key={idx}>
            <Text inlineBlock bold margin={{ right: 5 }}>
              {name}
            </Text>
            <Text inlineBlock margin={{ right: 5 }}>
              {quantity}
            </Text>
            <button
              onClick={e =>
                quantity > 0
                  ? onChangeItem(e, { id, name })
                  : window.alert("매진ㅆ")
              }
            >
              구매
            </button>
          </Container>
        );
      })}
    </Container>
  );
}

export default Shop;

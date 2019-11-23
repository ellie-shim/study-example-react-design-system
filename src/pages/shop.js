import React, { useState, useEffect } from "react";
import data from "../components/shop/data.json";
import Container from "../design-system/container";
import Shop from "../components/shop";
import Receipt from "../components/shop/receipt";

function ShopPage() {
  const [items, setItems] = useState([]); // items를 바꾸고 싶으면 setItems를 이용해야한다.
  const [receipt, setReceipt] = useState([]);

  useEffect(() => {
    const { items } = data;
    setItems(items);
  }, []);

  const handleChangeItem = (e, { id, name }) => {
    setReceipt([
      ...receipt,
      {
        id: Date.now(),
        name,
        date: new Date(),
        quantity: 1
      }
    ]);
    setItems(
      items.map(item => {
        return item.id === id ? { ...item, quantity: item.quantity - 1 } : item;
      })
    );
  };

  const handleRemoveReceipt = id => {
    if (id) {
      setReceipt(receipt.filter(item => item.id !== id));
      return;
    }
    setReceipt([]);
  };

  return (
    <Container>
      <Shop items={items} onChangeItem={handleChangeItem}></Shop>
      <Receipt
        receipt={receipt}
        onRemoveReceipt={handleRemoveReceipt}
      ></Receipt>
    </Container>
  );
}

export default ShopPage;

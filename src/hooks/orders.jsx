import { createContext, useContext, useState, useEffect } from "react";

const OrdersContext = createContext({});

function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersStorage = localStorage.getItem("@food_explorer:orders");

    ordersStorage ? setOrders(JSON.parse(ordersStorage)) : setOrders([]);
  }, []);

  function handleNewOrders(newOrder) {
    const orderIndex = orders.findIndex((order) => order.id === newOrder.id);

    if (orderIndex !== -1) {
      const updatedOrders = [...orders];
      updatedOrders[orderIndex] = newOrder;
      setOrders(updatedOrders);
      localStorage.setItem(
        "@food_explorer:orders",
        JSON.stringify(updatedOrders)
      );
    } else {
      const newOrders = [...orders, newOrder];
      setOrders(newOrders);
      localStorage.setItem("@food_explorer:orders", JSON.stringify(newOrders));
    }
  }

  function handleRemoveOrder(orderId) {
    const orderExists = orders.some((order) => order.id === orderId);

    if (orderExists) {
      const updatedOrders = orders.filter((order) => order.id !== orderId);

      setOrders(updatedOrders);

      localStorage.setItem(
        "@food_explorer:orders",
        JSON.stringify(updatedOrders)
      );
    }
  }

  return (
    <OrdersContext.Provider
      value={{
        handleNewOrders,
        handleRemoveOrder,
        orders: orders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

function useOrders() {
  const context = useContext(OrdersContext);

  return context;
}

export { OrdersProvider, useOrders };

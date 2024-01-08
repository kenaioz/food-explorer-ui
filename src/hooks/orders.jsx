import { createContext, useContext, useState, useEffect } from "react";

const OrdersContext = createContext({});

function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersStorage = localStorage.getItem("@food_explorer:orders");

    if (ordersStorage) {
      setOrders(JSON.parse(ordersStorage));
    }
  }, []);

  function handleOrders(newOrder) {
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

  return (
    <OrdersContext.Provider
      value={{
        handleOrders,
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

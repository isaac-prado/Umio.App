import { createContext, ReactNode, useState } from "react";
import React from "react";
import { Produto } from "../interface/Produto";

type Adicional = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
};

type OrderItem = {
  produto: Produto;
  quantidade: number;
  molhoSelecionado: string;
  adicionais: Adicional[];
  molhosExtra: Adicional[];
  comentarios: string;
  opcoesSelecionadas: { [key: string]: string };
};

type OrderContextType = {
  currentOrder: OrderItem | null;
  setCurrentOrder: (order: OrderItem | null) => void;
  updateCurrentOrder: (updates: Partial<OrderItem>) => void;
  addToCart: (item: OrderItem) => void;
  cartItems: OrderItem[];
  clearCart: () => void;
};

export const OrderContext = createContext<OrderContextType>(
  {} as OrderContextType,
);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentOrder, setCurrentOrder] = useState<OrderItem | null>(null);
  const [cartItems, setCartItems] = useState<OrderItem[]>([]);

  const updateCurrentOrder = (updates: Partial<OrderItem>) => {
    if (currentOrder) {
      setCurrentOrder({ ...currentOrder, ...updates });
    }
  };

  const addToCart = (item: OrderItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <OrderContext.Provider
      value={{
        currentOrder,
        setCurrentOrder,
        updateCurrentOrder,
        addToCart,
        cartItems,
        clearCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => React.useContext(OrderContext);

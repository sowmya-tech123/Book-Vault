import { createContext, useState } from "react";

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [count, setCount] = useState(0);

  const increaseNotification = () => {
    setCount((prev) => prev + 1);
  };

  const resetNotification = () => {
    setCount(0);
  };

  return (
    <NotificationContext.Provider
      value={{ count, increaseNotification, resetNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
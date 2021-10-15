import React, { FC, createContext, useContext } from "react";
import { notification } from "antd";

type MessageTypes = "info" | "error";

const initialValues = {
  showNotitication: (message: string, type: MessageTypes = "info") => {},
};

const NotificationContext = createContext(initialValues);

export const NotificationProvider: FC = ({ children }) => {
  const [api, holdContext] = notification.useNotification();

  const showNotitication = (
    message: string,
    type: MessageTypes = "info",
    duration: number = 5
  ) => {
    switch (type) {
      case "info":
        api.info({
          message,
          placement: "bottomRight",
          duration,
        });
        break;
      case "error":
        api.error({
          message,
          placement: "bottomRight",
          duration,
        });
        break;
    }
  };

  return (
    <NotificationContext.Provider value={{ showNotitication }}>
      {holdContext}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);

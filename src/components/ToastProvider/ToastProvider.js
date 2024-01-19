import React from "react";

export const ToastContext = React.createContext({});

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToastToShelf = (message, variant) => {
    const id = crypto.randomUUID();

    const toast = { id, message, variant };
    setToasts([...toasts, toast]);
  };

  const removeToastById = (id) => {
    setToasts((currentToasts) => {
      const indexToDelete = currentToasts.findIndex((toast) => toast.id === id);
      const beforeDelete = currentToasts.slice(0, indexToDelete);
      const afterDelete = currentToasts.slice(indexToDelete + 1);
      return [...beforeDelete, ...afterDelete];
    });
  };

  const clearToasts = () => setToasts([]);

  return (
    <ToastContext.Provider
      value={{ toasts, removeToastById, addToastToShelf, clearToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import { useEscapeKey } from "../../hooks/useEscapeKey";

function ToastShelf() {
  const { toasts, clearToasts } = React.useContext(ToastContext);
  useEscapeKey(clearToasts);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      arie-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast toast={toast} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

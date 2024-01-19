import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
import { ToastContext } from "../ToastProvider/ToastProvider";
import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ toast }) {
  const Icon = ICONS_BY_VARIANT[toast.variant];
  const { removeToastById } = React.useContext(ToastContext);
  return (
    <div className={`${styles.toast} ${styles[toast.variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{toast.variant} -</VisuallyHidden>
        {toast.message}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => removeToastById(toast.id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;

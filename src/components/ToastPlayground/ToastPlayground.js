import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  const [toasts, setToasts] = React.useState([]);

  const handleMessageChange = (event) => setMessage(event.target.value);
  const handleVariantChange = (event) => setVariant(event.target.value);

  const addCurrentToastToShelp = () => {
    const id = crypto.randomUUID();
    const removeToast = () => {
      setToasts((currentToasts) => {
        const indexToDelete = currentToasts.findIndex(
          (toast) => toast.id === id
        );
        const beforeDelete = currentToasts.slice(0, indexToDelete);
        const afterDelete = currentToasts.slice(indexToDelete + 1);
        return [...beforeDelete, ...afterDelete];
      });
    };
    const toast = { id, message, variant, removeToast };
    setToasts([...toasts, toast]);
    setMessage("");
    setVariant("notice");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts}></ToastShelf>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addCurrentToastToShelp();
        }}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={handleMessageChange}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => (
                <label htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={variant === option}
                    onChange={handleVariantChange}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;

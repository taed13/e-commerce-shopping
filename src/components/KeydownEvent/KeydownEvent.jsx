import React, { useEffect } from "react";
import styles from "./KeydownEvent.module.css";

const KeydownEvent = () => {
  useEffect(() => {
    const eKey = document.querySelector(`.${styles.key} p:last-child`);
    const eLocation = document.querySelector(
      `.${styles.location} p:last-child`
    );
    const eWhich = document.querySelector(`.${styles.which} p:last-child`);
    const eCode = document.querySelector(`.${styles.code} p:last-child`);
    const alert = document.querySelector(`.${styles.alert}`);
    const box = document.querySelector(`.${styles.box}`);
    const result = document.querySelector(`.${styles.result}`);

    const handleKeyDown = (e) => {
      eKey.innerText = e.key;
      eLocation.innerText = e.location;
      eWhich.innerText = e.which;
      eCode.innerText = e.code;
      result.innerHTML = e.code;
      alert.classList.add(styles.hide);
      box.classList.remove(styles.hide);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <button className={`${styles.alert} ${styles.hide}`}>
            Press Any Key
          </button>
          <div className={styles.box}>
            <div className={styles.result}>40</div>
            <div className={styles.detail}>
              <div className={`${styles.card} ${styles.key}`}>
                <p>Key</p>
                <p>0</p>
              </div>
              <div className={`${styles.card} ${styles.location}`}>
                <p>Location</p>
                <p>0</p>
              </div>
              <div className={`${styles.card} ${styles.which}`}>
                <p>Which</p>
                <p>0</p>
              </div>
              <div className={`${styles.card} ${styles.code}`}>
                <p>Code</p>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeydownEvent;

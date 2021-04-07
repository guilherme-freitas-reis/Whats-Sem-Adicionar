import React from "react";
import styles from "../../styles/Button.module.css";

function Primary(props) {
  return <button {...props} className={styles.primary}>{props.children}</button>;
}

function Secondary() {
  return <button></button>;
}

function Link() {
  return <a></a>;
}

export { Primary, Secondary, Link };

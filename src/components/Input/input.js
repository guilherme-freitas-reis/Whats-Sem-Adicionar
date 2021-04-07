import React from 'react';
import styles from "../../styles/Input.module.css";

function Input(props) {
  return <input className={styles.input} {...props}/>;
}

export default Input;
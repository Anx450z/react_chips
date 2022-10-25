import React from "react";
import styles from "../select.module.css";

type SelectOption = {
  label: string;
  value: any;
};

type SelectProps = {
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
  options: SelectOption[];
};

const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}></span>
      <button className={styles["clear-btn"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul>
        {options.map((option) => (
          <li key={option.label} className={styles.option}>
            {" "}
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;

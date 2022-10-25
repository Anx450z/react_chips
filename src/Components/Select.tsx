import React, { useEffect, useState } from "react";
import styles from "../select.module.css";

type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
  options: SelectOption[];
};

const Select = ({ value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(0);

  const clearOptions = () => {
    onChange(undefined);
  };
  const selectedOption = (option: SelectOption) => {
    if (option !== value) onChange(option);
  };
  const isOptionSelected = (option: SelectOption) => {
    return option === value;
  };
  useEffect(()=> {
    if(isOpen) setIsHighlighted(0)
  },[isOpen])
  return (
    <div
      tabIndex={0}
      className={styles.container}
      onBlur={() => setIsOpen(false)}
      onClick={() => {
        setIsOpen(!isOpen);
      }}>
      <span className={styles.value}>{value?.label}</span>
      <button
        className={styles["clear-btn"]}
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen && styles.show}`}>
        {options.map((option, index) => (
          <li
            key={option.value}
            className={`${styles.option} ${
              isOptionSelected(option) && styles.selected
            } ${isHighlighted === index ? styles.highlighted : ""}
            `}
            onClick={(e) => {
              e.stopPropagation();
              selectedOption(option);
              setIsOpen(false);
            }}
            onMouseEnter= { ()=> setIsHighlighted(index)}>
            {" "}
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;

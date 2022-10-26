import React, { useEffect, useState } from "react";
import styles from "../select.module.css";

export type SelectOption = {
  label: string;
  value: string | number;
};

type SingleSelectProps = {
  multiple: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

const Select = ({ multiple, value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(0);

  const clearOptions = () => {
    multiple ? onChange([]) : onChange(undefined);
  };
  const selectedOption = (option: SelectOption) => {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  };
  const isOptionSelected = (option: SelectOption) => {
    return multiple ? value.includes(option) : option === value;
  };
  useEffect(() => {
    if (isOpen) setIsHighlighted(0);
  }, [isOpen]);
  return (
    <div
      tabIndex={0}
      className={styles.container}
      onBlur={() => setIsOpen(false)}
      onClick={() => {
        setIsOpen(!isOpen);
      }}>
      <span className={styles.value}>
        {multiple
          ? value.map((v) => (
              <button
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectedOption(v);
                }}
                className={styles["option-badge"]}>
                {v.label} <span className={styles["remove-btn"]}>&times;</span>
              </button>
            ))
          : value?.label}
      </span>
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
            onMouseEnter={() => setIsHighlighted(index)}>
            {" "}
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;

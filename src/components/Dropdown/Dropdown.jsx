"use client";
import React, { useState } from "react";
import styles from "./dropdown.module.css";
import { Check, ChevronDown } from "lucide-react";

const Dropdown = ({ options }) => {
  let [sortOptions, setSortOptions] = useState(options);
  const [isExpanded, setIsExpanded] = useState(false);
  const selectedOption = sortOptions.find((option) => option.isSelected);

  const handleOptionExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleOptionChange = (e) => {
    sortOptions = sortOptions.map((option) => ({
      ...option,
      isSelected: option.value === e.target.id,
    }));
    setSortOptions(sortOptions);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.selected} onClick={handleOptionExpansion}>
        {selectedOption.name.toUpperCase()}
        <ChevronDown />
      </div>
      {isExpanded && (
        <div className={styles.options}>
          {sortOptions.map((option) => (
            <div
              key={option.value}
              id={option.value}
              className={
                option.isSelected ? styles.selectedOption : styles.option
              }
              onClick={handleOptionChange}
            >
              {option.isSelected ? (
                <span>
                  <Check />
                  {option.name.toUpperCase()}
                </span>
              ) : (
                option.name.toUpperCase()
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import React, { useState } from "react";
import styles from "./filter.module.css";
import { ChevronDown } from "lucide-react";

const Filter = ({ category, options }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div className={styles.filter}>
      <div className={styles.filterCategory}>
        <p onClick={handleExpansion}>{category.toUpperCase()}</p>
        <ChevronDown onClick={handleExpansion} />
      </div>

      <p>All</p>
      {isExpanded && (
        <div className={styles.filterOptions}>
          <p>Unselect All</p>
          {options.length !== 0 &&
            options.map((option) => (
              <div key={option} className={styles.filterCheckItems}>
                <input
                  type="checkbox"
                  id={option}
                  name={option}
                  value={option}
                />
                <label for={option}>{option}</label>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Filter;

import React, { useMemo } from "react";
import { Option } from '../data/productDataTypes';
import './Filters.css';

type Category = {
  label: string;
  ungrouped?: boolean;
  options: Option[];
}

type FiltersProps = {
  data: Category[];
  onChange: (selectedOptions: (string)[]) => void;
  selectedOptions: Set<string>;
}

const Filters: React.FC<FiltersProps> = ({ data, onChange, selectedOptions }) => {
  // Memoize the selected options to prevent unnecessary re-renders
  const selectedOptionsArray = useMemo(() => Array.from(selectedOptions), [selectedOptions]);

  const handleOptionChange = (value: string) => {
    const updatedOptions = new Set(selectedOptionsArray);
    if (updatedOptions.has(value)) {
      updatedOptions.delete(value);
    } else {
      updatedOptions.add(value);
    }
    onChange(Array.from(updatedOptions));
  };

  return (
    <div>
      {data.map((category, index) => (
        <div key={index}>
          {!category.ungrouped && <p>{category.label}</p>}
          {category.options.map((option, idx) => (
            <div key={idx} className="label-text">
              <label>
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedOptions.has(option.value)}
                  onChange={() => handleOptionChange(option.value)}
                />
                {option.label}
              </label>
              {option.options && (
                <div style={{ marginLeft: 20 }}>
                  {option.options.map((subOption, subIdx) => (
                    <div key={subIdx} className="label-text">
                      <label>
                        <input
                          type="checkbox"
                          value={subOption.value}
                          checked={selectedOptions.has(subOption.value)}
                          onChange={() => handleOptionChange(subOption.value)}
                        />
                        {subOption.label}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filters;

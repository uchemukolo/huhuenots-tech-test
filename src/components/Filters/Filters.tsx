import React, { useState, useEffect, ChangeEvent } from "react";
import { Option } from '../data/productDataTypes'
import './Filters.css';

type Category = {
  label: string;
  ungrouped?: boolean;
  options: Option[];
}

type FiltersProps = {
  data: Category[];
  onChange: (selectedOptions: (string | Option)[]) => void;
}

const Filters: React.FC<FiltersProps> = ({ data, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<(string | Option)[]>([]);

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  useEffect(() => {
    onChange(selectedOptions)
  }, [selectedOptions, onChange])
  return (
    <div>
      {data.map((category, index) => {
        return (
          <div key={index}>
            {!category.ungrouped && <p >{category.label}</p>}
            {category.options.map((option, idx) => (
              <div key={idx} className="label-text">
                <label >
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={selectedOptions.includes(option.value)}
                    onChange={handleOptionChange}
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
                            checked={selectedOptions.includes(subOption.value)}
                            onChange={handleOptionChange}
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
        )
      })}
    </div>
  );
};

export default Filters;

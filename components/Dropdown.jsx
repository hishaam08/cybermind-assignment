import { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState("Not Completed");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div
        className={`selected-options ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption : "Select an option"}
        {isOpen ? (
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      {isOpen && (
        <div className="options">
          {options.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

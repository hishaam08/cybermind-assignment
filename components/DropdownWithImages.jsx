import { useState } from "react";
import "./DropdownWithImages.css";

const DropdownWithImages = ({ options, setTaskAssignedTo = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState(options[1]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setTaskAssignedTo && setTaskAssignedTo(option.value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div
        className={`dropdown-header ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        {selectedOption ? (
          <div className="selected-option">
            <img
              src={selectedOption.image}
              alt={selectedOption.label}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                width: 25,
                height: 25,
                marginRight: 10,
              }}
            />
            {selectedOption.label}
          </div>
        ) : (
          <p className="dropdown-title">Select a person</p>
        )}
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
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleOptionSelect(option)}
            >
              <img
                src={option.image}
                alt={option.label}
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 10,
                  objectFit: "cover",
                }}
              />
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownWithImages;

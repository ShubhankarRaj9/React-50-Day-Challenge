import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

function HiddenSearchBar() {
  const [showInput, setShowInput] = useState(false);

  const handleContainerClick = () => {
    setShowInput(false);
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
    setShowInput(true);
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section
      className="container"
      style={{ backgroundColor: showInput ? "#1a1a1a" : "#fff" }}
      onClick={handleContainerClick}
    >
      {showInput ? (
        <input
          type="text"
          placeholder="Search..."
          onClick={handleInputClick}
          autoFocus
        />
      ) : (
        <FaSearch onClick={handleIconClick} />
      )}
    </section>
  );
}

export default HiddenSearchBar;

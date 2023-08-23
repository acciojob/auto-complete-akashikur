import React, { useState } from "react";

const Autocomplete = ({ options }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([...options]);

  const handleInputChange = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);

    // Filter the options based on the input value
    const newSuggestions = options.filter((option) =>
      option.toLowerCase().includes(newInputValue.toLowerCase())
    );

    setSuggestions(newSuggestions);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a fruit..."
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function App() {
  return (
    <div className="App">
      <h1>Search item</h1>
      <Autocomplete options={fruits} />
    </div>
  );
}

export default App;

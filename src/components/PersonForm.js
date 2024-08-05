import React, { useState } from "react";

import "../styles/components/person.css";

function PersonForm({ addPerson }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const disable = !age || !name || name.length <= 2;

  const isNumber = (val) => {
    if (isNaN(Number(val))) {
      const data = val.slice(0, -1);
      return data;
    }

    return Number(val);
  };

  const handleSetAge = (value) => {
    setAge(isNumber(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson({ id: Date.now(), name, age });
    setName("");
    setAge("");
  };

  return (
    <div className="person-form-container">
      <h2>Add Person</h2>
      <form className="person-form" onSubmit={handleSubmit}>
        <div className="person-form-field">
          <label className="person-form-label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="person-form-field">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => handleSetAge(e.target.value)}
          />
        </div>
        <button disabled={disable} className="person-form-btn" type="submit">
          Add Person
        </button>
      </form>
    </div>
  );
}

export default PersonForm;

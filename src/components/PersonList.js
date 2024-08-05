import React, { useState } from "react";

function PersonList({ persons, updatePerson, deletePerson }) {
  const [editingId, setEditingId] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const startEditing = (person) => {
    if (!person) {
      setEditingId(null);
      setName("");
      setAge("");
    } else {
      setEditingId(person.id);
      setName(person.name);
      setAge(person.age);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updatePerson({ id: editingId, name, age });
    setEditingId(null);
    setName("");
    setAge("");
  };

  return (
    <div className="person-list-container">
      <h2>Person List</h2>
      <ul className="person-list">
        {persons.map((person) => (
          <li className="person-list-item" key={person.id}>
            {person.name} ({person.age})
            <div>
              <button
                className="person-list-btn"
                onClick={() => startEditing(person)}
              >
                Edit
              </button>
              <button
                className="person-list-btn"
                onClick={() => {
                  startEditing(null);
                  deletePerson(person.id);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editingId && (
        <form onSubmit={handleUpdate}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit">Update Person</button>
        </form>
      )}
    </div>
  );
}

export default PersonList;

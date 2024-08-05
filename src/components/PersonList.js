
import React, { useState } from 'react';

function PersonList({ persons, updatePerson, deletePerson }) {
  const [editingId, setEditingId] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const startEditing = (person) => {
    setEditingId(person.id);
    setName(person.name);
    setAge(person.age);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updatePerson({ id: editingId, name, age });
    setEditingId(null);
    setName('');
    setAge('');
  };

  return (
    <div>
      <h2>Person List</h2>
      <ul>
        {persons.map(person => (
          <li key={person.id}>
            {person.name} ({person.age})
            <button onClick={() => startEditing(person)}>Edit</button>
            <button onClick={() => deletePerson(person.id)}>Delete</button>
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

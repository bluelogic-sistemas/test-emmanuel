
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

function HomePage() {
  const [persons, setPersons] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch initial data from API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      });
  }, []);

  const addPerson = (person) => {
    setPersons([...persons, person]);
  };

  const updatePerson = (updatedPerson) => {
    setPersons(persons.map(person => (person.id === updatedPerson.id ? updatedPerson : person)));
  };

  const deletePerson = (id) => {
    setPersons(persons.filter(person => person.id !== id));
  };

  return (
    <div>
      <h1>Home Page</h1>
      <PersonForm addPerson={addPerson} />
      <PersonList persons={persons} updatePerson={updatePerson} deletePerson={deletePerson} />
      <h2>Posts from API</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;

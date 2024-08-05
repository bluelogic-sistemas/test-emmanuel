import React, { useEffect, useState } from "react";
import axios from "axios";

import storage from "../helpers/localstorage";
import PersonForm from "../components/PersonForm";
import PersonList from "../components/PersonList";

import "../styles/homepage.css";

function HomePage() {
  const [persons, setPersons] = useState(storage.getStorage("persons", []));
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch initial data from API
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  useEffect(() => {
    storage.setStorage("persons", persons);
  }, [persons]);

  const addPerson = (person) => {
    setPersons([...persons, person]);
  };

  const updatePerson = (updatedPerson) => {
    setPersons(
      persons.map((person) =>
        person.id === updatedPerson.id ? updatedPerson : person
      )
    );
  };

  const deletePerson = (id) => {
    setPersons(persons.filter((person) => person.id !== id));
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Home Page from</h1>
      <section className="home-section">
        <div>
          <PersonForm addPerson={addPerson} />
          <PersonList
            persons={persons}
            updatePerson={updatePerson}
            deletePerson={deletePerson}
          />
        </div>
        <div>
          <h2 className="home-post-title">Posts from API</h2>
          <ul className="home-post-list">
            {posts.map((post) => (
              <li className="home-post-item" key={post.id}>
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
export default function Profile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Erreur lors de la récupération des utilisateurs :", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          setUsers(users.filter(user => user.id !== id)); // Supprime l'utilisateur du tableau
        } else {
          console.error("Erreur lors de la suppression");
        }
      })
      .catch(error => console.error("Erreur :", error));
  };

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Nom d'utilisateur</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
            <Link to={`${user.id}`}>
                <button>✏️</button>
              </Link>
          
              <button onClick={() => handleDelete(user.id)}  >🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

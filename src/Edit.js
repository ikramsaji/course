import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./omoponents/SignUp.css";
import { useEffect} from "react";
export default function Edit() {

  const { id } = useParams(); 


      const [Name, SetName] = useState("");
      const [Email, SetEmail] = useState("");
      const [Password, SetPassword] = useState("");


      useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then(res => res.json())
          .then(data =>{
            SetName(data.name)
            SetEmail(data.email)
       
        
          }
        
        )
          .catch(error => console.error("Erreur :", error));
      }, [id]);
  return (
    <div className="parent">
      <div className="register">
        <form >
          <label htmlFor="name">Nom :</label>
          <input
            id="name"
            type="text"
            placeholder="Nom..."
            value={Name}
            onChange={(e) => SetName(e.target.value)}
          />
       

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            placeholder="Email..."
            value={Email}
            onChange={(e) => SetEmail(e.target.value)}
          />

          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            placeholder="Mot de passe..."
            value={Password}
            onChange={(e) => SetPassword(e.target.value)}
          />
         

      
        

          <div style={{ textAlign: "center" }}>
            <button type="submit">confirmer</button>
          </div>
        </form>
      </div>
    </div>
  )
}

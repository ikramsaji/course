import React, { useState } from "react";
import axios from "axios";
import './omoponents/SignUp.css';

function Login() {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Accept, SetAccept] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function Submit(e) {
    e.preventDefault();
    SetAccept(true);

    // Vérification des champs
    if (Password.length < 8) {
      setErrorMsg("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login", {
        email: Email,
        password: Password,
      });

      console.log("Connexion réussie :", res.data);

      // Vérification des données retournées
      if (res.data && res.data.data && res.data.data.user) {
        window.localStorage.setItem("email", Email);
        window.location.pathname = "/Home"; // Redirection après connexion
      } else {
        setErrorMsg("Erreur : Utilisateur non trouvé !");
      }
    } catch (error) {
      if (error.response) {
        setErrorMsg(error.response.data.message || "Erreur de connexion");
      } else {
        setErrorMsg("Problème de connexion au serveur");
      }
      console.error("Erreur :", error.response?.data);
    }
  }

  return (
    <div className="parent">
      <div className="register">
        <form onSubmit={Submit}>
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
          {Password.length < 8 && Accept && (
            <p className="error">Le mot de passe doit contenir au moins 8 caractères</p>
          )}

          {errorMsg && <p className="error">{errorMsg}</p>}

          <div style={{ textAlign: "center" }}>
            <button type="submit">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

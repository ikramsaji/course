import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

function SignUp() {
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [CPassword, SetCPassword] = useState("");
  const [Accept, SetAccept] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function Submit(e) {
    e.preventDefault();
    SetAccept(true);

    // Validation des champs
    const isValid = Name !== "" && Password.length >= 8 && CPassword === Password;
    if (!isValid) {
      setErrorMsg("Veuillez remplir correctement tous les champs.");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register", {
        name: Name,
        email: Email,
        password: Password,
        password_confirmation: CPassword,
      });

      console.log("Réponse complète du serveur :", res.data);

      // Vérification de la structure de la réponse
      if (res.data && res.data.data && res.data.data.user) {
        window.localStorage.setItem("email",Email)
        window.location.pathname = "/Home";

      } else {
        console.error("Erreur : Structure de réponse inattendue", res.data);
        setErrorMsg("Une erreur est survenue lors de l'inscription.");
      }
    } catch (error) {
      if (error.response) {
        setErrorMsg(error.response.data.message || "Erreur d'inscription");
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
          <label htmlFor="name">Nom :</label>
          <input
            id="name"
            type="text"
            placeholder="Nom..."
            value={Name}
            onChange={(e) => SetName(e.target.value)}
          />
          {Name === "" && Accept && <p className="error">Le nom est requis</p>}

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

          <label htmlFor="repeat">Confirmer mot de passe :</label>
          <input
            type="password"
            id="repeat"
            placeholder="Confirmez le mot de passe..."
            value={CPassword}
            onChange={(e) => SetCPassword(e.target.value)}
          />
          {CPassword !== Password && Accept && (
            <p className="error">Les mots de passe ne correspondent pas</p>
          )}

          {errorMsg && <p className="error">{errorMsg}</p>}

          <div style={{ textAlign: "center" }}>
            <button type="submit">S'inscrire</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

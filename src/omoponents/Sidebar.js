import React from 'react'
import { Outlet, Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
         <div style={{ display: "flex" }}>
      {/* Sidebar fixe */}
      <nav style={{ width: "200px", padding: "20px", background: "#eee", height: "100vh" }}>
        <h2 style={{  paddingBottom: "40px", background: "#eee", display:"inline-block" }}>Menu</h2>
        <ul>
          <li style={{  paddingBottom: "40px", background: "#eee" }}><Link to="Dashboard">Dashboard</Link></li>
          <li style={{  paddingBottom: "40px", background: "#eee"}}><Link to="profile">Profile</Link></li>
          <li style={{  paddingBottom: "40px", background: "#eee"}}><Link to="settings">Settings</Link></li>
        </ul>
      </nav>

      {/* Contenu dynamique */}
      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
      
    </div>
  )
}

export default Sidebar

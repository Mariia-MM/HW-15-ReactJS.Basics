import React from "react";
import profileImage from "./img/my-img.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My react app</h1>
      <h2>Author: Mariia Mytsko</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;

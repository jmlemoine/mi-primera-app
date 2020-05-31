import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HolaMundo /*, { Klk }*/ from "./components/HolaMundo";
import Klk from "./components/AdiosMundo";
import Hola from "./components/Saludar";

function App() {
  const user = {
    nombre: "Luis",
    edad: 18,
  };

  const saludars = (name, edad) => {
    console.log("Hola " + name + " tiene " + edad + " años.");
    //console.log("Hola " + " ${name} tiene " + " ${edad} " + " años.");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Jean Melvin Lemoine</p>
        <HolaMundo />
        <Klk />
        <Hola name="Jean Melvin" edad="24" />
        <Hola name="Jean" edad="17 " />
        <Hola users={user} saludars={saludars} />
      </header>
    </div>
  );
}

export default App;

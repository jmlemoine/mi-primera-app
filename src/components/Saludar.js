import React from "react";

export default function Saludar(props) {
  const { users, saludars } = props;
  //const { nombre = "Anonimo" } = users;
  //console.log(props);

  /*const saludar = () => {
    alert("Hola Luis Enrique");
  };*/

  return (
    <div>
      <h2>
        Hola {props.name} tiene {props.edad} años.
      </h2>
      <button onClick={() => saludars(users.nombre, users.edad)}>
        Saludar
      </button>
    </div>
  );
}

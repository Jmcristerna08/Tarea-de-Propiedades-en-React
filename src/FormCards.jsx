import React from "react";

function FormCards(props) {
  return (
    <div>
      <input onChange={props.nameHandler} name="nombre" placeholder="Nombre" />
      <input onChange={props.telHandler} name="tel" placeholder="Teléfono" />
      <input onChange={props.mailHandler} name="email" placeholder="Email" />
      <input onChange={props.bdayHandler} name="bday" placeholder="Bday" />
      <button onClick={props.addCard}>Añadir contacto</button>
    </div>
  );
}

export default FormCards;

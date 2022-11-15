import React from "react";
import Card from "./Card";
import contacts from "./Contacts";
import FormCards from "./FormCards";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      url={contact.url}
      tel={contact.tel}
      email={contact.email}
      bday={contact.bday}
    />
  );
}

export default function App() {
  let isLogged = true;
  const [newName, setNewName] = React.useState("");
  const [newTel, setNewTel] = React.useState("");
  const [newMail, setNewMail] = React.useState("");
  const [newBday, setNewBday] = React.useState("");
  const [contactList, setContactList] = React.useState(contacts);

  function nameHandler(event) {
    setNewName(event.target.value);
  }

  function telHandler(event) {
    setNewTel(event.target.value);
  }

  function mailHandler(event) {
    setNewMail(event.target.value);
  }

  function bdayHandler(event) {
    setNewBday(event.target.value);
  }

  function addCard(event) {
    const newId = contactList.length + 1;
    setContactList((prevValue) => [
      ...prevValue,
      {
        id: newId,
        name: newName,
        url: "",
        tel: newTel,
        email: newMail,
        bday: newBday
      }
    ]);
  }

  return (
    <div>
      <FormCards
        nameHandler={nameHandler}
        telHandler={telHandler}
        mailHandler={mailHandler}
        bdayHandler={mailHandler}
        addCard={addCard}
      />
      {isLogged && contactList.map(createCard)}
    </div>
  );
}

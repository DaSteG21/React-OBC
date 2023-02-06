import { createContext, useEffect, useState } from "react";

export const ContactContext = createContext();

export function ContactContextProvider(props) {
  let contactList = [
    {
      id: 0,
      name: "John",
      lastName: "Doe",
      email: "doeJohn@email.com",
      isConnected: true,
    },
    {
      id: 1,
      name: "Max",
      lastName: "Palomino",
      email: "Maxpalo@email.com",
      isConnected: false,
    },
  ];

  const [contacts, setContacts] = useState(contactList)

  function createContact(contact){

    contact.id= contacts.length
    setContacts([...contacts,contact])

  }
  function deleteContact(contactID){
    setContacts(contacts.filter((contact) => contactID !== contact.id))
  }

  return (

    <ContactContext.Provider value={{
      contacts,
      createContact,
      deleteContact,
    }}>
      {props.children}
    </ContactContext.Provider>

  )

}

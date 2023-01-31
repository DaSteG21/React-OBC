import PropTypes from "prop-types";
import { useState } from "react";

export default function Contact({ contact }) {
  
    const [isConnected, setIsConnected] = useState(contact.isConnected)

    return (
    <>
      <h1>{contact.name + " " + contact.lastName}</h1>
      <h3>{contact.email}</h3>
      <h4>{isConnected ? "✅ Contacto En Línea" : "⛔ Contacto No Disponible"}</h4>
      <button onClick={() => setIsConnected(isConnected ? false : true)}>Change Status</button>
    </>
  );
}



Contact.propTypes = {
  contact: PropTypes.object,
};

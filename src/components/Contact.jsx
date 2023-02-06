import PropTypes from "prop-types";
import { useContext } from "react";
import { useState } from "react";
import { ContactContext } from "./context/ContactContext";


export default function Contact({ contact }) {

  const {deleteContact} = useContext(ContactContext)
  const [isConnected, setIsConnected] = useState(contact.isConnected);

  return (
    <div className="contactCard">
      <div className="contactInfo">
        <p className="contactName">{contact.name + " " + contact.lastName}</p>
        <p className="contactEmail">{contact.email}</p>
      </div>
      <div className="contactStatus">
        <p className="status">
          {isConnected ? "✅ Online" : "⛔ Not Available"}
        </p>
        <button className="statusButton" onClick={() => setIsConnected(isConnected ? false : true)}>
          Change Status
        </button>
      </div>
      <div>
        <button onClick={() => deleteContact(contact.id)} className="deleteButton">🗑</button>
      </div>
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.object,
};

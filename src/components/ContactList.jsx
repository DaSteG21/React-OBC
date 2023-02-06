import { useContext } from "react";
import Contact from "./Contact";
import { ContactContext } from "./context/ContactContext";
import Header from "./Header";


export default function ContactList() {
 
    const {contacts} = useContext(ContactContext)

    return (
    <>
      <div className="contactContainer">
        <Header />
        {contacts.map((contact) => (
          <Contact key= {contact.id} contact={contact} />
        ))}
      </div>
    </>
  );
}

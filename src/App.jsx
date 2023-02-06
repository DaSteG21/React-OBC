import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { ContactContextProvider } from "./components/context/ContactContext";

function App() {
  return (
    <div className="App">
      <ContactContextProvider>
        <ContactForm />
        <ContactList />
      </ContactContextProvider>
    </div>
  );
}

export default App;

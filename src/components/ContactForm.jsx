import { useContext, useRef } from "react"
import { ContactContext } from "./context/ContactContext";

export default function ContactForm(){

    const {createContact} = useContext(ContactContext)
    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')
    const statusRef = useRef()

    function addContact(e){

        e.preventDefault()
        const newContact = {
            
            name: nameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            status: statusRef.current.value
        }

        createContact(newContact)

    }


    return <form onSubmit={addContact} className="contactForm">
        <p>Register</p>
        <input ref={nameRef} type="text" placeholder="Name" />
        <input ref={lastNameRef} type="text" placeholder="Last Name" />
        <input ref={emailRef} type="text" placeholder="Email" />
        <select ref={statusRef} name="status" id="status">
            <option hidden value="">Select an initial Status</option>
            <option value={true}> ✅ Connected </option>
            <option value={false}> ⛔ Not Available </option>
        </select>
        <button>Complete</button>

    </form>

}
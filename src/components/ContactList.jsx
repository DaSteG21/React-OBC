import Contact from "./Contact";

    let firstContact= {

        name:'John',
        lastName:'Doe',
        email: 'doeJohn@carseba.com',
        isConnected:true

    }


export default function ContactList(){

   return <Contact contact={firstContact}/>

}
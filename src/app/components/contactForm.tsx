"use client";
import { FormEvent, useState } from "react";
import Section from "./section";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  
  const onSubmit =  async (e: FormEvent) => {
    e.preventDefault();
    try{
      const response = await fetch('/api/emails',{
        method: 'POST',
        body: JSON.stringify({name, email, message}),
        headers: {'Content-Type':'application/json'},
      });

      const result = await response.json();

      if(result.success){
        console.log('Message envoyé')
        setResponseMessage("Message envoyé avec succès !");
        setName("");
        setEmail("");
        setMessage("");
      }else{
        setResponseMessage("Erreur dans l'envoie de message");
      }

    }catch(err){
      console.error(err)
    }
    console.log("data =>", name, email, message);
  };
  return (
    <Section className="h-screen">
      <div className="m-auto p-4 bg-white flex">
        <div className="block">
          <h2 className="text-black">Contact</h2>
          <p>
            N'hésitez pas à venir me contacter pou toutes opportunités
            professionnel ou remarque concernant portfolio et autres, au plaisir
            de vous répondre!
          </p>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nom"
              type="text"
              className=""
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              className=""
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Votre Message..."
            ></textarea>
            <button type="submit" className="text-black">
              {isLoading ? "Envoi en cours..." : "Envoyer le mail"}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;

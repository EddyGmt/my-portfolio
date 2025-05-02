"use client";
import { FormEvent, useState } from "react";
import Section from "./section";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      if (result.success) {
        console.log("Message envoyé");
        setResponseMessage("Message envoyé avec succès !");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponseMessage("Erreur dans l'envoie de message");
      }
    } catch (err) {
      console.error(err);
    }
    console.log("data =>", name, email, message);
  };
  return (
    <Section className="h-screen pt-40 max-w-3xl">
      <div className="m-auto p-10 bg-white flex">
        <div className="block">
          <h2
            className="text-black text-center text-3xl font-bold"
            id="contact"
          >
            Contact
          </h2>
          <p className="text-black pt-10">
            N&apos;hésitez pas à venir me contacter pour toutes opportunités
            professionnel ou remarque concernant le portfolio et autres, au
            plaisir de vous répondre!
          </p>
        </div>
        <div className="">
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nom"
              type="text"
              className="w-full text-slate-900 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
              required
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              className="w-full text-slate-900 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Votre Message..."
              rows={6}
              className="w-full text-slate-900 rounded-md px-2 border text-sm pt-2.5 outline-none focus:border-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-[15px] font-medium px-4 py-2 w-full !mt-6"
            >
              Envoyer le mail
            </button>
            {responseMessage && (
              <p className="text-green-600 pt-4 font-semibold">
                {responseMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;

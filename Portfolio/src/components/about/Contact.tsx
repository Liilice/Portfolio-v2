import { useEffect, useState } from "react";
import contact from "@datas/contact.json";
import phone from "@assets/phone.svg";
import mail from "@assets/mail.svg";
import location from "@assets/location.svg";
import github from "@assets/github.svg";
import linkedin from "@assets/linkedin.svg";
import Button from "../reusable/button";

const Contact = () => {
  const [object, setObject] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [message, setMessage] = useState<string | undefined>();

  useEffect(() => {
    console.log("Contact", contact);
  }, []);

  const submit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-between">
      <div className="mr-7">
        <div className="flex items-center">
          <img src={phone} alt="phone" />
          <p>{contact.phone}</p>
        </div>
        <div className="flex items-center">
          <img src={mail} alt="mail" />
          <p>{contact.mail}</p>
        </div>
        <div className="flex items-center">
          <img src={location} alt="location" className="max-w-[25%]" />
          <p>{contact.location}</p>
        </div>
        <div className="flex justify-center items-center">
          <img src={github} alt="github" className="max-w-[25%] m-3" />
          <img src={linkedin} alt="linkedin" className="max-w-[25%] m-3" />
        </div>
      </div>
      <form
        onSubmit={submit}
        className="flex flex-col  w-[25em] pl-2"
      >
        <label className="fontSolid tracking-[.2em]" htmlFor="email">
          Email
        </label>
        <input
          className="w-[100%] rounded-xl border border-solid border-black px-2 py-1 mb-4"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="object" className="fontSolid tracking-[.2em] ">
          Objet
        </label>
        <input
          type="text"
          className="w-[100%] rounded-xl border border-solid border-black px-2 py-1 mb-4"
          id="object"
          name="object"
          value={object}
          onChange={(e) => setObject(e.target.value)}
        />
        <label htmlFor="message" className="fontSolid tracking-[.2em]">
          Message
        </label>
        <textarea
          name="message"
          className="w-[100%] rounded-xl border border-solid border-black px-2 py-1 mb-6"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        
        <Button text={"Envoyer"} />
      </form>
    </div>
  );
};

export default Contact;

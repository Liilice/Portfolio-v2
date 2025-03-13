import { useEffect, useState } from "react";
import contact from "@datas/contact.json";
import phone from "@assets/phone.svg";
import mail from "@assets/mail.svg";
import location from "@assets/location.svg";
import github from "@assets/github.svg";
import linkedin from "@assets/linkedin.svg";
import Button from "./reusable/button";

const Contact = () => {
  const [object, setObject] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [message, setMessage] = useState<string | undefined>();
  const [emailValided, setEmailValided] = useState<boolean | null>(null);

  const submit = (e: any) => {
    e.preventDefault();
    if (email?.includes("@") && email?.includes(".")) {
      setEmailValided(true);
    } else {
      setEmailValided(false);
    }
  };

  return (
    <div className="flex justify-between items-center w-[90%]">
      <div className="mr-7 text-white text-[16px] fontArial">
        <div className="flex items-center py-5">
          <img src={phone} alt="phone" className="mr-3" />
          <p>{contact.phone}</p>
        </div>
        <div className="flex items-center  py-5">
          <img src={mail} alt="mail" className="mr-3" />
          <p>{contact.mail}</p>
        </div>
        <div className="flex items-center  py-5">
          <img src={location} alt="location" className="max-w-[25%] mr-3" />
          <p>{contact.location}</p>
        </div>
        <div className="flex justify-center items-center  py-5">
          <a href="https://github.com/Liilice" target="_blank">
            <img src={github} alt="github" className="max-w-[75%] m-3" />
          </a>
          <a
            href="https://www.linkedin.com/in/alicezhenglilice/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" className="max-w-[75%] m-3" />
          </a>
        </div>
      </div>
      <form onSubmit={submit} className="flex flex-col  w-[25em] pl-2 flex-1">
        <label
          className="fontSolid tracking-[.3em] text-white "
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={`w-[100%] rounded-xl px-4 py-3 mb-4  bg-white/75 shadow-2xl ${
            emailValided === false
              ? "border-4 border-dashed border-red-800"
              : ""
          }`}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          htmlFor="object"
          className="fontSolid tracking-[.3em] text-white"
        >
          Objet
        </label>
        <input
          type="text"
          className="w-[100%] rounded-xl  px-4 py-3 mb-4  bg-white/75 shadow-2xl"
          id="object"
          name="object"
          value={object}
          onChange={(e) => setObject(e.target.value)}
        />
        <label
          htmlFor="message"
          className="fontSolid tracking-[.3em] text-white"
        >
          Message
        </label>
        <textarea
          name="message"
          className="w-[100%] rounded-xl  px-4 py-3 mb-6  bg-white/75 shadow-2xl"
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

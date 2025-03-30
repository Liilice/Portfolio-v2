import { useState } from "react";
import contact from "../datas/contact.json";
import phone from "./assets/phone.svg";
import mail from "./assets/mail.svg";
import location from "./assets/location.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import Button from "./reusable/button";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const [object, setObject] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [message, setMessage] = useState<string | undefined>();
  const [emailValided, setEmailValided] = useState<boolean | null>(null);
  const [contactInfo, setContactInfo] = useState<string | null>(contact.phone);
  const [error, setError] = useState<boolean>(false);

  const submit = async (e: any) => {
    e.preventDefault();
    if (!email || !object || !message) {
      setError(true);
      return;
    }

    if (email?.includes("@") && email?.includes(".")) {
      setEmailValided(true);
    } else {
      setEmailValided(false);
      return;
    }

    const formData = { email: email, subject: object, html: message };
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}contact`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response) {
        toast.success("Message envoyé avec succès");
      }
    } catch (error) {
      toast.error(
        "Oups ! Une erreur s'est produite. Veuillez réessayer plus tard."
      );
    }
  };

  const handleInfo = (text: string) => {
    switch (text) {
      case "phone":
        setContactInfo(contact.phone);
        break;
      case "mail":
        setContactInfo(contact.mail);
        break;
      case "location":
        setContactInfo(contact.location);
        break;
      default:
        setContactInfo(null);
        break;
    }
  };

  return (
    <>
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-widest mt-4" id="contact">
        Contact
      </h2>
      <ToastContainer />
      <div
        className="flex flex-col sm:flex-row sm:justify-between items-center"
        id="contact"
      >
        <div className="sm:mr-7 text-white text-[16px] flex sm:flex-col cursor-pointer">
          <div className="flex items-center py-5">
            <img
              src={phone}
              alt="phone"
              className="mr-3"
              onClick={() => handleInfo("phone")}
            />
            <p className="hidden sm:block">{contact.phone}</p>
          </div>
          <div className="flex items-center  py-5">
            <img
              src={mail}
              alt="mail"
              className="mr-3"
              onClick={() => handleInfo("mail")}
            />
            <p className="hidden sm:block">{contact.mail}</p>
          </div>
          <div className="flex items-center  py-5">
            <img
              src={location}
              alt="location"
              className="mr-3"
              onClick={() => handleInfo("location")}
            />
            <p className="hidden sm:block">{contact.location}</p>
          </div>
          <div className="flex justify-center items-center sm:py-5 ">
            <a
              href="https://github.com/Liilice"
              target="_blank"
              className="max-w-[30%] m-3"
            >
              <img src={github} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/alicezhenglilice/"
              target="_blank"
              className="max-w-[30%] m-3"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
        {contactInfo && <p className="contactInfo sm:hidden">{contactInfo}</p>}
        <form onSubmit={submit} className="flex flex-col sm:pl-2 flex-1 w-full">
          <label
            className="fontSolid tracking-[.3em] text-white "
            htmlFor="email"
          >
            Email*
          </label>
          <input
            className={`rounded-xl px-4 py-3 mb-4  bg-white/75 shadow-2xl ${
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
            Objet*
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
            Message*
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
        {error && (
          <p className="text-[#8DFF93] !text-base">
            Veuillez remplir tout les champs
          </p>
        )}
      </div>
    </>
  );
};

export default Contact;

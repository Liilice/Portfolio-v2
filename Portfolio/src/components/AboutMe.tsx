import { useState } from "react";
import NavBar from "./navBar";
import Content from "./Content";
import Profil from "../assets/cv/alice.webp";
import { TextChoiceProps } from "../interfaces/AboutProps";
import pokeballWhite from "./assets/pokeballWhite.svg";

const AboutMe = () => {
  const [content, setContent] = useState<string>("Accueil");

  const displayText = (text: string) => {
    const textChoice: TextChoiceProps = {
      accueil: "Accueil",
      person: "A propos de moi",
      diplome: "Formation",
      competences: "Compétence",
      experience: "Éxpériences",
    };

    setContent(textChoice[text as keyof TextChoiceProps]);
  };

  return (
    <div
      className="bg-[url(./assets/aboutbg.svg)] flex flex-col py-4 px-5 rounded-3xl mb-[5%]"
      id="about"
    >
      <img src={Profil} alt="Profil" className="max-w-[25%] sm:hidden" />
      <div className="flex justify-center items-center ">
        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <img
              src={pokeballWhite}
              alt="pokeball sans border"
              className="max-w-[7%]"
            />
            <h3 className="font-bold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
              CARTE DE DRESSEUSE
            </h3>
            <img
              src={pokeballWhite}
              alt="pokeball sans border"
              className="max-w-[7%]"
            />
          </div>
          <NavBar displayText={displayText} />
          <Content data={content} />
        </div>
        <img
          src={Profil}
          alt="Profil"
          className="hidden sm:block max-w-[25%]"
        />
      </div>
    </div>
  );
};

export default AboutMe;

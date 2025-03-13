import { useState } from "react";
import NavBar from "./navBar";
import Content from "./Content";
import Profil from "@assets/givrali.png";
import { TextChoiceProps } from "@interfaces/AboutProps";
import pokeballWhite from "@assets/pokeballWhite.svg";

const AboutMe = () => {
  const [content, setContent] = useState<string>("Accueil");

  const displayText = (text: string) => {
    const textChoice: TextChoiceProps = {
      person: "A propos de moi",
      diplome: "Formation",
      competences: "Compétence",
      experience: "Éxpériences",
    };

    setContent(textChoice[text]);
  };

  return (
    <div className="flex flex-col py-4 px-8 rounded-3xl bg-[url(./assets/aboutbg.svg)] mb-[5%] w-[90%]">
      <div className="flex justify-center items-center ">
        <div className="flex flex-col ">
          <div className="flex justify-between items-center">
            <img
              src={pokeballWhite}
              alt="pokeball sans border"
              className="max-w-[7%]"
            />
            <p className="font-bold text-white text-4xl fontArial">
              CARTE DE DRESSEUR
            </p>
            <img
              src={pokeballWhite}
              alt="pokeball sans border"
              className="max-w-[7%]"
            />
          </div>
          <Content data={content} />
        </div>
        <img src={Profil} alt="Profil" />
      </div>
      <NavBar displayText={displayText} />
    </div>
  );
};

export default AboutMe;

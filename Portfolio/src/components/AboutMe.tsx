import { useState } from "react";
import Button from "./reusable/button";
import NavBar from "./navBar";
import Content from "./Content";
import Profil from "@assets/givrali.png";
import { TextChoiceProps } from "@interfaces/AboutProps";

const AboutMe = () => {
  const [content, setContent] = useState<string>("A propos de moi");

  const displayText = (text: string) => {
    const textChoice: TextChoiceProps = {
      person: "A propos de moi",
      diplome: "Formation",
      competences: "Compétence",
      experience: "Éxpériences",
      contact: "Contactez-moi",
    };

    setContent(textChoice[text]);
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex justify-center items-center w-[50%] border border-b-black border-solid p-8 rounded-3xl bg-white/50">
        <div className=" flex flex-col items-center">
          <NavBar displayText={displayText} />
          <Content data={content} />
          {content !== "Contactez-moi" && (
            <Button text={"Télécharger CV"} displayText={displayText} />
          )}
        </div>
      </div>
      <img src={Profil} alt="Profil" />
    </div>
  );
};

export default AboutMe;

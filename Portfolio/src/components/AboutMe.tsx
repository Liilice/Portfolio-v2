import { useEffect, useState } from "react";
import Button from "./button";
import NavBar from "./navBar";
import aboutMe from "@datas/aboutMe.json";
import diplome from "@datas/diplome.json";
import experience from "@datas/experience.json";
import skill from "@datas/skill.json";
import withContent from "../HOCs/withContent";
import Content from "./Content";
import Profil from "@assets/givrali.png";

const AboutMe = () => {
  const [content, setContent] = useState(aboutMe);

  const EnhancedContent = withContent(Content);

  const displayText = (text: string) => {
    const textChoice: any = {
      person: aboutMe,
      diplome: diplome,
      competences: skill,
      experience: experience,
      contact: "jiayou",
    };

    setContent(textChoice[text]);
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex justify-center items-center w-[50%] border border-b-black border-solid p-8 rounded-3xl bg-white/50">
        <div className=" flex flex-col items-center">
          <NavBar displayText={displayText} />
          <EnhancedContent data={content} />
          <Button text={"Télécharger CV"} displayText={displayText} />
        </div>
      </div>
      <img src={Profil} alt="Profil" />
    </div>
  );
};

export default AboutMe;

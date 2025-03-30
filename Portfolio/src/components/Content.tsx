import { useEffect, useState } from "react";
import Competences from "./components/about/Competences";
import Diplomes from "./components/about/Diplomes";
import Experiences from "./components/about/Experiences";
import Contact from "./components/about/Contact";
import aboutMe from "./datas/aboutMe.json";
import Button from "./reusable/button";
import CarteDresseur from "./components/about/CarteDresseur";

const Content = ({ data }: { data: string }) => {
  const [title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    setTitle(data);
  }, [data]);

  if (!data) {
    return (
      <p className="text-gray-500">
        Cliquez sur une section pour voir le contenu.
      </p>
    );
  }

  const Contents = () => {
    switch (title) {
      case "Formation":
        return <Diplomes />;
      case "Compétence":
        return <Competences />;
      case "Éxpériences":
        return <Experiences />;
      case "Accueil":
        return <CarteDresseur />;
      default:
        return (
          <ul className="p-[6%]">
            {aboutMe.description &&
              aboutMe.description.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        );
    }
  };

  return (
    <div
      className={`flex flex-col justify-center items-center ${
        title !== "Accueil" ? "bg-white/75 shadow-2xl" : ""
      } py-[1%] px-[5%] mt-[3%] rounded-2xl `}
    >
      {title !== "Accueil" && <h2 className="smallTitle">{title}</h2>}
      <Contents />
      {title !== "Contactez-moi" && <Button text={"Télécharger CV"} />}
    </div>
  );
};

export default Content;

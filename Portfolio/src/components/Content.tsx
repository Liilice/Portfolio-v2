import { useEffect, useState } from "react";
import Competences from "@components/about/Competences";
import Diplomes from "@components/about/Diplomes";
import Experiences from "@components/about/Experiences";
import Contact from "@components/about/Contact";
import aboutMe from "@datas/aboutMe.json";

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
      case "Contactez-moi":
        return <Contact />;
      default:
        return (
          <ul>
            {aboutMe.description &&
              aboutMe.description.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>{title}</h2>
      <Contents />
    </div>
  );
};

export default Content;

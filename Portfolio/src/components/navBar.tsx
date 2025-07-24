import experience from "./assets/nav/experience.svg";
import skill from "./assets/nav/skills.svg";
import diplome from "./assets/nav/diplome.svg";
import carteDresseur from "./assets/nav/carte-dresseur.svg";
import entraineurPokemon from "./assets/nav/entraineur-pokemon.svg";
import arrowPokemonDroite from "./assets/nav/arrow-pokemon-droite.svg";
import arrowPokemonGauche from "./assets/nav/arrow-pokemon-gauche.svg";
import { useState } from "react";

const NavBar = ({ displayText }: any) => {
  const [activeTab, setActiveTab] = useState("accueil");
  const sections = [
    "accueil",
    "person",
    "diplome",
    "competences",
    "experience",
  ];

  const getClass = (tab: string, width = "w-[15%]") =>
    `lg:mx-3 hover:cursor-pointer h-18 object-contain ${width} ${
      activeTab === tab ? "bg-black/35 rounded-t-2xl" : ""
    }`;

  const goToNext = () => {
    const currentIndex = sections.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % sections.length;
    const nextTab = sections[nextIndex];
    setActiveTab(nextTab);
    displayText(nextTab);
  };

  const goToPrevious = () => {
    const currentIndex = sections.indexOf(activeTab);
    const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
    const prevTab = sections[prevIndex];
    setActiveTab(prevTab);
    displayText(prevTab);
  };

  return (
    <div className="flex items-center justify-around mt-5 rounded-3xl border-[3px] border-b-8 border-black border-solid shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
      <img
        src={arrowPokemonGauche}
        alt="icone flèche pokemon"
        className="px-1.5 hover:cursor-pointer max-w-[10%]"
        onClick={() => goToPrevious()}
      />
      <img
        src={carteDresseur}
        alt="icone carte de dresseur"
        className={getClass("accueil")}
        onClick={() => {
          displayText("accueil");
          setActiveTab("accueil");
        }}
      />
      <img
        src={entraineurPokemon}
        alt="icone entraineur de pokemon"
        className={getClass("person")}
        onClick={() => {
          displayText("person");
          setActiveTab("person");
        }}
      />
      <img
        src={diplome}
        alt="icone de diplome"
        className={getClass("diplome")}
        onClick={() => {
          displayText("diplome");
          setActiveTab("diplome");
        }}
      />
      <img
        src={skill}
        alt="icone de compétences"
        className={getClass("competences")}
        onClick={() => {
          displayText("competences");
          setActiveTab("competences");
        }}
      />
      <img
        src={experience}
        alt="icone d'éxpériences"
        className={getClass("experience")}
        onClick={() => {
          displayText("experience");
          setActiveTab("experience");
        }}
      />
      <img
        src={arrowPokemonDroite}
        alt="flèche pokemon"
        className="px-1.5 hover:cursor-pointer max-w-[10%]"
        onClick={() => goToNext()}
      />
    </div>
  );
};

export default NavBar;

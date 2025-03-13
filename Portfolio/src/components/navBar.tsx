import experience from "@assets/experience.svg";
import contact from "@assets/contact.svg";
import skill from "@assets/skill.svg";
import diplome from "@assets/diplome.svg";
import entraineurPokemon from "@assets/entraineur-pokemon.svg";
import arrowPokemonDroite from "@assets/arrow-pokemon-droite.svg";
import arrowPokemonGauche from "@assets/arrow-pokemon-gauche.svg";

const NavBar = ({ displayText }: any) => {
  return (
    <div className="flex justify-between items-center mt-5">
      <img
        src={arrowPokemonGauche}
        alt="icone flèche pokemon"
        className="px-6 hover:cursor-pointer"
      />
      <img
        src={entraineurPokemon}
        alt="icone entraineur de pokemon"
        className="px-6 hover:cursor-pointer "
        onClick={() => displayText("person")}
      />
      <img
        src={diplome}
        alt="icone de diplome"
        className="px-6 hover:cursor-pointer "
        onClick={() => displayText("diplome")}
      />
      <img
        src={skill}
        alt="icone de compétences"
        className="px-6 hover:cursor-pointer "
        onClick={() => displayText("competences")}
      />
      <img
        src={experience}
        alt="icone d'éxpériences"
        className="px-6 hover:cursor-pointer "
        onClick={() => displayText("experience")}
      />
      <img
        src={arrowPokemonDroite}
        alt="flèche pokemon"
        className="px-6 hover:cursor-pointer "
      />
    </div>
  );
};

export default NavBar;

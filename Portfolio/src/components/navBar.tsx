import experience from "@assets/experience.svg";
import contact from "@assets/contact.svg";
import skill from "@assets/skill.svg";
import diplome from "@assets/diplome.svg";
import entraineurPokemon from "@assets/entraineur-pokemon.svg";
import arrowPokemonDroite from "@assets/arrow-pokemon-droite.svg";
import arrowPokemonGauche from "@assets/arrow-pokemon-gauche.svg";

const NavBar = () => {
  return (
    <div className="flex justify-center ">
      <img
        src={arrowPokemonGauche}
        alt="icone flèche pokemon"
        className="px-6 hover:cursor-pointer"
      />
      <div className="flex justify-center items-center border border-solid border-black rounded-t-3xl p-1">
        <img
          src={entraineurPokemon}
          alt="icone entraineur de pokemon"
          className="px-6 hover:cursor-pointer "
        />
        <img
          src={diplome}
          alt="icone de diplome"
          className="px-6 hover:cursor-pointer "
        />
        <img
          src={skill}
          alt="icone de compétences"
          className="px-6 hover:cursor-pointer "
        />
        <img
          src={experience}
          alt="icone d'éxpériences"
          className="px-6 hover:cursor-pointer "
        />
        <img
          src={contact}
          alt="icone de contact"
          className="px-6 hover:cursor-pointer "
        />
      </div>
      <img
        src={arrowPokemonDroite}
        alt="flèche pokemon"
        className="px-6 hover:cursor-pointer "
      />
    </div>
  );
};

export default NavBar;

import contact from "@assets/contact.svg";
import skill from "@assets/skill.svg";
import entraineurPokemon from "@assets/entraineur-pokemon.svg";
import Profil from "@assets/givrali.png";

const Pokeball = () => {
  const handleRedirect = (page: string) => {};

  return (
    <div className="flex justify-between items-center fixed top-0 right-0 z-[1000] m-2">
      {/* <img src={Profil} alt="Profil" className="max-w-[50%]"/> */}
      <div className="w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem] border-3 border-solid border-black rounded-full flex justify-center items-center overflow-hidden shadow-xl">
        <div className="grid grid-rows-2">
          <div className="w-[8rem] h-[4rem] sm:w-[10rem] sm:h-[5rem] flex justify-center items-start border-b-2 border-black border-solid bg-[#E33332] hover:scale-[1.1] hover:cursor-pointer">
            <img src={skill} alt="skill" className="max-w-[20%] mt-2" />
          </div>
          <div className="w-[8rem] h-[4rem] sm:w-[10rem] sm:h-[5rem] flex justify-center items-end border-t-2 border-black border-solid bg-[#E8E9EA] hover:scale-[1.1] hover:cursor-pointer">
            <img src={contact} alt="contact" className="max-w-[20%] mb-2" />
          </div>
        </div>
        <div className="w-[3.5rem] h-[3.5rem] border-3 border-solid border-black rounded-full absolute bg-white flex justify-center items-center hover:scale-[1.1] hover:cursor-pointer">
          <img
            src={entraineurPokemon}
            alt="entraineurPokemon"
            className="max-w-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Pokeball;

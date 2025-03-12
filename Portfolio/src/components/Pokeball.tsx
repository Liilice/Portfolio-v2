import contact from "@assets/contact.svg";
import skill from "@assets/skill.svg";
import entraineurPokemon from "@assets/entraineur-pokemon.svg";

const Pokeball = () => {
  const handleRedirect = (page: string) => {
    console.log("page ", page);
  };

  return (
    <div className="flex justify-center items-center py-4 fixed top-0 right-0 m-5 z-[1000]">
      <div className="w-48 h-48 border-4 border-solid border-black rounded-full flex justify-center items-center overflow-hidden shadow-xl">
        <div className="grid grid-rows-2">
          <div className="w-48 h-24 flex justify-center items-center border-b-2 border-black border-solid bg-[#E33332] hover:scale-[1.1] hover:cursor-pointer">
            <img src={skill} alt="skill" className="max-w-[20%]" />
          </div>
          <div className="w-48 h-24 flex justify-center items-center border-t-2 border-black border-solid bg-[#E8E9EA] hover:scale-[1.1] hover:cursor-pointer">
            <img src={contact} alt="contact" className="max-w-[20%]" />
          </div>
        </div>
        <div className="w-14 h-14 border-4 border-solid border-black rounded-full absolute bg-white flex justify-center items-center hover:scale-[1.1] hover:cursor-pointer">
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

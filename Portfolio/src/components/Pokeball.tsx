import experience from "@assets/experience.svg";
import contact from "@assets/contact.svg";
import skill from "@assets/skill.svg";
import diplome from "@assets/diplome.svg";
import entraineurPokemon from "@assets/entraineur-pokemon.svg";

const Pokeball = () => {

  const handleRedirect = (page :string) => {
    console.log("page ", page)
  }

  return (
    <>
      <div className="w-96 h-96 border-4 border-solid border-black rounded-full flex justify-center items-center overflow-hidden shadow-xl">
        <div className="grid grid-rows-2 grid-cols-2">
          <div className="w-48 h-48 flex justify-center items-center border-r-4 border-b-4 border-l-black border-solid bg-[#E33332] hover:scale-[1.1] hover:cursor-pointer" onClick={()=>handleRedirect("skill")}>
            <img src={skill} alt="skill" className="w-20 h-20" />
          </div>
          <div className="w-48 h-48 flex justify-center items-center border-l-4 border-b-4 border-l-black border-solid bg-[#E33332] hover:scale-[1.1] hover:cursor-pointer" onClick={()=>handleRedirect("experience")}>
            <img src={experience} alt="experience" className="w-20 h-20" />
          </div>
          <div className="w-48 h-48 flex justify-center items-center border-r-4 border-t-4 border-l-black border-solid bg-[#E8E9EA] hover:scale-[1.1] hover:cursor-pointer" onClick={()=>handleRedirect("contact")}>
            <img src={contact} alt="contact" className="w-20 h-20" />
          </div>
          <div className="w-48 h-48 flex justify-center items-center border-l-4 border-t-4 border-l-black border-solid bg-[#E8E9EA] hover:scale-[1.1] hover:cursor-pointer" onClick={()=>handleRedirect("diplome")}>
            <img src={diplome} alt="diplome" className="w-20 h-20" />
          </div>
        </div>
        <div className="w-28 h-28 border-4 border-solid border-black rounded-full absolute bg-white flex justify-center items-center hover:scale-[1.1] hover:cursor-pointer" onClick={()=>handleRedirect("entraineurPokemon")}>
        <img src={entraineurPokemon} alt="entraineurPokemon" className="w-16 h-16" />
        </div>
      </div>
    </>
  );
};

export default Pokeball;

import "./App.css";
import "@fonts/PokemonHollow.ttf";
import "@fonts/PokemonSolid.ttf";
import "@fonts/ArialRoundedMTBold.ttf";
import AboutMe from "@components/AboutMe";
import Pokeball from "@components/Pokeball";
import StackChoose from "@components/StackChoose";
import Project from "@components/project/Project";
import { useState } from "react";
import Contact from "@components/Contact";

function App() {
  // console.log(import.meta.env.VITE_APP_API_KEY);
  const [stack, setStack] = useState<string | null>(null);

  const chooseStack = (name: string) => {
    return setStack(name);
  };

  return (
    <div className="bg-[url(./assets/background.svg)] p-[3%] flex  flex-col justify-center border-4 border-dashed  sm:border-green-500 md:border-purple-800 lg:border-pink-300 xl:border-yellow-300 2xl:border-white">
      <Pokeball />
      <AboutMe />
      {/* <StackChoose onChoose={chooseStack} /> */}
      {/* <Project data={stack} />*/}
      <Contact /> 
    </div>
  );
}

export default App;

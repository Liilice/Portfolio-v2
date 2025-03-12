import "./App.css";
import "@fonts/PokemonHollow.ttf"
import "@fonts/PokemonSolid.ttf"
import AboutMe from "@components/AboutMe";
import Pokeball from "@components/Pokeball";
import StackChoose from "@components/StackChoose";
import Project from "@components/project/Project"
import { useState } from "react";

function App() {
  // console.log(import.meta.env.VITE_APP_API_KEY);
  const [stack, setStack] = useState<string|null>(null)

  const chooseStack = (name:string)=> {
    console.log("name", name)
    return setStack(name)
  }

  return (
    <div className="bg-[url(./assets/background.svg)]">
      <Pokeball />
      <AboutMe />
      <StackChoose onChoose={chooseStack}/>
      <Project data={stack}/>
    </div>);
}

export default App;

import "./App.css";
import "./fonts/PokemonHollow.ttf";
import "./fonts/PokemonSolid.ttf";
import "./fonts/ArialRoundedMTBold.ttf";
import AboutMe from "./components/AboutMe";
import Pokeball from "./components/Pokeball";
import StackChoose from "./components/StackChoose";
import Project from "./components/project/Project";
import { useState } from "react";
import Contact from "./components/Contact";
import {Element } from "react-scroll";

function App() {
  // console.log(import.meta.env.VITE_APP_API_KEY);
  const [stack, setStack] = useState<string | null>(null);

  const chooseStack = (name: string) => {
    return setStack(name);
  };

  return (
    <div className="bg-[url(./assets/background.svg)] p-[3%] flex  flex-col justify-center">
      <Pokeball />
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="stack">
        <StackChoose onChoose={chooseStack} />
      </Element>
      <Element name="project">
        <Project data={stack} />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;

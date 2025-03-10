import "./App.css";
import "@fonts/PokemonHollow.ttf"
import "@fonts/PokemonSolid.ttf"
import AboutMe from "@components/AboutMe";
import Pokeball from "@components/Pokeball";
import StackChoose from "@components/StackChoose";
import Project from "@components/Project"

function App() {
  // console.log(import.meta.env.VITE_APP_API_KEY);
  return (
    <div className="bg-[url(./assets/background.svg)]">
      <Pokeball />
      <AboutMe />
      <StackChoose/>
      <Project />
    </div>);
}

export default App;

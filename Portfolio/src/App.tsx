import "./App.css";
import "@fonts/PokemonHollow.ttf"
import "@fonts/PokemonSolid.ttf"
import AboutMe from "@components/AboutMe";
import Pokeball from "@components/Pokeball";

function App() {
  // console.log(import.meta.env.VITE_APP_API_KEY);
  return (
    <div className="bg-[url(./assets/background.svg)]">
      <Pokeball />
      <AboutMe />
    </div>);
}

export default App;

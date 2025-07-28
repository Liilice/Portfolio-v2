import AboutMe from "./components/AboutMe";
import Pokeball from "./components/Pokeball";
import StackChoose from "./components/StackChoose";
import Project from "./components/project/Project";
import { useState } from "react";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Login from "./components/Login";

function LandingPage() {
  // console.log(import.meta.env.VITE_APP_API_KEY);
  const [stack, setStack] = useState<string | null>(null);

  const chooseStack = (name: string) => {
    return setStack(name);
  };

  return (
    <div className="bg-[url(./assets/background.svg)] p-[3%] flex  flex-col justify-center">
      <Login />
      <Pokeball />
      <AboutMe />
      <StackChoose onChoose={chooseStack} />
      <Project data={stack} />
      <Contact />
      <Feedback />
    </div>
  );
}

export default LandingPage;

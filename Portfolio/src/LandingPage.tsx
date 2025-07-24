import AboutMe from "./components/AboutMe";
import Pokeball from "./components/Pokeball";
import StackChoose from "./components/StackChoose";
import Project from "./components/project/Project";
import { useState } from "react";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Login from "./components/Login";
import { Element } from "react-scroll";

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
      <Feedback />
    </div>
  );
}

export default LandingPage;

import { useState } from "react";
import PokeballOuvert from "@assets/pokeball-ouvert.svg";
import PokeballFermer from "@assets/pokeball-fermer.svg";
import FlechePokemon from "@assets/fleche-pokemon.svg";
import ReactSVG from "@assets/stack/react.svg";
import ReactNativeSVG from "@assets/stack/react-native-1.svg";
import AngularSVG from "@assets/stack/angular.svg";
import NestSVG from "@assets/stack/nestjs.svg";
import SymphonySVG from "@assets/stack/symfony.svg";

const StackChoose = () => {
  const [show, setShow] = useState(0);
  const stack = [ReactSVG, ReactNativeSVG, AngularSVG, NestSVG, SymphonySVG];

  return (
    <div className="flex items-center justify-center relative pb-24">
      {stack.map((item, index) => {
        console.log(index);
        return show === index ? (
          <div className="relative">
            <img
              key={index}
              src={PokeballOuvert}
              alt="Pokeball ouvert"
              className={`${
                index % 2 === 0 && "relative top-28"
              } max-w-[50%] m-10 hover:cursor-pointer hover:scale-110 `}
            />
            <img
              src={item}
              alt="item"
              className={`${
                index % 2 === 0 && "top-49 "
              } top-23 z-[1000] w-[20%] absolute left-20 hover:scale-110`}
            />
          </div>
        ) : (
          <div className="relative">
            <img
              key={index}
              src={PokeballFermer}
              alt="Pokeball fermer"
              className={`${
                index % 2 === 0 && "relative top-28"
              } max-w-[30%] m-10 z-[1000] hover:cursor-pointer hover:scale-110 `}
              onClick={() => setShow(index)}
            />
            <img
              src={item}
              alt="item"
              className={`${
                index % 2 === 0 && "top-28 "
              } m-12 w-[25%] absolute top-0 left-0`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StackChoose;

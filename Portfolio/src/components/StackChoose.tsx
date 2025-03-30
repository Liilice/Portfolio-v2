import { FC, useState } from "react";
import PokeballOuvert from "./assets/pokeball-ouvert.svg";
import PokeballFermer from "./assets/pokeball-fermer.svg";
import ReactSVG from "./assets/stack/react.svg";
import ReactNativeSVG from "./assets/stack/react-native-1.svg";
import AngularSVG from "./assets/stack/angular.svg";
import NestSVG from "./assets/stack/nestjs.svg";
import SymphonySVG from "./assets/stack/symfony.svg";
import Fleche from "./assets/fleche-pokemon.svg";
import { PokeballProps, StackChooseProps } from "./interfaces/PokeballItem";

const PokeballItem: FC<PokeballProps> = ({
  item,
  index,
  isOpen,
  showStack,
  hoverIndex,
  setHoverIndex,
  onChoose,
}) => {
  const [stack, setStack] = useState<string | null>(null);

  return (
    <>
      <div className="relative">
        {hoverIndex === index && (
          <img
            src={Fleche}
            alt="Flèche"
            className={`absolute ${
              isOpen
                ? index % 2 === 0
                  ? "top-13"
                  : "top-[-15%]"
                : index % 2 === 0
                ? "top-7"
                : "top-[-50%]"
            }  ${
              isOpen ? "left-12" : "left-3 "
            } m-10 hover:cursor-pointer hover:scale-110 max-w-[20%]`}
          />
        )}
        <img
          src={isOpen ? PokeballOuvert : PokeballFermer}
          alt={`Pokeball ${isOpen ? "ouvert" : "fermé"}`}
          className={`relative ${index % 2 === 0 ? "top-28" : ""} 
          ${isOpen ? "max-w-[50%]" : "max-w-[30%]"} 
          m-10 z-[900] hover:scale-110 hover:cursor-pointer`}
          onMouseEnter={() => {
            setHoverIndex(index);
            showStack(index);
          }}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={() => { 
            setStack(item.name);
            if(isOpen) {
              onChoose(stack);
            }
          }}
        />
        {isOpen && (
          <img
            src={item.image}
            alt="item"
            className={`${
              index % 2 === 0 && "top-49 "
            } top-25 z-[900] w-[20%] absolute left-23  hover:cursor-pointer`}
            onClick={() => {
              setStack(item.name);
              onChoose(item.name);
            }}
          />
        )}
      </div>
    </>
  );
};

const StackChoose: FC<StackChooseProps> = ({ onChoose }) => {
  const [show, setShow] = useState<Number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<Number | null>(null);
  const stack = [
    { name: "React", image: ReactSVG },
    { name: "React Native", image: ReactNativeSVG },
    { name: "Angular", image: AngularSVG },
    { name: "NestJS", image: NestSVG },
    { name: "Symfony", image: SymphonySVG },
  ];

  return (
    <div id="stack">
      <h2 className="text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-widest">
        Choisissez une technologie pour découvrir les projets associés.
      </h2>
      <div className="flex justify-center relative h-[20rem]">
        {stack.map((item, index) => (
          <PokeballItem
            key={index}
            item={item}
            index={index}
            isOpen={show === index}
            showStack={() => setShow(index)}
            hoverIndex={hoverIndex}
            setHoverIndex={() => setHoverIndex(index)}
            onChoose={onChoose}
          />
        ))}
      </div>
    </div>
  );
};

export default StackChoose;

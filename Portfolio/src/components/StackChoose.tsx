import { FC, useState } from "react";
import PokeballOuvert from "../assets/pokeballOuvert.webp";
import PokeballFermer from "../assets/pokeballFermer.webp";
import ReactSVG from "../assets/stack/react.svg";
import ReactNativeSVG from "../assets/stack/react-native-1.svg";
import AngularSVG from "../assets/stack/angular.svg";
import NestSVG from "../assets/stack/nestjs.svg";
import SymphonySVG from "../assets/stack/django.svg";
// import Fleche from "../assets/fleche-pokemon.svg";
import { PokeballProps, StackChooseProps } from "../interfaces/PokeballItem";

const PokeballItem: FC<PokeballProps> = ({
  item,
  index,
  isOpen,
  showStack,
  // hoverIndex,
  setHoverIndex,
  onChoose,
}) => {
  const [stack, setStack] = useState<string>("");

  return (
    <>
      <div
        className={`relative flex justify-center ${
          index % 2 === 0 ? "items-end" : "items-start"
        }`}
      >
        {/* {hoverIndex === index && (
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
        )} */}
        <img
          src={isOpen ? PokeballOuvert : PokeballFermer}
          alt={`Pokeball ${isOpen ? "ouvert" : "fermé"}`}
          className={`relative 
          ${isOpen ? "max-w-[75%]" : "max-w-[50%]"} 
           z-[900] hover:scale-110 hover:cursor-pointer`}
          onMouseEnter={() => {
            setHoverIndex(index);
            showStack(index);
          }}
          onClick={() => {
            setStack(item.name);
            if (isOpen) {
              onChoose(stack);
            }
          }}
        />
        {isOpen && (
          <img
            src={item.image}
            alt="item"
            className={`${
              index % 2 === 0 ? "bottom-2" : "top-4 sm:top-6 md:top-8 lg:top-10"
            } z-[900] ${
              index === 1 ? "w-[50%]" : "w-[40%]"
            } absolute left-3 sm:left-7 md:left-8 lg:left-10 hover:cursor-pointer`}
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
  const [show, setShow] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const stack = [
    { name: "React", image: ReactSVG },
    { name: "React Native", image: ReactNativeSVG },
    { name: "Angular", image: AngularSVG },
    { name: "NestJS", image: NestSVG },
    { name: "Django", image: SymphonySVG },
  ];

  return (
    <div id="stack">
      <h2 className="text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-widest">
        Cliquez sur une Pokéball pour explorer les projets associés.
      </h2>
      <div className="flex h-[6rem] sm:h-[10rem] lg:h-[15rem] my-[5%]">
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

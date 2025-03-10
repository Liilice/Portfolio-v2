import { FC, useEffect, useState } from "react";
import PokeballOuvert from "@assets/pokeball-ouvert.svg";
import PokeballFermer from "@assets/pokeball-fermer.svg";
import ReactSVG from "@assets/stack/react.svg";
import ReactNativeSVG from "@assets/stack/react-native-1.svg";
import AngularSVG from "@assets/stack/angular.svg";
import NestSVG from "@assets/stack/nestjs.svg";
import SymphonySVG from "@assets/stack/symfony.svg";
import Fleche from "@assets/fleche-pokemon.svg";
import { PokeballProps, StackChooseProps } from "@interfaces/PokeballItem";
import Button from "./button";

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
  const [openModal, setOpenModal] = useState<boolean>(false);

  const confirmChoose = () => {
    onChoose(stack);
  };

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
          m-10 z-[1000] hover:scale-110 hover:cursor-pointer`}
          onMouseEnter={() => {
            setHoverIndex(index);
            showStack(index);
          }}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={() => {
            setStack(item.name);
            setOpenModal(true);
          }}
        />
        {isOpen && (
          <img
            src={item.image}
            alt="item"
            className={`${
              index % 2 === 0 && "top-49 "
            } top-25 z-[1000] w-[20%] absolute left-23  hover:cursor-pointer`}
            onClick={() => {
              setStack(item.name);
              setOpenModal(true);
            }}
          />
        )}
      </div>
      {openModal && (
        <div className="absolute bottom-0 right-0 border border-black border-solid max-w-xl  p-3 rounded-xl bg-white/50 z-[1000]">
          <p className="mb-4">
            Vous allez être redirigé vers les projets de la stack choisie. Prêt
            à explorer ces nouveaux projets ?
          </p>
          <div className="flex justify-around items-center">
            <div onClick={() => confirmChoose()}>
              <Button text={"Oui"} />
            </div>
            <div
              onClick={() => {
                setStack(null);
                setOpenModal(false);
              }}
            >
              <Button text={"Non"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const StackChoose: FC<StackChooseProps> = ({ onChoose }) => {
  const [show, setShow] = useState<Number|null>(null);
  const [hoverIndex, setHoverIndex] = useState<Number | null>(null);
  const stack = [
    { name: "react", image: ReactSVG },
    { name: "reactNative", image: ReactNativeSVG },
    { name: "angular", image: AngularSVG },
    { name: "nest", image: NestSVG },
    { name: "symfony", image: SymphonySVG },
  ];

  return (
    <div className="flex justify-center relative h-[25rem]">
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
  );
};

export default StackChoose;

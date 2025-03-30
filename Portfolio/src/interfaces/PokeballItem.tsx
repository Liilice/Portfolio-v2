export interface PokeballProps {
  item: { name: string; image: string };
  index: number;
  isOpen: boolean;
  showStack: (index:number) => void;
  hoverIndex: number | null;
  setHoverIndex: (index:number) => void;
  onChoose: (name: string) => void;
}

export interface StackChooseProps {
  onChoose: (name: string) => void;
}

export interface PokeballProps {
  item: { name: string; image: string };
  index: number;
  isOpen: boolean;
  showStack: () => void;
  hoverIndex: number | null;
  setHoverIndex: () => void;
}

export interface StackChooseProps {
  onChoose: (name: string) => void;
}

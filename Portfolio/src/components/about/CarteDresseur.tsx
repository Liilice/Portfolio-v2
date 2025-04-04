import aboutMe from "../../datas/aboutMe.json";

const CarteDresseur = () => {
  return (
    <ul className="flex flex-col justify-between w-[100%]">
      {aboutMe.accueil.map(
        (item: { title: string; description: string[] }, index: number) => (
          <li
            key={`accueil_${index}`}
            className="fontArial flex justify-between items-center bg-white/75 mb-5 rounded-xl py-3 px-3"
          >
            <p>{item.title}</p>
            <ul>
              {item.description.map((elem: string, index: number) => (
                <li key={`description_${index}`} className="fontArial" >{elem}</li>
              ))}
            </ul>
          </li>
        )
      )}
    </ul>
  );
};

export default CarteDresseur;

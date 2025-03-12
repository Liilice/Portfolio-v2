import diplome from "@datas/diplome.json";
import { FormationProps } from "@interfaces/AboutProps";

const Diplomes = () => {
 
  return (
    <div className="border-l-2 border-solid border-white">
      <ul>
        {diplome.formation.map((item: FormationProps, index: number) => (
          <li className="timelineContent mb-6" key={`formation_${index}`}>
            <h3 className="font-bold text-2xl mb-2">
              {item.annee} : {item.ecole}
            </h3>
            <p>{item.diplome}</p>
            <ul className="ml-5">
              {item.description &&
                item.description.map((elem: string, index: number) => (
                  <li key={`description_${index}`}>- {elem}</li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Diplomes;

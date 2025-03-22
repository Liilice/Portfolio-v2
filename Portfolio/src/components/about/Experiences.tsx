import experience from "@datas/experience.json";
import { ExpProps, ExpDescriptionProps } from "@interfaces/AboutProps";

const Experiences = () => {
  return (
    <div className="border-l-2 border-solid border-white">
      <ul>
        {experience.exp.map((item: ExpProps, index: number) => (
          <li className="timelineContent mb-6" key={`experience_${index}`}>
            <h3 className="font-bold">
              {item.years} : {item.workplace}
            </h3>
            <h4 className="font-normal italic"> {item.post} </h4>
            <p>Tâches effectués :</p>
            <ul className="ml-5">
              {item.description.map(
                (elem: ExpDescriptionProps, index: number) => (
                  <li
                    key={`description_${index}`}
                    className="font-semibold mb-1.5"
                  >
                    - {elem.title}
                    <ul>
                      {elem.stacks && (
                        <li className="font-normal ml-5">
                          <p>• {elem.stacks.backend} pour la partie back</p>
                          <p>• {elem.stacks.frontend} pour la partie front</p>
                        </li>
                      )}

                      {elem.tasks &&
                        elem.tasks.map((elem: string, index: number) => (
                          <li
                            key={`tasks_${index}`}
                            className="font-normal ml-5"
                          >
                            • {elem}
                          </li>
                        ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experiences;

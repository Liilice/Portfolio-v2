import picture from "@assets/allpokemon.png";
import { useEffect, useState } from "react";
import ProjectList from "@datas/ProjectList";
import { ProjectDescription } from "@interfaces/AboutProps";
import FlechePokeball from "@assets/pokeball-fleche.svg";

const Project = ({ data }: { data: string }) => {
  const [projectsList, setProjectsList] = useState<ProjectDescription[]>([]);
  const [projectToSee, setProjectToSee] = useState<ProjectDescription>(
    ProjectList[0]
  );

  const filterProject = (stack: string) => {
    const result = ProjectList.filter((elem: ProjectDescription) =>
      elem.language.includes(stack)
    );
    return result;
  };

  useEffect(() => {
    if (data) {
      const filterStack = filterProject(data);
      setProjectsList(filterStack);
      setProjectToSee(filterStack[0]);
    } else {
      setProjectsList(ProjectList);
      setProjectToSee(ProjectList[0]);
    }
  }, [data]);

  return (
    <div className="flex justify-center pb-[2%] lg:h-[35rem]" id="project">
      <div className="flex flex-col lg:flex-row border border-black border-solid p-8 rounded-3xl bg-white/50">
        <div className="flex-1 flex flex-col h-full order-2 lg:order-1">
          <img
            src={picture}
            alt="picture"
            className="flex-1 basis-1/2"
          />
          <p className="bg-[#FCD583] px-5 py-4 rounded-2xl shadow-xl flex-1 basis-1/2 overflow-auto">
            {projectToSee.description}
          </p>
        </div>

        <ul className="flex-1 order-1 overflow-auto lg:order-2 lg:ml-10">
          {projectsList.map((item: ProjectDescription, index: number) => (
            <li
              key={`project_${index}`}
              className={`relative mb-3 px-10 lg:mb-6 lg:px-16 py-2 rounded-2xl shadow-xl hover:cursor-pointer ${
                item.key === projectToSee.key ? "bg-[#FCD583]" : "bg-white"
              }`}
              onClick={() => setProjectToSee(item)}
            >
              {item.key === projectToSee.key && (
                <img
                  src={FlechePokeball}
                  alt="active project"
                  className="absolute top-0 left-0 max-w-[10%] z-[1000]"
                />
              )}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;

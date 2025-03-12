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
      setProjectToSee(filterStack[0]);
      setProjectsList(filterStack);
    } else {
      setProjectsList(ProjectList);
    }
  }, [data]);

  return (
    <div className="flex justify-center mx-[10rem] pb-10 h-[35rem]">
      <div className="border border-black border-solid flex p-8 rounded-3xl bg-white/50">
        <div className="flex-1">
          <img src={picture} alt="picture" className="max-w-[75%]" />
          <p className="bg-[#FCD583] px-5 py-4 rounded-2xl shadow-xl">
            {projectToSee.description}
          </p>
        </div>
        <ul className="flex-1 ml-10 overflow-auto">
          {projectsList.map((item: ProjectDescription, index: number) => (
            <li
              key={`project_${index}`}
              className={`relative mb-6 px-16 py-2 rounded-2xl shadow-xl hover:cursor-pointer ${
                index === projectToSee.key ? "bg-[#FCD583]" : "bg-white"
              }`}
            >
              {index === projectToSee.key && <img src={FlechePokeball} alt="active project" className="absolute top-0 left-0 max-w-[10%] z-[1000]"/>}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;

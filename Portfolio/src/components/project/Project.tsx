import picture from "../../assets/projects/smartMeal.webp";
import { useEffect, useState } from "react";
import ProjectList from "../../datas/ProjectList";
import { ProjectDescription } from "../../interfaces/AboutProps";
import FlechePokeball from "./assets/pokeball-fleche.svg";
import { ChevronRight } from "lucide-react";

const Project = ({ data }: { data: string | null }) => {
  const [projectsList, setProjectsList] = useState<ProjectDescription[]>([]);
  const [projectToSee, setProjectToSee] = useState<ProjectDescription>(
    ProjectList[0]
  );
  const [firstProjectMobile, setFirstProjectMobile] =
    useState<ProjectDescription>(ProjectList[0]);
  const [openProjectMenu, setOpenProjectMenu] = useState(false);

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
      setFirstProjectMobile(filterStack[0]);
    } else {
      setProjectsList(ProjectList);
      setProjectToSee(ProjectList[0]);
    }
  }, [data]);

  return (
    <div className="flex justify-center pb-[2%] lg:h-[35rem]" id="project">
      <div className="flex flex-col lg:flex-row border border-black border-solid p-4 lg:p-8 rounded-3xl bg-white/50">
        <div className="flex-1 flex flex-col h-full order-2 lg:order-1">
          <div className="flex flex-col sm:flex-row mb-2">
            <img
              src={projectToSee?.screen ? projectToSee?.screen : picture}
              alt="picture"
              className="flex-1 basis-1/2 sm:max-w-[50%] mb-3.5 rounded-md"
            />
            {projectToSee.language.length > 0 && (
              <div className="ml-4 lg:ml-8 flex flex-col relative flex-1">
                <h3>Technologies utilisées : </h3>
                <ul className="ml-10 grid grid-cols-2 sm:block">
                  {projectToSee.language.map((techno, index) => (
                    <li key={`${techno}_${index}`} className="list-disc">
                      {techno}
                    </li>
                  ))}
                </ul>
                <a
                  href={projectToSee.lienGithub}
                  className="absolute right-0 sm:bottom-0 flex justify-center items-center italic"
                  target="_blank"
                >
                  <ChevronRight />
                  Voir le projet
                </a>
              </div>
            )}
          </div>
          <p className="bg-[#FCD583] px-5 py-4 rounded-2xl shadow-xl flex-1 basis-1/2 overflow-auto">
            {projectToSee.description}
          </p>
        </div>

        {/* Version Mobile */}
        <ul className="flex-1 order-1 lg:hidden relative mb-4">
          <li className="fontArial mb-2">
            <span>Sélectionner un projet</span>
          </li>
          {firstProjectMobile && (
            <li
              className="relative pl-12 pr-5 py-2 shadow-xl hover:cursor-pointer bg-[#FCD583] flex justify-between items-center fontArial"
              key={`project_0`}
              onClick={() => setOpenProjectMenu(!openProjectMenu)}
            >
              <img
                src={FlechePokeball}
                alt="active project"
                className="absolute top-2 left-2 w-[8%] z-[1000] sm:w-[5%]"
              />
              {firstProjectMobile.name}
              <span onClick={() => setOpenProjectMenu(!openProjectMenu)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </li>
          )}
          {openProjectMenu && (
            <ul className="absolute top-16 w-full h-[10rem] overflow-auto  bg-white/85 border border-solid border-black/50 shadow-lg z-[50]">
              {projectsList.map(
                (item, index) =>
                  firstProjectMobile.name !== item.name && (
                    <li
                      key={`project_${index}`}
                      className="fontArial pl-10 pr-5 py-2 hover:cursor-pointer hover:bg-gray-200 border-b border-solid border-black/50"
                      onClick={() => {
                        setFirstProjectMobile(item);
                        setOpenProjectMenu(false);
                        setProjectToSee(item);
                      }}
                    >
                      {item.name}
                    </li>
                  )
              )}
            </ul>
          )}
        </ul>

        {/* Version Desktop */}
        <ul className="hidden lg:block lg:order-2 lg:ml-10 lg:w-[25%] lg:overflow-auto">
          <li className="fontArial mb-2">Sélectionner un projet</li>
          {projectsList.map((item: ProjectDescription, index: number) => (
            <li
              key={`project_${index}`}
              className={`fontArial relative mb-3 px-10 lg:mb-6 lg:px-16 py-2 rounded-2xl shadow-xl hover:cursor-pointer ${
                item.key === projectToSee.key ? "bg-[#FCD583]" : "bg-white"
              }`}
              onClick={() => setProjectToSee(item)}
            >
              {item.key === projectToSee.key && (
                <img
                  src={FlechePokeball}
                  alt="active project"
                  className="absolute top-0 left-0 max-w-[10%] xl:max-w-[7%] z-[1000]"
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

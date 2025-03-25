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
      setFirstProjectMobile(filterStack[0])
    } else {
      setProjectsList(ProjectList);
      setProjectToSee(ProjectList[0]);
    }
  }, [data]);

  return (
    <div className="flex justify-center pb-[2%] lg:h-[35rem]" id="project">
      <div className="flex flex-col lg:flex-row border border-black border-solid p-8 rounded-3xl bg-white/50">
        <div className="flex-1 flex flex-col h-full order-2 lg:order-1">
          <img src={picture} alt="picture" className="flex-1 basis-1/2" />
          <p className="bg-[#FCD583] px-5 py-4 rounded-2xl shadow-xl flex-1 basis-1/2 overflow-auto">
            {projectToSee.description}
          </p>
        </div>

        {/* Version Mobile */}
        <ul className="flex-1 order-1 lg:hidden relative">
          <li className="fontArial mb-2">Sélectionner un projet</li>
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
        <ul className="hidden lg:block lg:order-2 lg:ml-10 lg:flex-1 lg:overflow-auto">
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

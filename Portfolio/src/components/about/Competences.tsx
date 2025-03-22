import skill from "@datas/skill.json";
import { StackProps } from "@interfaces/AboutProps";
import GithubQr from "@assets/GithubQr.png";

const Competences = () => {
  return (
    <div className="mb-[2%]">
      <ul className="grid grid-cols-2 gap-3 mt-[2%]">
        {skill.stack.map((item: StackProps, index: number) => (
          <li key={`skill_${index}`} className="flex flex-col justify-between border border-solid border-black p-2 rounded-2xl">
            <h3 className="font-bold mb-2 fontSolid tracking-[.1em] text-center ">{item.title}</h3>
            <ul>
              {item.techno.map((stack: string, index: number) => (
                <li key={`stack_${index}`} className="ml-2">
                  • {stack}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center">
        <img src={GithubQr} alt="Github QR Code" className="w-[35%] h-[35%] md:w-[25%] md:h-[25%]" />
        <div className="py-2">
          <p className="pb-4">
            Ci-dessous, quelques exemples de réalisations effectuées durant la
            formation
          </p>
          <a href="https://github.com/Liilice" target="_blank" className="underline">Github</a>
        </div>
      </div>
    </div>
  );
};
export default Competences;

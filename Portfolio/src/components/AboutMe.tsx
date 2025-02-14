import Button from "./button";
import NavBar from "./navBar";

const AboutMe = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" flex flex-col items-center">
        <NavBar />
        <Button text={"Télécharger CV"} />
      </div>
      <img src="" alt="" />
    </div>
  );
};

export default AboutMe;

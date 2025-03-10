import picture from "@assets/allpokemon.png";

const Project = () => {
  const lists = [
    "HealthFlow",
    "Super app",
    "Micro-services",
    "Previously-on",
    "My-events",
    "E-commerce ",
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="w-[75%] border border-black border-solid flex">
        <div>
          <img src={picture} alt="picture" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Phrase
            Projets
          </p>
        </div>
        <ul>
          {lists.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;

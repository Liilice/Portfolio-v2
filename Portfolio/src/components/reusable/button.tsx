import ButtonProps from "../../interfaces/ButtonProps";

const Button = (data: ButtonProps) => {
  return (
    <>
      <button
        className="bg-[#FCD583] px-10 py-4 rounded-2xl shadow-xl hover:cursor-pointer hover:scale-[1.05] mb-[3%] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
      >
        {data.text}
      </button>
    </>
  );
};

export default Button;

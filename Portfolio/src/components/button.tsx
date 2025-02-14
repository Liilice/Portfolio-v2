import ButtonProps from "@interfaces/ButtonProps"

const Button = (data: ButtonProps)=> {
    return <>
    <button className="bg-[#FCD583] px-10 py-4 rounded-2xl shadow-xl hover:cursor-pointer hover:scale-[1.05]">{data.text}</button>
    </>;
}

export default Button;
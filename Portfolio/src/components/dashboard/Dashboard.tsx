import { useEffect, useState } from "react";
import Profil from "../../assets/givrali.png";
import {
  House,
  Settings,
  LogOut,
  Search,
  X,
  Square,
  // SquareCheck,
  // Star,
} from "lucide-react";
// import { EmailProps } from "../../interfaces/EmailProps";
import { useMail } from "../../context/MailContext";
import type { Mail } from "../../context/MailContext";

const Dashboard = () => {
  const { dispatch } = useMail();
  const [emails, setEmails] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}contact`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (data) {
          console.log(data);
          setEmails(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const toogleCheck = (mail: Mail) => {
    dispatch({ type: "ADD_MAIL_PENDING", payload: mail });
  };
  return (
    <main className="flex min-h-screen">
      <aside className="w-[15%] bg-[#2B2364] flex flex-col justify-around items-center text-white">
        <div className="flex flex-col justify-center items-center">
          <img
            src={Profil}
            alt="pokeball sans border"
            className="max-w-[100%]"
          />
          <h3 className="border-b-2 border-white w-max">NAME</h3>
        </div>
        <ul className="w-full">
          <li className="flex justify-start items-center my-4 pl-10 py-4 hover:bg-[#BF3DB5] hover:cursor-pointer">
            <House
              size={30}
              color="#ffffff"
              strokeWidth={2.25}
              className="mr-2"
            />
            Dashboard
          </li>
          <li className="flex justify-start items-center my-4 pl-10 py-4 hover:bg-[#BF3DB5] hover:cursor-pointer">
            <Settings
              size={30}
              color="#ffffff"
              strokeWidth={2.25}
              className="mr-2"
            />
            Settings
          </li>
          <li className="flex justify-start items-center my-4 pl-10 py-4 hover:bg-[#BF3DB5] hover:cursor-pointer">
            <LogOut
              size={30}
              color="#ffffff"
              strokeWidth={2.25}
              className="mr-2"
            />
            Logout
          </li>
        </ul>
      </aside>
      <section className="w-[85%] flex flex-col items-center">
        <Search
          size={24}
          strokeWidth={2.25}
          color="#999494"
          className="absolute top-[1.5rem] left-[18%]"
        />
        <input
          placeholder="Email"
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="w-[95%] h-[2.5rem] border-1 border-gray-300 rounded-xl mt-4 text-black pl-10 py-2"
        />
        <X
          size={28}
          color="#999494"
          strokeWidth={2.25}
          className="absolute top-[1.5rem] right-[3%] cursor-pointer"
        />
        <table className="mt-4 w-[95%]">
          <tbody>
            {emails.length > 0 &&
              emails.map((email: Mail) => (
                <tr key={email.id}>
                  <th
                    className="w-[2%] cursor-pointer"
                    onClick={() => toogleCheck(email)}
                  >
                    <Square size={28} color="#999494" strokeWidth={2.25} />
                    {/* <SquareCheck size={28} color="#696969" strokeWidth={2.25} /> */}
                  </th>

                  <td className="w-[25%] text-start pl-4">{email.email}</td>
                  <td className="w-[60%] pl-4">{email.subject}</td>
                  <td className="w-[15%] text-end">
                    {new Date(email.updatedAt).toLocaleString("fr-FR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Dashboard;

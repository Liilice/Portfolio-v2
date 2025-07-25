import { useEffect, useState } from "react";
import Profil from "../../assets/givrali.png";
import { House, Settings, LogOut } from "lucide-react";

const Dashboard = () => {
  const [emails, setEmails] = useState([]);

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
          setEmails(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <main className="flex min-h-screen text-white">
      <aside className="w-[15%] bg-[#2B2364] flex flex-col justify-around items-center">
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
      <section>Dashboard</section>
    </main>
  );
};

export default Dashboard;

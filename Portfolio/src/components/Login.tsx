import { useState } from "react";
import Modal from "react-modal";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "35%",
    padding: "1.5rem",
    borderRadius: "8px",
  },
};
const Login = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const closeModal = () => {
    setOpenModal(false);
  };

  const submit = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Veuillez remplir tout les champs !!! ");
    }

    const formData = { email: email, password };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}auth/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.accessToken) {
          localStorage.setItem("token", data.accessToken);
          navigate("/dashboard");
        }
      }
    } catch {
      toast.error(
        "Oups ! Une erreur s'est produite. Veuillez réessayer plus tard."
      );
    }
  };

  return (
    <div>
      <p
        className="absolute top-0 left-0 m-2 text-white cursor-pointer underline"
        onClick={() => setOpenModal(!openModal)}
      >
        Login
      </p>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <div className="flex flex-row justify-between items-center mb-3">
          <h1>Se connecter</h1>
          <button onClick={closeModal}>
            <X size={28} strokeWidth={2.25} />
          </button>
        </div>
        <form
          className="flex flex-col gap-5 w-full text-yellow-900 font-pokemon"
          onSubmit={submit}
        >
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-1 font-bold text-sm text-red-600"
            >
              Adresse Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="dresseur@pokemon.com"
              className="px-4 py-2 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white shadow-md transition duration-200"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-1 font-bold text-sm text-red-600"
            >
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="px-4 py-2 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white shadow-md transition duration-200"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-200 cursor-pointer"
          >
            🎮 Se connecter
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Login;

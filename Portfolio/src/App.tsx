import "./App.css";
import "./fonts/PokemonHollow.ttf";
import "./fonts/PokemonSolid.ttf";
import "./fonts/ArialRoundedMTBold.ttf";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Dashboard from "./components/dashboard/Dashboard";
import { MailProvider } from "./context/MailContext";

function App() {
  return (
    <MailProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </MailProvider>

  );
}

export default App;

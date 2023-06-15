import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import { SaveContextProvider } from "./context/SaveContext";

function App() {
  return (
    <SaveContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Saved" element={<Saved />} />
      </Routes>
    </SaveContextProvider>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aiducator from "./pages/Aiducator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Aiducator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

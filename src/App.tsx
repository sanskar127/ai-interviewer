import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/page";
import About from "./pages/About/page";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

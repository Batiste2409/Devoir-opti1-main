import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
=======
import Header from "./components/Header";
import Home from "./pages/home";
import ("./app.css");
>>>>>>> e05feae95adc8894708ea4f242fa94729ad37c4f

function App() {
  return (
    <BrowserRouter>
      <Header />
<<<<<<< HEAD

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
=======
    /<Routes>
      <Route path="/" element={<Home />} />
>>>>>>> e05feae95adc8894708ea4f242fa94729ad37c4f
      </Routes>
    </BrowserRouter>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> e05feae95adc8894708ea4f242fa94729ad37c4f

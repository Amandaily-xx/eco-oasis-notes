import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MicroUnit from "./pages/MicroUnit";
import MacroUnit from "./pages/MacroUnit";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/micro/:unitId" element={<MicroUnit />} />
      <Route path="/macro/:unitId" element={<MacroUnit />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;

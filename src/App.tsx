import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MicroUnit from "./pages/MicroUnit";
import MacroUnit from "./pages/MacroUnit";
import MicroPractice from "./pages/MicroPractice";
import MacroPractice from "./pages/MacroPractice";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import SupportButton from "./components/SupportButton";
import SiteFooter from "./components/SiteFooter";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/micro/practice" element={<MicroPractice />} />
      <Route path="/macro/practice" element={<MacroPractice />} />
      <Route path="/micro/:unitId" element={<MicroUnit />} />
      <Route path="/macro/:unitId" element={<MacroUnit />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <SiteFooter />
    <SupportButton />
  </BrowserRouter>
);

export default App;

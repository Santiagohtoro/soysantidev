import { Routes, Route } from "react-router-dom";
import { LocaleProvider } from "./i18n/LocaleContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <LocaleProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyecto/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </LocaleProvider>
  );
}

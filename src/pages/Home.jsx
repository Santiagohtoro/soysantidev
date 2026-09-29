import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Stack from "../components/Stack";
import About from "../components/About";
import Contact from "../components/Contact";

/**
 * Página principal: agrupa todas las secciones de una sola página (hero,
 * servicios, proyectos, stack, sobre mí, contacto). Los links de Nav apuntan
 * a "/#seccion" — al llegar aquí (o cambiar el hash estando ya en "/"),
 * desplazamos suavemente hasta el elemento con ese id.
 */
export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // Pequeño delay para asegurar que el layout ya esté pintado.
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Stack />
      <About />
      <Contact />
    </>
  );
}

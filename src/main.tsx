import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home.tsx";
import Projects from "./pages/Projects.tsx";
import Curriculum from "./pages/Curriculum.tsx";
import Contact from "./pages/Contact.tsx";
import "./global.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/curriculum",
    element: <Curriculum />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*", // Captura qualquer rota não definida
    element: <Home />, // Exibe o componente NotFound em caso de rota não encontrada
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AboutMe } from "./components/AboutMe";
import { ProjectsCards } from "./components/ProjectsCards";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  mx-auto">
      <NavBar />
      <div className="flex-grow">
        <AboutMe />
        <ProjectsCards />
      </div>
      <Footer />
    </div>
  );
}

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ProjectCard } from "../components/HandleProjects";

export default function Projects() {
  return (
    <>
      <div className=" flex flex-col items-center h-screen ">
        <NavBar />
        <ProjectCard />
        <div className="md:fixed bottom-0 w-full z-10">
          <Footer />
        </div>
      </div>
    </>
  );
}

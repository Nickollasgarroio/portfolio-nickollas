import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import svg_github from "../assets/svgs/github.svg";

export const ProjectCard = () => {
  return (
    <>
      <div className="w-2/3 self-center m-6 pb-6 min-w-[300px] max-md:w-full max-md:mx-0 max-w-[1200px] mx-auto">
        <h1 className="text-3xl my-6 font-bold max-md:mx-10  ">Projects</h1>
        <Card>
          <CardContent>
            <div className="flex pt-6 w-full border-none max-md:flex-col">
              <div className="relative w-1/2 h-[500px] border rounded-sm p-2 mr-2 max-md:w-full max-md:flex-col max-md:my-2 ">
                <div
                  className="  rounded-2xl p-0"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "scale(0.56)", // Adjust the scale as needed
                    transformOrigin: "top left", // Set the origin for the transformation
                  }}
                >
                  <iframe
                    src="https://nickollasgarroio.github.io/pomodoro-app-react-js/"
                    style={{ width: "175%", height: "175%", border: "none" }}
                    className="w-full h-full rounded-2xl p-0 cursor-pointer"
                    security="restricted"
                  ></iframe>
                </div>
                <div
                  className="absolute bottom-2 right-2 bg-red-600 text-white text-center text-nowrap w-20 rounded-lg p-2 z-10 
"
                  style={{ transform: "rotate(-20deg)" }} // Rotate the div by -20 degrees
                >
                  Try it out!
                </div>
              </div>
              <div className="w-1/2  h-[500px] flex flex-col p-6 border rounded-sm max-md:w-full">
                <h1 className="text-3xl pb-2 font-bold">PomoPal</h1>
                <p className="text-lg p-2">
                  Pomodoro-type application that uses ReactJs and TypeScript to
                  run a timer that can be divided into "Focus" and "Break"
                  cycles in order to improve productivity.
                </p>
                <h1 className="text-3xl pt-4 py-2 font-bold">Concepts used</h1>
                <ul className="list-disc list-inside">
                  <li>ReactJs</li>
                  <li>TypeScript</li>
                </ul>

                <a
                  href="https://github.com/nickollasgarroio/pomodoro-app-react-js"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Check out this project on GitHub"
                  className="mt-auto self-center"
                >
                  <Button className="flex items-center">
                    <img src={svg_github} alt="GitHub" className="w-5 mr-4" />
                    Check out on GitHub
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

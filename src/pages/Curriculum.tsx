import NavBar from "@/components/NavBar";
import foto from "../assets/photos/Nickollas-2.png";
import { Button } from "@/components/ui/button";
import svg_github from "../assets/svgs/github.svg";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Curriculum() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center  ">
        <div className="min-h-screen w-3/4 flex flex-col justify-between max-md:w-full ">
          <div className="flex-grow">
            <Card className="mx-4 my-6 px-10 max-md:px-0 ">
              <CardHeader>
                <CardTitle className="text-center text-4xl font-bold">
                  Nickollas Giordano Arroio
                </CardTitle>
                <p className="text-center text-xl">Full Stack Developer</p>
              </CardHeader>
              <div className="flex justify-center ">
                <img
                  src={foto}
                  alt=""
                  className="object-cover object-center max-w-[500px] max-md:w-full h-full"
                />
              </div>
              <CardContent>
                <section className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">Summary</h2>
                  <p className="text-lg">
                    Proactive Full Stack Developer with experience in creating
                    responsive web applications. Skilled in ReactJS,
                    ReactNative, TypeScript, TailwindCSS, ShadCN CSS. Fluent in
                    English, with availability for travel and on-site work.
                    Currently obtaining Spanish and Italian dual citizenship.
                    Passionate about delivering high-quality code and improving
                    team productivity.
                  </p>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">Experience</h2>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold">
                      Software Developer
                    </h3>
                    <p className="text-md italic">
                      <span className="font-bold">Adequar Saúde</span>: 2016 -
                      2024
                    </p>
                    <ul className="list-disc list-inside">
                      <li>
                        Developed and maintained a internal Python application
                        that improved the internal process of the company.
                      </li>
                      <li>Managed a team of 5 people in costumer services.</li>
                      <li>
                        Optimized application performance, resulting in a 20%
                        decrease in load times.
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold">Project Manager</h3>
                    <p className="text-md italic">
                      <span className="font-bold">Media Portal</span>: 2023-2023
                    </p>
                    <ul className="list-disc list-inside">
                      <li>Responsible for project planning and execution.</li>
                      <li>
                        Managed Relations and communications with clients.
                      </li>
                      <li>
                        Helped and managed a team of 16 people in the company
                        projects.
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">Education</h2>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold">
                      Bachelor's Degree in Systems Analysis and Development
                    </h3>
                    <p className="text-md italic">Unifatecie - 2026</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Relevant coursework: Software Engineering, Web
                        Development, Algorithms and Data Structures.
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">Hard Skills</h2>
                  <ul className="list-disc list-inside grid grid-cols-2 gap-x-8">
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>Agile Methodologies</li>
                    <li>CSS/Sass</li>
                    <li>Git & GitHub</li>
                    <li>Tailwind Css</li>
                    <li>ShadCN</li>
                  </ul>
                </section>
                <section className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>
                  <ul className="list-disc list-inside grid grid-cols-2 gap-x-8">
                    <li>Problem-Solving</li>
                    <li>Communication</li>
                    <li>Time Management</li>
                    <li>Adaptability</li>
                    <li>Teamwork</li>
                    <li>Attention to Detail</li>
                    <li>Continuous Learning</li>
                    <li>Critical Thinking</li>
                  </ul>
                </section>

                <section className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">Projects</h2>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold">PomoPal</h3>
                    <p className="text-md">
                      A Pomodoro-type application that uses ReactJs and
                      TypeScript to help users manage their work and break
                      cycles effectively.
                    </p>

                    <div className="mt-4 flex w-full items-center justify-center space-x-4">
                      <a
                        href="https://github.com/nickollasgarroio/pomodoro-app-react-js"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Check out this project on GitHub"
                        className="mt-auto self-center"
                      >
                        <Button className="flex items-center">
                          <img
                            src={svg_github}
                            alt="GitHub"
                            className="w-5 mr-4"
                          />
                          Check out on GitHub
                        </Button>
                      </a>
                      <Link to="/projects">
                        <Button
                          variant={"outline"}
                          className="flex items-center"
                        >
                          See more in projects
                        </Button>
                      </Link>
                    </div>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

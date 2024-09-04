import screenshot from "../assets/photos/pomopal-screenshot.png";
import { CardComponente } from "./CardComponente";

export const ProjectsCards = () => {
  const handleButtonClick = () => {
    // Handle button click
  };

  const content = `
    <p>Pomodoro-type aplication that uses <strong>ReactJs</strong> and <strong>Typescript</strong> to run a timer that can be divided into "Focus" and "Break" cycles in order to improve productivity.</p>
    <p></p>

  `;

  return (
    <div className="flex items-center justify-center  max-w-[1200px] mx-auto max-md:w-full">
      <CardComponente
        imageSrc={screenshot}
        altText="PomoPal Screenshot"
        title="Projects"
        description="Made with love, this are my projects"
        content={content}
        buttonText="Checkout My Projects!"
        onButtonClick={handleButtonClick}
        textTitle="PomoPal"
        isTextLeft={false}
      />
    </div>
  );
};

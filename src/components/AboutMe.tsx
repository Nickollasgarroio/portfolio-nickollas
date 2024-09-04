// components/AboutMe.js

import picture1 from "../assets/photos/Nickollas-2.png";
import { CardComponente } from "./CardComponente";

export const AboutMe = () => {
  const handleButtonClick = () => {
    // Handle button click
  };

  const content = `
    My name is <strong>Nickollas Giordano Arroio</strong>. I am
    currently based in São Paulo, Brazil, and I am a full-stack
    developer with a strong focus on web development. With
    extensive experience in <strong>React.js</strong>,
    <strong>React Native</strong>, <strong>Tailwind CSS</strong>,
    <strong>Python</strong>, and more, I am equipped to handle
    various challenges in the tech industry.

    I have advanced proficiency in <strong>English</strong>, and
    I am currently in the process of obtaining both <strong>Italian</strong> and <strong>Spanish</strong>
    citizenship. I am eager to explore new opportunities in the
    tech field and am open to roles that challenge my abilities.

    With a natural sense of leadership, I am always ready for
    work-related travel or relocation, making me a versatile and
    committed professional.
  `;

  return (
    <div className="flex items-center justify-center ">
      <CardComponente
        imageSrc={picture1}
        altText="Nickollas Giordano"
        title="About Me"
        description="Let me introduce myself"
        content={content}
        buttonText="Checkout My Resume!"
        onButtonClick={handleButtonClick}
        textTitle="HELLO THERE"
      />
    </div>
  );
};

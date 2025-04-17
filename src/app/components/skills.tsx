import React from "react";
import Section from "./section";

const Skills = () => {
  return (
    <Section className="scroll-smooth flex flex-col items-center justify-start h-screen">
      <h2 className="text-center w-full mt-10 text-3xl font-bold" id="stack">
        Ma Stack
      </h2>
      {/* Grid responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 mx-auto max-w-4xl">
        {/* Frontend */}
        <div className="text-center p-5 border rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Front</h3>
          <div className="flex flex-wrap justify-center gap-4 mt-5">
            <img
              className="w-24 h-24 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
              alt="Angular logo"
            />
            <img
              className="w-24 h-24 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt="React Logo"
            />
            <img
              className="w-24 h-24 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png"
              alt="Bootstrap Logo"
            />
            <img
              className="w-24 h-24 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="JavaScript logo"
            />
          </div>
        </div>

        {/* Backend */}
        <div className="text-center p-5 border rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold">Back</h3>
          <div className="flex flex-wrap justify-center gap-4 mt-5">
            <img
              className="w-24 h-24 object-contain"
              src="https://www.mindrops.com/fr/images/nodejs-image.webp"
              alt="NodeJs logo"
            />
            <img
              className="w-24 h-24 object-contain"
              src="https://avatars.githubusercontent.com/u/143937?s=280&v=4"
              alt="Symfony logo"
            />
          </div>
        </div>

        {/* Ops - Passe à la ligne sur les écrans sm */}
        <div className="text-center p-5 border rounded-lg shadow-lg sm:col-span-2">
          <h3 className="text-2xl font-bold">Architecture/Ops</h3>
          <div className="flex flex-wrap justify-center gap-4 mt-5">
            <img
              className="w-24 h-24 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
              alt="Git logo"
            />
            <img
              className="w-24 h-24 object-contain"
              src="https://www.troispointzero.fr/content/uploads/2019/07/docker-logo-tutorial-1.png"
              alt="Docker logo"
            />
            <img
              className="w-24 h-24 object-contain"
              src="https://www.opentext.com/assets/images/partners/opentext-aws-logo-cover-416x274.png"
              alt="AWS logo"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;

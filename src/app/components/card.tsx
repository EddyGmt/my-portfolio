import React, { JSX } from "react";

interface CardProps {
  title?: string;
  description: string;
  img: string;
  lienGit?: string;
  lienDemo?: string;
  stacks?: string[];
}

// const stackIcons: Record<string, JSX.Element> = {
//   React: <FaReact className="text-blue-500" />,
//   "Node.js": <FaNodeJs className="text-green-600" />,
//   Vue: <FaVuejs className="text-green-500" />,
//   CSS: <FaCss3Alt className="text-blue-700" />,
// };

const Card: React.FC<CardProps> = ({
  title,
  description,
  img,
  lienGit,
  stacks,
}) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <a href={lienGit}>
        <div className="w-[300px] h-[200px] overflow-hidden rounded-2xl">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
          />
        </div>
      </a>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold text-center md:text-left">
            {title}
          </div>
          <p className="text-white text-center md:text-left">{description}</p>
        </div>
        <div className="flex flex-wrap gap-8">
          {stacks && (
            <div className="flex gap-2 flex-wrap justify-center mt-2">
              {stacks.map((stack, i) => (
                <span
                  key={i}
                  title={stack}
                  className="rounded-lg bg-blue-500 text-white p-1 justify-center items-center md:justify-start"
                >
                  {stack}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

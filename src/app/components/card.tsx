import { Span } from "next/dist/trace";
import { space } from "postcss/lib/list";
import React, { JSX } from "react";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaCss3Alt,
} from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  img: string;
  lienGit?: string;
  lienDemo?: string;
  stacks?: string[];
}

const stackIcons: Record<string, JSX.Element> = {
  React: <FaReact className="text-blue-500" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  Vue: <FaVuejs className="text-green-500" />,
  CSS: <FaCss3Alt className="text-blue-700" />,
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  img,
  lienGit,
  stacks,
}) => {
  return (
    <div className="w-72 h-fit group rounded-lg shadow-lg border m-auto">
      <div className="relative overflow-hidden">
        <img src={img} alt={title} className="rounded-lg" />
        <div className="h-96 w-full object-cover text-center pt-5">{title}</div>
        <div className="text-center">{description}</div>
        <div
          className="absolute h-full w-full bg-black/20 inline-block flex items-center justify-center 
                -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {stacks && (
            <div className="flex gap-2 flex-wrap justify-center mt-2">
              {stacks.map((stack, i) => (
                <div key={i} title={stack}>
                  {stackIcons[stack] || <span>{stack}</span>}
                </div>
              ))}
            </div>
          )}
          <div className="p-2">
          <a href={lienGit} className="text-white py-2 px-5" target="blank">
            <FaGithub size={20} />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

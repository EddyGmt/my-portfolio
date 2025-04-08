import React from "react";

interface CardProps {
  title: string;
  description: string;
  img: string;
  lienGit?: string;
  lienDemo?: string; 
}

const Card: React.FC<CardProps> = ({ title, description, img, lienGit }) => {
  return (
    <div className="w-72 h-fit group rounded-lg shadow-lg border m-auto">
      <div className="relative overflow-hidden">
        <img src={img} alt={title} className="" />
        <div className="h-96 w-full object-cover text-center pt-5">{title}</div>
        <div className="text-center">{description}</div>
        <div
          className="absolute h-full w-full bg-black/20 flex items-center justify-center 
                -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={lienGit}
            className="text-white py-2 px-5"
            target="blank">
            Lien Git
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

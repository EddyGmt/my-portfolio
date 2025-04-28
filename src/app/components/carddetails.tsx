"use client"
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function CardDetail({ project, onClose }: any) {
  return (
    <motion.div
      layoutId={project.id}
      className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg p-8 max-w-xl w-full"
        layout
        onClick={(e) => e.stopPropagation()}
      >
        <img src={project.img} alt={project.title} className="w-full rounded" />
        <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
        <p className="mt-2 text-gray-700">{project.description}</p>

        <div className="flex gap-3 mt-4">
          {project.stacks.map((stack: string) => (
            <span
              key={stack}
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm"
            >
              {stack}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          {project.lienGit && (
            <a href={project.lienGit} target="_blank" className="text-indigo-600 flex items-center gap-2">
              <FaGithub /> GitHub
            </a>
          )}
          {project.lienDemo && (
            <a href={project.lienDemo} target="_blank" className="text-blue-600">
              Voir la démo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

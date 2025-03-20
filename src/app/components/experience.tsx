import React from "react";
import Section from "./section";

const Experience = () => {
  const works = [
    {
        id: 1, 
        emploi: "",
        dateDebut:"",
        dateFin:"",
        type:""
    },
    {
        id: 2, 
        emploi: "",
        dateDebut:"",
        dateFin:"",
        type:""
    },
    {
        id: 3, 
        emploi: "",
        dateDebut:"",
        dateFin:"",
        type:""
    },
    {
        id: 4, 
        emploi: "",
        dateDebut:"",
        dateFin:"",
        type:""
    },
    {
        id: 5, 
        emploi: "",
        dateDebut:"",
        dateFin:"",
        type:""
    },

];
  return (
    <Section className="scroll-smooth flex flex-col items-center justify-start h-screen">
      <h2 className="text-center w-full mt-10 text-3xl font-bold">
        Mes expériences
      </h2>
      <div className="m-auto mt-10 flex col-span-2 h-full w-full justify-center rounded-lg shadow-xl border-15">
        Exemple
      </div>
    </Section>
  );
};

export default Experience;

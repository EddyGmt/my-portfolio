import React from "react";
import Section from "./section";

const Experience = () => {
  // const works = [
  //   {
  //     id: 1,
  //     emploi: "",
  //     dateDebut: "",
  //     dateFin: "",
  //     type: "",
  //   },
  //   {
  //     id: 2,
  //     emploi: "",
  //     dateDebut: "",
  //     dateFin: "",
  //     type: "",
  //   },
  //   {
  //     id: 3,
  //     emploi: "",
  //     dateDebut: "",
  //     dateFin: "",
  //     type: "",
  //   },
  //   {
  //     id: 4,
  //     emploi: "",
  //     dateDebut: "",
  //     dateFin: "",
  //     type: "",
  //   },
  //   {
  //     id: 5,
  //     emploi: "",
  //     dateDebut: "",
  //     dateFin: "",
  //     type: "",
  //   },
  // ];
  return (
    <Section className="flex flex-col items-center justify-start h-screen">
      <h2
        className="scroll-smooth text-center w-full mt-10 text-3xl font-bold"
        id="about"
      >
        A propos
      </h2>
      <div className="flex-1" />
      <div className="m-auto mt-10 flex col-span-2 h-full w-full justify-center rounded-lg shadow-xl border-15">
        <p>
          Issu d&apos;un master en Ingénierie du web à l&apos;ESGI et d'une
          première expérience en alternance en tant que développeur front chez
          L&A Projets informatique. Je suis maitenant à la recherche de nouveaux
          challenges dans un nouveau cadre affin de parfaire mes acquis autant
          scolaire que professionnel mais également évoluer dans de nouvelles
          perspectives.
        </p>
      </div>
    </Section>
  );
};

export default Experience;

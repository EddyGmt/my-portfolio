import image from "../../../public/img/imgEddy.jpg";

const Hero = () => {
  return (
    <div className="h-full w-full mx-auto relative top-12 pb-20 xl:px-16 px-8 flex md:flex-row flex-col gap-4 justify-center items-center pb-10 pt-4">
      <div className="w-full relative">
        <img
          className="shadow-2xl shadow-rose-600 animate-[spin_12s_linear_infinite] absolute left-0 right-0 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto"
          src={
            "https://media.licdn.com/dms/image/v2/D4E03AQEqpibASvO9bA/profile-displayphoto-shrink_800_800/B4EZSO2HqoGwAg-/0/1737563340179?e=1747872000&v=beta&t=sow1xVG5qs6k7Ny0nftDa_hXaq9G9A4J74YMB0LWN2Y"
          }
          alt="Eddy G"/>
        <img
          className="relative z-10 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30"
          src={
            "https://media.licdn.com/dms/image/v2/D4E03AQEqpibASvO9bA/profile-displayphoto-shrink_800_800/B4EZSO2HqoGwAg-/0/1737563340179?e=1747872000&v=beta&t=sow1xVG5qs6k7Ny0nftDa_hXaq9G9A4J74YMB0LWN2Y"
          }
          alt="Eddy G"
        />
      </div>
      <div className="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white dark:text-gray-800 md:mt-0 sm:mt-8 mt-4">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif">
          Eddy GOMET
        </h1>
        <h3 className="capitalize text-rose-400">
          <span className="typing text-green-500 dark:text-green-700">
            Développeur Fullstack débrouillard
          </span>
        </h3>
        <p>
          Issu d'un master en Ingénierie du web à l'ESGI et d'une première
          expérience en alternance en tant que développeur front chez L&A
          Projets informatique. Je suis maitenant à la recherche de nouveaux
          challenges dans un nouveau cadre affin de parfaire mes acquis autant
          scolaire que professionnel mais également évoluer dans de nouvelles
          perspectives.
        </p>
        <div className="sm:mt-4 mt-2">
          <ul className="flex justify-start justify-around">
            <li>
              <a href="https://www.linkedin.com/in/eddy-gomet/" target="blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/EddyGmt" target="blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/show/3rYk7Z09X2imbNKLzxJBnS?si=817330cc962341da"
                target="blank"
              >
                Podcast Spotify
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;

//* IMAGES IMPORTS
import Bg_Hero from "../assets/images/backgrounds/Bg_HeroGradient.png";
import Element_Hero2 from "../assets/images/elements/IMG_HeroFace.png";
import Element_Hero1 from "../assets/images/elements/Overlay_Elements.png";

//* COMPONENTS IMPORTS
import { Dots, Button } from "../components/ui";
const Home = () => {
  return (
    <>
      <section
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${Bg_Hero})` }}
      >
        {/* Hero Section Decoration */}
        <Dots
          right="top-62 xs:top-75 left-2 xs:gap-3 md:top-113 lg:top-87"
          left="top-30 right-5"
        />

        {/* Grid Area */}
        <div className="main-container padding-container min-h-screen grid grid-cols-1 items-center overflow-clip xl:grid-cols-2">
          {/* Left Grid */}
          <div className="relative">
            {/* Grid Decoration */}
            <img
              src={Element_Hero1}
              alt="Hero Section Element 1"
              className="absolute left-18 -bottom-13 xs:left-0 xs:-bottom-85 md:-bottom-46 md:left-50 lg:-bottom-90 lg:left-20"
              aria-hidden="true"
            />
            {/* Grid Content */}
            <div>
              <h2 className="font-bold text-white uppercase text-2xl xs:text-3xl md:text-[48px]">
                we spark
              </h2>
              <h1 className="text-crimson-rose leading-10 xs:leading-13 md:leading-15 font-bold uppercase text-[2rem] xs:text-[3rem] md:text-[64px]">
                building <br /> experiences
              </h1>
              <p className="relative my-10 md:my-15 pl-7 text-white before:absolute before:top-1/2 before:left-1 before:h-15 before:w-0.5 before:-translate-y-1/2 before:bg-white text-[14px] xs:text-base md:w-[90%] md:text-[18px] lg:w-[80%] xl:w-[100%]">
                We fuse technology, art, and imagination to craft digital
                experiences that don't just impress — they blow minds.
              </p>

              <Button text="learn more" />
            </div>
          </div>

          {/* Right Grid */}
          <div className="relative hidden xl:block">
            <img
              className="absolute -top-80 left-5"
              src={Element_Hero2}
              alt="Hero Section Shape"
              width={600}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

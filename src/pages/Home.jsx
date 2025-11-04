//* IMAGES IMPORTS
import Bg_Hero from "../assets/images/backgrounds/Bg_HeroGradient.png";
import Element_Hero2 from "../assets/images/elements/IMG_HeroFace.png";
import Element_Hero1 from "../assets/images/elements/Overlay_Elements.png";
const Home = () => {
  return (
    <>
      <section
        className="bg-cover bg-center h-[812px] md:h-[1114px] lg:h-[926px]"
        style={{ backgroundImage: `url(${Bg_Hero})` }}
      >
        {/* Hero Section Decoration */}
        {/* Left Side Dots */}
        <div className="absolute top-62 xs:top-75 left-2 flex flex-col items-center gap-1 xs:gap-3 md:top-113 lg:top-87">
          <div className="size-0.5 bg-white" />
          <div className="size-0.5 bg-white" />
          <div className="size-0.5 bg-white" />
          <div className="size-0.5 bg-white" />
        </div>
        {/* Right Side Dots */}
        <div className="absolute top-30 right-5 flex flex-col items-center gap-3">
          <div className="size-0.5 bg-white" />
          <div className="size-0.5 bg-white" />
          <div className="size-0.5 bg-white" />
          <div className="size-0.5 bg-white" />
          <div className="h-30 w-0.5 bg-white" />
        </div>

        {/* Grid Area */}
        <div className="main-container padding-container h-[812px] md:h-[1114px] lg:h-[926px] grid grid-cols-1 items-center overflow-clip xl:grid-cols-2">
          {/* Left Grid */}
          <div className="relative">
            {/* Grid Decoration */}
            <img
              src={Element_Hero1}
              alt="Hero Section Element 1"
              className="absolute left-18 -bottom-13 xs:left-0 xs:-bottom-85 md:-bottom-46 md:left-50 lg:-bottom-90 lg:left-20"
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

              <button className="bg-midnight-purple flex items-center px-6 py-3 font-bold text-white uppercase relative">
                learn more
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="relative hidden xl:block">
            <img
              className="absolute -top-80 left-5"
              src={Element_Hero2}
              alt="Hero Section Shape"
              width={600}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

//* REACT IMPORTS
import { useState, useEffect, useRef } from "react";

//* REACT ROUTER DOM IMPORT
import { Link, useLocation } from "react-router-dom";

//* GSAP IMPORTS
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

//* CONSTANTS IMPORT
import { NAV_LINKS } from "../../constants/index";

//* IMAGES IMPORTS
import Logo from "../../assets/images/logo/omg_logo.png";

const Navbar = () => {
  // STATES
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // REFS
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const arrowRef = useRef(null);
  const tl = useRef(null);

  const location = useLocation();

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // BODY OVERFLOW LOCK
  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "auto";
  }, [nav]);

  // GSAP SETUP
  useGSAP(() => {
    tl.current = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" },
    });

    // Set initial state
    gsap.set(menuRef.current, {
      width: 0,
      height: 0,
      opacity: 0,
      transformOrigin: "top left",
    });

    // Animate width first
    tl.current.to(menuRef.current, {
      width: "90vw",
      opacity: 1,
      duration: 0.4,
    });

    // Animate height next
    tl.current.to(menuRef.current, {
      height: "auto",
      duration: 0.4,
    });

    // Then stagger the links
    tl.current.fromTo(
      linksRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, stagger: 0.1 },
      "-=0.2"
    );
  }, []);

  // Handle open/close animation
  useEffect(() => {
    if (tl.current) {
      if (nav) {
        tl.current.play();
        gsap.to(arrowRef.current, {
          rotate: 180,
          duration: 0.3,
          ease: "power2.inOut",
        });
      } else {
        tl.current.reverse();
        gsap.to(arrowRef.current, {
          rotate: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    }
  }, [nav]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ease-linear ${
        isScrolled ? "bg-black/20 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div
        className={`main-container padding-container flex items-center justify-between transition-[padding] duration-200 ease-linear ${
          isScrolled ? "p-2" : "p-4"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="OMG logo" width={100} height={100} />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex">
          <ul className="flex space-x-6">
            {NAV_LINKS.map(({ key, href, label }) => {
              const isActive = location.pathname === href;
              return (
                <li key={key}>
                  <Link
                    to={href}
                    className={`relative block px-4 text-sm font-black tracking-widest whitespace-nowrap uppercase transition-colors duration-300 hover:text-crimson-rose ${
                      isActive ? "text-crimson-rose" : "text-white"
                    }`}
                    aria-current={isActive ? `${label} Page` : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Quick Call Button */}
        <button className="bg-midnight-purple hidden items-center px-6 py-3 font-bold text-white uppercase lg:flex">
          book a quick call
          <span>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7V16"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {/* Mobile Navigation */}
        <div className="relative lg:hidden">
          {/* Toggle Button */}
          <button
            className="px-3 py-3 text-white bg-midnight-purple flex items-center justify-center"
            onClick={() => setNav(!nav)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={nav}
          >
            <svg
              ref={arrowRef}
              width="15"
              height="15"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.46708 7.36776L1.46582 1.76774L1.89446 1.36776L7.16203 6.28314L7.76825 6.28675L13.0372 1.3701L13.4658 1.77008L7.46708 7.36776Z"
                fill="#E5E5E5"
                stroke="#E5E5E5"
                strokeWidth="2"
              />
            </svg>
          </button>

          {/* Animated Mobile Menu */}
          <div
            ref={menuRef}
            className={`absolute top-10 right-0 mt-2 origin-top-left overflow-hidden bg-midnight-purple shadow-lg p-4 ${
              nav ? "block" : "pointer-events-none"
            }`}
          >
            <ul className="space-y-3 text-lg font-black tracking-widest uppercase">
              {NAV_LINKS.map(({ key, href, label }, i) => {
                const isActive = location.pathname === href;
                return (
                  <li
                    key={key}
                    ref={(el) => (linksRef.current[i] = el)}
                    onClick={() => setNav(false)}
                  >
                    <Link
                      to={href}
                      className={`${
                        isActive ? "text-crimson-rose" : "text-white"
                      } transition-colors duration-300 hover:text-crimson-rose`}
                      aria-current={isActive ? `${label} Page` : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

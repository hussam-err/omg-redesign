const ArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2 relative z-10"
  >
    <path
      d="M7 17L17 7M17 7H8M17 7V16"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Button = ({
  text,
  showArrow = true,
  onClick = () => {},
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-midnight-purple flex items-center px-6 py-3 font-bold text-white uppercase relative group overflow-hidden cursor-pointer ${className}`}
    >
      <span className="relative z-10">{text}</span>
      {showArrow && <ArrowIcon />}
      <div className="absolute inset-0 bg-crimson-rose -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
    </button>
  );
};

export default Button;

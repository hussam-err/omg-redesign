const Dots = ({ right, left }) => (
  <>
    <div className={`absolute ${right} flex flex-col items-center gap-1`}>
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="size-0.5 bg-white" />
        ))}
    </div>

    <div className={`absolute flex flex-col items-center gap-3 ${left}`}>
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="size-0.5 bg-white" />
        ))}
      <div className="h-30 w-0.5 bg-white" />
    </div>
  </>
);

export default Dots;

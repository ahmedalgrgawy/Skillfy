const Btn = ({
  style,
  children,
  bg = "#703BF7",
  rounded = "0.5rem",
  text = "#FFF",
  px = "16px",
  py = "16px",
}) => {
  const styleBtn = {
    backgroundColor: bg,
    borderRadius: rounded,
    color: text,
    padding: `${py} ${px}`,
  };
  return (
    <button className={` ${style}  btn  hover:bg-[#692ffe] `}>
      {children}
    </button>
  );
};

export default Btn;

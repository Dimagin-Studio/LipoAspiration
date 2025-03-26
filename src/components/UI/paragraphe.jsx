export function Paragraphe({ children, color, className }) {
  const colorClasses = {
    black: "text-black font-quicksand text-xl font-medium",
    white:
      "text-xl sm:text-2xl md:text-3xl font-quicksand text-white max-w-2xl mx-auto",
  };
  const classes = colorClasses[color];
  return <p className={`${classes} ${className}`}>{children}</p>;
}

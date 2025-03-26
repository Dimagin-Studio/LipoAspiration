export function Title({ color, children, className = "" }) {
  const colorClasses = {
    black:
      "text-3xl sm:text-4xl lg:text-5xl font-oswald text-black mb-6 font-bold",
    white:
      "text-3xl sm:text-4xl lg:text-7xl font-oswald text-white mb-6 font-regular",
  };

  const classes = colorClasses[color];

  return <h2 className={`${classes} ${className}`}>{children}</h2>;
}

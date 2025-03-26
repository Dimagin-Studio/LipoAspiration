export function Button({ text, className }) {
  return (
    <a
      href="/contact"
      className={` font-quicksand text-semibold text-white bg-[#218EF5] p-3 rounded-full hover:bg-blue-600 ${className}`}
    >
      {text}
    </a>
  );
}

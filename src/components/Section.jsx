export function Section({ children, className, identifiant = "" }) {
  return (
    <section
      id={identifiant}
      className={`container mx-auto px-4 py-16 sm:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

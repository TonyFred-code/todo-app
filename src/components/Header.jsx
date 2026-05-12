import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="uppercase font-bold tracking-[0.3em] text-white text-3xl md:text-4xl">
        todo
      </h1>
      <ThemeToggle />
    </header>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-end px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="max-w-2xl border-l border-sky-300/40 pl-6">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-sky-300">
          About
        </p>
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          A portfolio with depth, motion, and a little atmosphere.
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-200">
          This section is wired to the second 3D scene so you can keep shaping
          the visual story while the local preview stays stable.
        </p>
      </div>
    </section>
  );
}

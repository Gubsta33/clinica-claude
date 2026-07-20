import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
      <p className="eyebrow">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        Erro 404
      </p>
      <h1 className="mt-4 max-w-xl font-display text-5xl text-dark md:text-6xl">
        Esta página não existe — mas o seu cuidado, sim.
      </h1>
      <p className="mt-5 max-w-md text-muted">
        O endereço pode ter mudado ou nunca existiu. Que tal voltar ao início ou
        explorar os tratamentos?
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-dark">Voltar ao início</Link>
        <Link href="/tratamentos" className="btn btn-ghost">Ver tratamentos</Link>
      </div>
    </section>
  );
}

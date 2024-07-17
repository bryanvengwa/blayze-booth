import ClientCard from './ClientCard';

export default function ClientSection() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-wrap space-x-[0.5em] space-y-[0.5em]  items-center justify-center md:justify-between">
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>
      </div>
    </section>
  );
}

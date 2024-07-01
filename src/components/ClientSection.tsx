import ClientCard from './ClientCard';

export default function ClientSection() {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between">
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>
      </div>
    </section>
  );
}

import ClientCard from './ClientCard';

export default function ClientSection() {
  return (
    <section className='bg-[#F1F1F1] py-[1rem]' >
      <div className="container-md-fluid">
        <div className="flex flex-wrap sm:space-x-[0.5em] sm:space-y-[0.5em] md:gap-5  items-center justify-center ">
          <ClientCard />
          <ClientCard down={true} />
          <ClientCard />
          <ClientCard down={true} />
          <ClientCard />
        </div>
      </div>
    </section>
  );
}

import ClientCard from './ClientCard';

export default function ClientSection() {
  return (
    <section className='bg-[#F1F1F1] py-[1rem] lg:pb-[8em] lg:pt-[2em]' >
      <div className="container-lg  ">
      <h3 className='jost-bold lg:translate-x-[2em] text-[1.2rem] lg:text-[1.4rem]' >Meet Some Of Our Business Clients</h3>
        <div className="flex flex-wrap lg:translate-y-[3em] mt-2 space-x-[0.5em]  md:space-x-0 space-y-[0.5em] md:gap-5 lg:gap-3 items-center justify-center ">
          <ClientCard />
          <ClientCard down={true} />
          <ClientCard />
          <ClientCard down={true} />
          <ClientCard />
          
          <ClientCard extra={true}   />
        </div>
      </div>
    </section>
  );
}

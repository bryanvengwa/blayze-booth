export default function ConsultationForm() {
  return (
    <form className="w-full flex flex-col gap-2 p-4 h-full bg-[#010123] ">
      <h3 className="text-white jost-bold capitalize text-[1.2rem]">
        Free Consultation
      </h3>
      <div className="w-full flex flex-col gap-2 bg-[#010123]  ">
        <input
          placeholder="Full Name"
          required
          className="capitalize p-[0.5rem] rounded-[7px] placeholder-white jost-regular bg-transparent border-2 border-solid border-white"
        />
        <input
          placeholder="email"
          required
          className="capitalize p-[0.5rem] rounded-[7px] placeholder-white jost-regular bg-transparent border-2 border-solid border-white"
        />
        <input
          placeholder="Service"
          required
          className="capitalize p-[0.5rem] rounded-[7px] placeholder-white jost-regular bg-transparent border-2 border-solid border-white"
        />

        <textarea
          placeholder="Write Message....."
          className="bg-transparent p-[0.5rem] rounded-[7px] placeholder-white border-2 border-solid border-white"
          rows={4}
        />
        <button className="bg-white rounded-[7px] jost-bold p-2 px-2" >
            SEND
        </button>
      </div>
    </form>
  );
}

import MiniHeader from '@/components/MiniHeader';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="w-full">
      <div className="mt-10"></div>
      <MiniHeader />
      <div className="mt-4"></div>
      <div className="flex justify-center">
        <p className="jost-paragraph text-center leading-[1.2rem] text-[#0000008A] w-[90%] md:w-[80%] ">
          Epignosis Media Creations is a private owned meadia and software
          development company incorpoted in the year 2019 and we made strides to
          refine products and services prior to full scale operations in 2022. A
          mandate to secure the presents and future by creating quality products
          and services eMedia fully commits tonclientele growth and seccuse
          which is priority to our success story
        </p>
      </div>
      <div className="mt-10"></div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Image
                src="/images/black-programmer.webp"
                height={800}
                width={800}
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="flex gap-3  items-end h-[4rem] ">
                <h2 className="jost-bold text-[1.5rem] mb-[-6px]">
                  Who Are We
                </h2>
              </div>
              <div className="mt-7"></div>

              <div className="flex flex-col ">
                <p className="jost-paragraph leading-5 ">
                  At eMC we believe that collaboration is key to success. We
                  work closely with our clients to understand their needs and
                  wants, and to develop solutions that meet their unique
                  requirements. We start by getting to know our clients'
                  businesses. We want to understand their goals, their
                  challenges, and their target audience. We also want to
                  understand their industry and the competitive landscape.
                </p>
                <p className="jost-paragraph leading-5 ">
                  At eMC we believe that collaboration is key to success. We
                  work closely with our clients to understand their needs and
                  wants, and to develop solutions that meet their unique
                  requirements. We start by getting to know our clients'
                  businesses. We want to understand their goals, their
                  challenges, and their target audience. We also want to
                  understand their industry and the competitive landscape. Once
                  we have a good understanding of our clients' needs, we work
                  with them to develop a custom solution. We take the time to
                  listen to their feedback and to make sure that we are meeting
                  their expectations. We are also committed to building strong
                  relationships with our clients. We believe that the best way
                  to get along with them is to be honest, transparent, and
                  responsive. We are always available to answer their questions
                  and to provide them with the support they need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

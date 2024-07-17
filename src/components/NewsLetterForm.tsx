import StylishButton from './StylishButton';

export default function NewsLetterForm() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="flex flex-col min-h-[30vh] items-center justify-center w-full border-2 border-solid border-black bg-black text-white">
                <br />
                <div className="flex gap-2  flex-col">
                  <h5 className="text-center jost-regular">
                    Sign Up for our newsLetter to get the latest news and
                    promotions
                  </h5>
                  <p className="text-center jost-regular">
                    We do it all with the #1 customer service
                  </p>
                </div>

                <div className="flex mt-3 items-center flex-col md:flex-row  w-full gap-2 justify-center">
                  <input type="text" className="bg-white h-[3rem] w-[80%] " />
                  <StylishButton
                    outerColor="bg-red-500"
                    innerColor="bg-white"
                    color="black"
                    text="Submit"
                  />
                </div>
                <br />

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

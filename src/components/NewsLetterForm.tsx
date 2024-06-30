import StylishButton from './StylishButton';

export default function NewsLetterForm() {
  return (
    <section>
      <div className="container">
        <div className="row">
   <div className="col-md-12">
          <form>
          <div className="flex flex-col h-[30vh] items-center justify-center w-full border-2 border-solid border-black bg-black text-white">
            <div className="flex gap-2 flex-col">
            <h5>
                Sign Up for our newsLetter to get the latest news and promotions
              </h5>
              <p>We do it all with the #1 customer service</p>
            </div>
              <div className="flex gap-2 items-end w-full justify-center">
                <input type="text" className="bg-white h-[3rem] w-[50%] " />
                <StylishButton innerColor='white' color='black' text="Submit" />
              </div>
            </div>
          </form>

   </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';


export default function ServiceIntro() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <Image src={'/'} alt=''  />
                </div>
                <div className="col-md-7"></div>
            </div>
        </div>
      
    </div>
  )
}

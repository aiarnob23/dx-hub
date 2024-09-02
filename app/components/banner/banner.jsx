import banner from '../../../public/banner.png';
import Image from "next/image";


export default function Banner() {
  return (
    <div className="flex flex-col-reverse lg:flex-row px-2 lg:px-0 justify-between gap-16 items-center">
      <div className="flex-1 antialiased fade-in-left">
        <h3 className="text-4xl  leading-[50px] mb-10 font-bold">
          Perfect time to make your presence stand out with astonishing identity
          design.
        </h3>
        <button className=" px-3 rounded-lg bg-primary text-white py-1">Contact Us</button>
      </div>
      <div className="lg:w-[900px] fade-in-right flex-1">
        <Image src={banner} placeholder="blur" alt='banner'/>
      </div>
    </div>
  );
}

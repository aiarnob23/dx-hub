import Link from "next/link";

   
export default function AboutUs() {
  return (
    <div className="container mx-auto flex gap-28 items-center mt-16">
      <div className="pr-16">
        <h2 className="text-primary text-2xl font-semibold mb-10">
          About us
        </h2>
        <p className="text-xl text-gray-800 font-medium leading-[30px]">
          We are a team of design experts. Always come up with innovative design
          ideas. Our successful design career will help you to provide a great
          identity among your competitors.
        </p>
        <div className="mt-12 ">
          <div>
            <Link
              className="text-gray-700 flex items-center gap-5"
              href="/about"
            >
              <span> Learn more about us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="16"
                height="16"
              >
                <path
                  style={{ fill: "#232326" }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </Link>
          </div>
          <hr className="w-[205px] border-black mt-1" />
        </div>
      </div>
      <div className="h-[300px] rounded-lg bg-[#7087E4] w-full"></div>
    </div>
  );
}
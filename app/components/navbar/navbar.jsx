"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();

  const NavLinks = (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-8 ">
        <Link
          className={`hover:font-semibold px-3 py-1 rounded-lg link no-underline ${
            pathname === "/" ? "bg-primary text-white" : ""
          }`}
          href="/"
        >
          HOME
        </Link>

        <Link
          className={`hover:font-semibold px-3 py-1 rounded-lg link no-underline ${
            pathname === "/about" ? "bg-primary text-white" : ""
          }`}
          href="/about"
        >
          ABOUT
        </Link>
        <Link
          className={`hover:font-semibold px-3 py-1 rounded-lg link no-underline ${
            pathname === "/portfolio" ? "bg-primary text-white" : ""
          }`}
          href="/portfolio"
        >
          PORTFOLIO
        </Link>
        <Link
          className={`hover:font-semibold px-3 py-1 rounded-lg link no-underline ${
            pathname === "/contact" ? "bg-primary text-white" : ""
          }`}
          href="/contact"
        >
          CONTACT
        </Link>
      </div>
    </>
  );

    return (
      <nav className="container mx-auto mt-6">
        <div className="flex  justify-between items-center">
          <div className="flex w-full flex-row-reverse items-center">
            <div className=" w-full ml-[20%] lg:ml-0">
              <h2 className="text-primary  text-4xl font-extrabold">DXHUB</h2>
            </div>

            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {NavLinks}
              </div>
            </div>
          </div>
          <div className="text-xl font-medium text-primary hidden md:flex">
            {NavLinks}
          </div>
        </div>
      </nav>
    );
}

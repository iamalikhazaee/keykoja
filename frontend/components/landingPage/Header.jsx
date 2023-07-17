import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="w-full z-30 shadow-md fixed bg-[#e9f5db]">
      <div className="w-full px-5 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="flex items-center decoration-transparent text-[#2d6a4f] transition-all duration-500 hover:text-[#081c15]" aria-label="Cruip">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-3xl ml-3" />
              <h1 className="text-2xl mb-0">کی کجا</h1>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <div className="flex grow justify-end flex-wrap items-center">
            <Link
                  href="/login"
                  className="decoration-transparent font-medium text-[10px] text-white bg-[#2d6a4f] rounded-xl px-3 py-3 flex items-center transition duration-500 ease-in-out"
                >
                  ورود به حساب کاربری
                </Link>
            </div>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

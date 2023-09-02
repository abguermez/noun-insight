import { Link } from "react-scroll";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useEffect } from "react";

export default function NavBar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const intersectings = props.intersectings;

  const handleClick = (e) => {
    setActive(e.target.innerText);
  };
  useEffect(() => {
    if (intersectings[0]) {
      setActive("Home");
    } else if (intersectings[1]) {
      setActive("About");
    } else if (intersectings[2]) {
      setActive("Services");
    } else if (intersectings[3]) {
      setActive("Contact");
    }
  }, [intersectings]);

  const homeActive = active === "Home" ? "text-blue-700" : "text-gray-900";
  const aboutActive = active === "About" ? "text-blue-700" : "text-gray-900";
  const servicesActive =
    active === "Services" ? "text-blue-700" : "text-gray-900";
  const contactActive =
    active === "Contact" ? "text-blue-700" : "text-gray-900";

  return (
    <nav className="border-gray-200 fixed w-full z-20 top-0 left-0 bg-blue-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="logo-blue.png"
            className="h-10 mr-3"
            alt="Nous-Insight Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <MdClose className="w-5 h-5" />
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="w-full" id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
              <Link
                  activeClass="active"
                  to="first-section"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  About
                >
                  <button className="inline-block text-left w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="second-section"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  About
                >
                  <button className="inline-block text-left w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    About
                  </button>
                </Link>
              </li>
              <li>
              <Link
                  activeClass="active"
                  to="third-section"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  About
                >
                  <button className="inline-block text-left w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Services
                  </button>
                </Link>
              </li>

              <li>
              <Link
                  activeClass="active"
                  to="fourth-section"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  About
                >
                  <button className="inline-block text-left w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-blue-100 rounded-lg bg-blue-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-blue-50">
            <li>
              <Link
                activeClass="active"
                to="first-section"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <button
                  onClick={handleClick}
                  className={`block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent md:${homeActive} md:p-0 `}
                  aria-current="page"
                >
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="second-section"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                About
              >
                <button
                  className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:${aboutActive} md:p-0 `}
                  aria-current="page"
                  onClick={handleClick}
                >
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="third-section"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                About
              >
                <button
                  className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:${servicesActive} md:p-0 `}
                  aria-current="page"
                  onClick={handleClick}
                >
                  Services
                </button>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="fourth-section"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                About
              >
                <button
                  className={`block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:${contactActive} md:p-0 `}
                  aria-current="page"
                  onClick={handleClick}
                >
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

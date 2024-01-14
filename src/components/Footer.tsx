import Logo from "../assets/nav-logo.png";
import BmcBtn from "../assets/bmc-button.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer anim-down absolute bottom-0 left-0 mt-16 w-full p-4 sm:p-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center">
            <img
              src={Logo}
              className="mr-3 h-auto w-9 sm:w-11"
              alt="foodieFetch logo"
            />
            <span className="text-clamp-12-17 self-center whitespace-nowrap font-semibold text-white">
              foodieFetch
            </span>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Copyright © */}
          <span className="flex flex-wrap justify-center gap-1 text-center text-sm text-gray-400">
            © 2023 foodieFetch™. Developed by
            <a
              href="https://twitter.com/be_likedeep"
              target="_blank"
              className="bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent"
            >
              Deepak
            </a>
          </span>
          {/* Buy me a coffee */}
          <div className="bmc-logo mx-auto mt-6 h-auto w-40 rounded-lg bg-amber-500 px-4 py-2 transition duration-300 ease-in-out hover:bg-amber-600 focus:outline-none  focus:ring-4 focus:ring-amber-400 active:bg-amber-700">
            <a
              href="https://www.buymeacoffee.com/be_likedeep"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={BmcBtn} alt="buy me a coffee button" />
            </a>
          </div>
          {/* Social Icons */}
          <div className="mt-6 flex justify-center space-x-6 sm:mt-0">
            <a
              href="https://github.com/deepakmardii/foodie-fetch"
              target="_blank"
              className="text-gray-500 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white"
              title="Star on GitHub ⭐"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
              <span className="sr-only">GitHub repository</span>
            </a>
            <a
              href="https://twitter.com/be_likedeep/"
              target="_blank"
              className="text-gray-500 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-400"
              title="Go to Twitter Profile"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://www.linkedin.com/in/deepakmardi/"
              target="_blank"
              className="text-gray-500 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-blue-500"
              title="Connect on LinkedIn"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
              <span className="sr-only">LinkedIn profile</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

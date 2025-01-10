import { useState } from "react";
import { motion } from "framer-motion";
import logo from "./assets/logo-nav.svg";
import heroImg from "./assets/hero-img.svg";
import topRight from "./assets/top-right.svg";
import botLeft from "./assets/bot-left.svg";
import botRight from "./assets/bot-right.svg";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='bg-gray-900 text-white'>
      {/* Navbar */}
      <nav className='flex items-center justify-between px-6 py-4 relative'>
        {/* Logo */}
        <div className='flex items-center'>
          <img src={logo} alt='Logo' className='h-8 object-contain' />
        </div>

        {/* Navigation Links and Get Started (Desktop) */}
        <div className='hidden sm:flex items-center space-x-6'>
          <ul className='flex space-x-6 text-sm font-medium'>
            {["Home", "Memors", "Leaderboard"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgba(156, 39, 176, 0.8)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href='#' className='hover:text-purple-400'>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
          <button className='px-4 py-2 text-sm font-semibold text-gray-900 bg-purple-400 rounded-lg hover:bg-purple-300 transition-all duration-300 ease-in-out'>
            Get Started
          </button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className='sm:hidden text-purple-400 focus:outline-none'
          onClick={toggleMenu}
          aria-label='Toggle Menu'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </nav>

      {/* Sliding Menu (Mobile) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className='fixed top-0 right-0 w-full h-full bg-gray-800 z-50 flex flex-col items-center justify-center sm:hidden'
      >
        {/* Close Button */}
        <button
          className='absolute top-6 right-6 text-purple-400 text-2xl focus:outline-none'
          onClick={closeMenu}
        >
          &times;
        </button>

        {/* Navigation Links (Mobile) */}
        <ul className='space-y-6 text-lg font-medium'>
          {["Home", "Memors", "Leaderboard"].map((item, index) => (
            <li key={index}>
              <a href='#' className='hover:text-purple-400' onClick={closeMenu}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className='flex flex-col mt-8 space-y-4'>
          <button className='w-48 px-4 py-2 text-lg font-semibold text-gray-900 bg-purple-400 rounded-lg hover:bg-purple-300 transition-all duration-300 ease-in-out'>
            Get Started
          </button>
          <button className='w-48 px-4 py-2 text-lg font-semibold text-purple-400 border border-purple-400 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 ease-in-out'>
            View Demo
          </button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className='relative flex flex-col items-center justify-center text-center px-6 py-10 overflow-hidden'>
        {/* Headline */}
        <h1 className='text-3xl sm:text-5xl font-medium leading-tight mb-6 max-w-3xl z-10'>
          Where <span className='text-purple-400'>teams</span> turn moments
          <br />
          into <span className='text-purple-400'>collectible memories</span>
        </h1>

        {/* Buttons */}
        <div className='flex space-x-3 mb-8 z-10'>
          <button className='px-5 py-2 text-md font-semibold text-gray-900 bg-purple-400 rounded-lg hover:bg-purple-300 transition-all duration-300 ease-in-out'>
            Get Started
          </button>
          <button className='px-5 py-2 text-md font-semibold text-purple-400 border border-purple-400 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 ease-in-out'>
            View Demo
          </button>
        </div>

        {/* Image Container */}
        <div className='relative w-full max-w-4xl z-10'>
          <motion.img
            src={heroImg}
            alt='Hero'
            className='relative z-10 rounded-lg max-w-full'
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Background Shapes */}
          <motion.img
            src={topRight}
            alt='Top Right'
            className='absolute right-5 z-0 h-44'
            style={{ top: "-5rem" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={botLeft}
            alt='Bot Left'
            className='absolute bottom-9 w-44 z-0'
            style={{ left: "-3rem" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={botRight}
            alt='Bot Right'
            className='absolute bottom-9 right-5 z-50 w-14'
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'></hr>
    </div>
  );
};

export default App;

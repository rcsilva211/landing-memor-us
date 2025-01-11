import { useState, useRef } from "react";
import { motion } from "framer-motion";
import logo from "./assets/logo-nav.svg";
import heroImg from "./assets/hero-img.svg";
import topRight from "./assets/top-right.svg";
import botLeft from "./assets/bot-left.svg";
import botRight from "./assets/bot-right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./App.css";

import homePng from "./assets/home.png";
import ongoingPng from "./assets/ongoing.png";
import leaderboardPng from "./assets/leaderboard.png";
import memoryboardPng from "./assets/memoryboard.png";
import bgSlide from "./assets/bg-slide.png";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const changeSlide = (index) => {
    if (swiperRef.current && swiperRef.current.slideTo) {
      swiperRef.current.slideTo(index);
    }
  };

  // Content Array - Collaborator
  const slidesContentCollab = [
    {
      title: "Teams’ hub for tracking and celebrating memories ",
      description1:
        "You’ll find the latest updates with the freshest memors from your team, giving you a front-row seat to everything happening in real time.",
      description2:
        "You can dive into your personal progress with a quick glance. And let’s not miss the leaderboard, where you can cheer on the current champions or strategize your way to the top.",
      specialTitle1: "",
      specialDesc1: "",
      specialTitle2: "",
      specialDesc2: "",
      image: homePng,
      buttonName: "Sharing success",
    },
    {
      title: "Teams can share their best moments",
      description1:
        "Your central hub for all team-building activities, showcasing ongoing and past Memors. It inspires participation, simplifies challenge management, and boosts motivation.",
      description2: "",
      specialTitle1: "Ongoing Memors",
      specialDesc1:
        "Top cards display your task names, due dates, and statuses, with urgency labels to keep your team focused.",
      specialTitle2: "Task Progress",
      specialDesc2:
        "Your Memors are filtered and with labels highlighting achievements, celebrating your progress, and energizing your future tasks.",
      image: ongoingPng,
      buttonName: "Promoting Teamwork",
    },
    {
      title: "Turning achievements into team motivation",
      description1: "",
      description2: "",
      specialTitle1: "Leaderboard",
      specialDesc1:
        "A clear, exciting view of the race to the top, showcasing team rankings based on completed Memors and earned points.",
      specialTitle2: "Celebrating Achievements",
      specialDesc2:
        "Highlights team wins and collective efforts, fostering pride, camaraderie, and collaboration.",
      image: leaderboardPng,
      buttonName: "Inspire Fair Challenge",
    },
    {
      title: "Unlocking team potentials while creating memories",
      description1:
        "The Digital Memory Board is a visual path of your team’s achievements. Designed to inspire, celebrate, and connect your team. It captures the essence of collaboration and accomplishment.",
      description2:
        "Whether you’re an administrator shaping the experience or a collaborator bringing memories to life, the Digital Memory Board ensures everyone is connected, inspired, and ready to make every moment count.",
      specialTitle1: "",
      specialDesc1: "",
      specialTitle2: "",
      specialDesc2: "",
      image: memoryboardPng,
      buttonName: "Boost Team Spirit",
    },
  ];

  return (
    <div className='bg-gray-900 text-white'>
      {/* Navbar */}
      <nav className='flex items-center justify-between px-6 py-4 relative'>
        {/* Logo */}
        <div className='flex items-center'>
          <img src={logo} alt='Logo' className='h-8 object-contain' />
        </div>

        {/* Navigation Links */}
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
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Background Shapes */}
          <motion.img
            src={topRight}
            alt='Top Right'
            className='absolute right-5 z-0 h-44'
            style={{ top: "-5rem" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={botLeft}
            alt='Bot Left'
            className='absolute bottom-9 w-44 z-0'
            style={{ left: "-3rem" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img
            src={botRight}
            alt='Bot Right'
            className='absolute bottom-9 right-5 z-50 w-14'
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'></hr>

      {/* Features Section */}
      <section className='relative container mx-auto flex flex-col items-center justify-center text-center px-6 py-10 overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-medium leading-tight mb-6 max-w-3xl z-10'>
          <span className='text-purple-400'>
            Administrators and Collaborators work
          </span>{" "}
          together to create vibrant communities
        </h1>

        <p className='text-sm sm:text-md font-light mb-6 max-w-2xl z-10'>
          We blend the power of team-shared achievements into drivers of
          motivation and collaboration.
        </p>
      </section>

      {/* Collaborators Section */}
      <section className='relative collaborator flex flex-col items-center justify-start px-6 py-16 overflow-hidden min-h-[85vh] lg:min-h-[65vh] sm:min-h-[95vh]'>
        {/* Title Section */}
        <div className='max-w-[1200px] mx-auto text-center'>
          <h1 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
            Collaborators
          </h1>
          <p className='text-md sm:text-lg text-white'>
            View notifications, updates, achievements on your Memory Board, and
            revisit past team milestones.
          </p>
        </div>

        {/* Buttons Section */}
        <div className='flex flex-wrap justify-center space-x-2 sm:space-x-4 mt-8 sm:mt-12'>
          {slidesContentCollab.map((slide, index) => (
            <button
              key={index}
              className={`px-4 py-2 font-semibold rounded-full shadow transition duration-300 mb-4 sm:mb-0 ${
                activeIndex === index
                  ? "bg-purple-200 text-[#381e72]"
                  : "bg-transparent text-white border border-purple-200 hover:bg-purple-200 hover:text-[#381e72]"
              }`}
              onClick={() => {
                setActiveIndex(index); // Set active button
                changeSlide(index); // Change slide
              }}
            >
              {slide.buttonName}
            </button>
          ))}
        </div>

        {/* Swiper Section */}
        <div
          className='relative p-6 sm:p-12 rounded-xl shadow-lg mt-12 w-full max-w-[1440px] mx-auto z-10'
          style={{
            backgroundImage: `url(${bgSlide})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            spaceBetween={20} // Smaller space for small screens
            slidesPerView={1}
            className='h-auto mt-7'
          >
            {slidesContentCollab.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col lg:flex-row items-center p-6 pb-0 sm:p-12 sm:pb-0 sm:pt-20'>
                  {/* Text Section */}
                  <div className='lg:w-1/2 text-left mb-8 lg:mb-0 pr-0 sm:pr-8'>
                    {slide.title && (
                      <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#381e72] mb-4 sm:mb-6'>
                        {slide.title}
                      </h2>
                    )}
                    {slide.description1 && (
                      <p className='text-[#381e72] text-md sm:text-lg mb-4 sm:mb-6'>
                        {slide.description1}
                      </p>
                    )}
                    {slide.description2 && (
                      <p className='text-[#381e72] text-md sm:text-lg mb-4 sm:mb-6'>
                        {slide.description2}
                      </p>
                    )}
                    {slide.specialTitle1 && (
                      <div className='mb-4 sm:mb-6'>
                        <h3 className='text-lg sm:text-xl font-bold text-[#381e72]'>
                          {slide.specialTitle1}
                        </h3>
                        <p className='text-[#381e72] text-sm sm:text-md'>
                          {slide.specialDesc1}
                        </p>
                      </div>
                    )}
                    {slide.specialTitle2 && (
                      <div>
                        <h3 className='text-lg sm:text-xl font-bold text-[#381e72]'>
                          {slide.specialTitle2}
                        </h3>
                        <p className='text-[#381e72] text-sm sm:text-md'>
                          {slide.specialDesc2}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Image Section */}
                  <div className='lg:w-1/2 flex justify-center'>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className='w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] object-cover'
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default App;

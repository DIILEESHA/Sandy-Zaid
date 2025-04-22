import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import "./home.css";
import video from "../../video/videos.mov";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 550) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "backOut",
      },
    }),
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "anticipate",
      },
    },
  };

  const hamburgerVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  const lineVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  // Menu items configuration
  const menuItems = [
    { name: "Invitation", target: "invitation", isScroll: true },
    { name: "RSVP", target: "/rsvp", isScroll: false },
    { name: "Location", target: "location", isScroll: true },
    { name: "Registry", target: "registry", isScroll: true },
  ];

  return (
    <div className="video_container">
      <motion.video
        className="video"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        style={{ scale, opacity, rotate }}
      ></motion.video>

      <div className="home_contain">
        <div className="menu">
          {/* Desktop Menu */}
          <ul className="desktop-menu">
            {menuItems.map((item, i) => (
              <motion.li
                key={item.name}
                className="menu_li"
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                {item.isScroll ? (
                  <ScrollLink
                    className="a"
                    to={item.target}
                    smooth={true}
                    duration={500}
                    offset={-80} // Adjust this value based on your header height
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <Link className="a" to={item.target}>
                    {item.name}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Hamburger button - only shows on mobile */}
          <motion.button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variants={hamburgerVariants}
            animate={isMenuOpen ? "open" : "closed"}
          >
            <motion.span variants={lineVariants} />
            <motion.span variants={lineVariants} />
            <motion.span variants={lineVariants} />
          </motion.button>

          {/* Mobile menu overlay */}
          <motion.div
            className={`mobile-menu ${isMenuOpen ? "open" : ""}`}
            initial={{ x: "100%" }}
            animate={{ x: isMenuOpen ? 0 : "100%" }}
            transition={{ type: "tween" }}
          >
            <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
              ×
            </button>
            <ul className="mobile-menu-list">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  className="menu_li"
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  {item.isScroll ? (
                    <ScrollLink
                      className="a"
                      to={item.target}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </ScrollLink>
                  ) : (
                    <Link
                      className="a"
                      to={item.target}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <h3 className="demontitle">Sandy <span className="saz">&</span>  Zaid</h3>
      </div>
    </div>
  );
};

export default Home;

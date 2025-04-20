import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./home.css";
import video from "../../video/videos.mov";
import { Link } from "react-router-dom";

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

  const menuItems = [
    { name: "Invitation", path: "/invitation" },
    { name: "Location", path: "/location" },
    { name: "registry", path: "/registry" },
    { name: "map", path: "/map" },
    { name: "rsvp", path: "/rsvp" },
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
          {/* Desktop Menu - hidden on mobile */}
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
                <Link className="a" to={item.path}>
                  {item.name}
                </Link>
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
              {["Invitation", "Location", "registry", "map", "rsvp"].map(
                (item, i) => (
                  <motion.li
                    key={item}
                    className="menu_li"
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="couple_name_section"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2 className="couple_name" variants={nameVariants}>
            S
          </motion.h2>
          <motion.h2 className="couple_name austin" variants={nameVariants}>
            &
          </motion.h2>
          <motion.h2 className="couple_name" variants={nameVariants}>
            Z
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

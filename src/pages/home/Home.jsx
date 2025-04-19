import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./home.css";
import video from "../../video/video.mp4";

const Home = () => {
  const { scrollYProgress } = useScroll();

  // Create various animated values based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const yPos = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  // Animation variants for staggered menu items
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

  // Animation for the couple names
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

  // Button hover animation
  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255,255,255,0.2)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="video_container">
      <motion.video
        className="video"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        style={{
          scale,
          opacity,
          rotate,
        }}
      ></motion.video>

      <div className="home_contain">
        <div className="menu">
          <ul className="menu_ul">
            {["save the date", "the details", "registry", "map", "rsvp"].map(
              (item, i) => (
                <motion.li
                  key={item}
                  className="menu_li"
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </div>

        <motion.div
          className="home_top"
          style={{
            y: yPos,
            scale: textScale,
          }}
        >
          <motion.h2
            className="home_span"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Forever
          </motion.h2>
          <motion.h2
            className="home_span"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Begins Here
          </motion.h2>
        </motion.div>

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

        <motion.div className="rsvp_now">
          <motion.button
            className="rsvp_btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            rsvp now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

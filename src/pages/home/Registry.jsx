import React from "react";
import { color, motion, useScroll, useTransform } from "framer-motion";
import "./details.css";
import detail from "../../assets/registry.jpeg";
import { style } from "framer-motion/client";

const Registry = () => {
  const { scrollYProgress } = useScroll();

  // Scroll-based animations
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.03]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.98]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 0.77, 0.47, 0.97], // Custom smooth easing
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "circOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.4 },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(0,0,0,0.85)",
      color: "#fff",
      transition: { duration: 0.3, yoyo: 2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.div
      className="detail_container balla"
      style={{ opacity }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="detail_grid malap">
        <motion.div className="detail_sub_grid nalla" style={{ y: textY }}>
          <motion.h2 className="doto" variants={textVariants}>
            Sandy & Zaid
          </motion.h2>

          <motion.p className="short" variants={textVariants}>
            Your Presence is the Best Present
          </motion.p>

          <motion.p className="other_p" variants={textVariants}>
            We're so grateful for your love and support. If you'd like to
            contribute to our future together.
          </motion.p>

          <motion.button
            className="detail_btn mlp"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <a
              href="https://registry.theknot.com/--june-2026-tx/72079552"
              target="_blank"
              className="a"
            >
              gift registry
            </a>
          </motion.button>
        </motion.div>

        <motion.div
          className="detail_sub_grid"
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="imger">
            <motion.img
              src={detail}
              alt="Registry items"
              className="detail_img"
              style={{ scale: imageScale }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Registry;

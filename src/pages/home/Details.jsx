import React from "react";
import { color, motion, useScroll, useTransform } from "framer-motion";
import "./details.css";
import detail from "../../assets/detail.jpeg";

const Details = () => {
  const { scrollYProgress } = useScroll();

  // Scroll-based animations
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0.9]);

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "circOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
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
    <motion.div
      className="detail_container nana"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      style={{ opacity }}
    >
      <div className="detail_grid">
        <motion.div className="detail_sub_grid nalla" style={{ y: textY }}>
          <motion.h2 className="doto" variants={itemVariants}>
            Sandy & Zaid
          </motion.h2>

          <motion.p className="short" variants={itemVariants}>
            You're Invited to the Best Day Ever!
          </motion.p>

          <motion.p className="other_p" variants={itemVariants}>
            We're so excited to have you with us on our special day. Save the
            date, bring your dancing shoes, and get ready to celebrate our
            happily ever after!
          </motion.p>

          <motion.button
            className="detail_btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            view details
          </motion.button>
        </motion.div>

        <motion.div className="detail_sub_grid" variants={imageVariants}>
          <div className="imger">
            <motion.img
              src={detail}
              alt="Couple"
              className="detail_img"
              style={{ scale: imageScale }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Details;

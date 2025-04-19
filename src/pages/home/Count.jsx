import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import "./count.css";
import co from "../../assets/co1.jpeg";
import ho from "../../assets/save.jpeg";
import co1 from "../../assets/co3.jpeg";

function Count() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate time remaining until August 28, 2025
  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date("August 28, 2025 17:30:00").getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Scroll-based animations
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);
  const yPos = useTransform(scrollYProgress, [0, 0.2], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
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
        duration: 0.6,
        ease: "circOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };

  // Format numbers to always show 2 digits
  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return (
    <motion.div className="count_contianer" style={{ opacity }}>
      <motion.div
        className="count_grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        style={{ y: yPos, scale }}
      >
        {[
          { img: co, time: timeLeft.days, title: "Days" },
          { img: ho, time: formatNumber(timeLeft.hours), title: "Hours" },
          // { img: co1, time: formatNumber(timeLeft.minutes), title: "Minutes" },
          { img: co1, time: formatNumber(timeLeft.seconds), title: "Seconds" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`count_sub ${
              index === 0
                ? "one"
                : index === 1
                ? "two"
                : index === 2
                ? "three"
                : "four"
            }`}
            variants={itemVariants}
            custom={index}
          >
            <motion.div
              className="oi"
              variants={imageVariants}
              whileHover="hover"
            >
              <motion.img
                src={item.img}
                alt=""
                className="oi_img"
                variants={imageVariants}
              />
            </motion.div>

            <motion.div className="observe" whileHover="hover">
              <motion.h2
                className="count_time"
                variants={numberVariants}
                animate={item.title === "Seconds" ? "pulse" : ""}
              >
                {item.time}
              </motion.h2>
              <motion.h3
                className="count_title"
                variants={itemVariants}
                transition={{ delay: 0.2 }}
              >
                {item.title}
              </motion.h3>
            </motion.div>
          </motion.div>
        ))}

      </motion.div>
        {/* Wedding Date Display */}
        <motion.div
          className="wedding_date_display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="maha">Thursday, 28 August 2025</h3>
          <p className="naha">5:30 PM | Pleine Lune Venue, Faitroun, Lebanon</p>
        </motion.div>
    </motion.div>
  );
}

export default Count;

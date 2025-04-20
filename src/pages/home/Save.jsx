import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./save.css";

const Save = () => {
  const { scrollYProgress } = useScroll();
  
  // Scroll-based animations
  const verseY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  const namesScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const verseVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  const nameVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "anticipate"
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "circOut"
      }
    }
  };

  return (
    <motion.div 
      className="save_container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      style={{ opacity: textOpacity }}
    >
      <div className="home_section">
        {/* Bible Verse */}
        <motion.div
          className="verse_container"
          style={{ y: verseY }}
        >
          <motion.p className="verse" variants={verseVariants}>
            "Therefore what God has joined together, let no one separate."
            <motion.br />
            <motion.h3 
              className="verse_ref"
              variants={verseVariants}
              transition={{ delay: 0.2 }}
            >
              – Mark 10:9 NIV
            </motion.h3>
          </motion.p>

          <motion.div 
            className="divider"
            variants={dividerVariants}
          />
        </motion.div>

        {/* Invitation Message */}
        <motion.div 
          className="invitation"
          variants={containerVariants}
        >
          <motion.p className="joyful" variants={textVariants}>
            With joyful hearts
          </motion.p>
          
          <motion.p className="we" variants={textVariants}>
            we
          </motion.p>
          
          <motion.h1 
            className="names" 
            variants={nameVariants}
            style={{ scale: namesScale }}
          >
            Sandy Georges Bou Rjeily
          </motion.h1>
          
          <motion.p className="and" variants={textVariants}>
            and
          </motion.p>
          
          <motion.h1 
            className="names" 
            variants={nameVariants}
            style={{ scale: namesScale }}
          >
            Zaid Ramzi Tayyara
          </motion.h1>
          
          <motion.div className="divider" variants={dividerVariants} />
          
          <motion.p className="invite_text" variants={textVariants}>
            Invite you to celebrate our wedding
            <br />
            <br/>
       August | 28 | 2025
            <br />
            Five thirty in the afternoon
            <br/>
            The ceremony and dinner will take place at
            <br />
            Pleine Lune Venue
            <br/>
             Faitroun, Lebanon.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Save;
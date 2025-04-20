import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import "./gallery.css";
import co from "../../assets/co1.jpeg";
import ho from "../../assets/save.jpeg";
import co1 from "../../assets/co3.jpeg";
import mal from "../../assets/malli.jpeg";
import mals from "../../assets/nangi.jpeg";
import malss from "../../assets/pawan.jpeg";
import malsss from "../../assets/registry.jpeg";
import malssss from "../../assets/show.jpeg";
import cb from "../../assets/cb.png";

const Gallery = () => {
  const galleryImages = [co, ho, co1, mal, mals, malss, malsss, malssss];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "circOut",
      },
    },
  };

  return (
    <motion.div
      className="gallery_container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.h2 className="ho_ho" variants={itemVariants}>
        Sandy & Zaid
      </motion.h2>

      <motion.div className="gallery_con" variants={itemVariants}>
        <Marquee
          gradient={true}
          gradientWidth={30}
          pauseOnClick={true}
          pauseOnHover={true}
          gradientColor="#f7f5f2"
          speed={10}
          direction="left"
          loop={0}
          autoFill={true}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="gallery_sub_con"
              whileHover="hover"
              variants={imageVariants}
            >
              <motion.img
                src={image}
                alt={`Gallery ${index}`}
                className="fg"
                whileHover={{ scale: 1.03 }}
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>

  
    </motion.div>
  );
};

export default Gallery;

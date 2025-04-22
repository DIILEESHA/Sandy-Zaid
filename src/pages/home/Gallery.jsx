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
      {/* <motion.h2 className="ho_ho" variants={itemVariants}>
        Sandy & Zaid
      </motion.h2> */}

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

      <p className="view_p" id="location">
        The church ceremony, welcome drink and dinner will take place at
        <br />
        <br />
        <b>Pleine Lune venue, Faitroun, Lebanon</b>
      </p>

      <iframe
      className="cccc"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.9657533311906!2d35.728635000000004!3d33.9934134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f4748a0567f7b%3A0x40d14c0d1273dcfc!2sPleine%20Lune!5e0!3m2!1sen!2slk!4v1745161204452!5m2!1sen!2slk"
        style={{ width: "100%" }}
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
  );
};

export default Gallery;

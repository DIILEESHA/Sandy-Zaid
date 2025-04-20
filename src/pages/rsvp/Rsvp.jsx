import React, { useState } from "react";
import "./rsvp.css";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import { notification } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../home/Footer"
// import "antd/dist/antd.css";

const Rsvp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    attendance: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual EmailJS credentials
    const serviceID = "service_3b4y2fj";
    const templateID = "template_bjtedsv";
    const userID = "35TERjwhOK4VNbeJX";

    emailjs.send(serviceID, templateID, {
      fullName: formData.fullName,
      attendance: formData.attendance,
      message: formData.message
    }, userID)
      .then((response) => {
        notification.success({
          message: "RSVP Submitted!",
          description: "Thank you for your response! We look forward to seeing you.",
          placement: "topRight"
        });
        toast.success("Your RSVP has been received!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({
          fullName: "",
          attendance: "",
          message: ""
        });
      })
      .catch((error) => {
        notification.error({
          message: "Submission Failed",
          description: "There was an error submitting your RSVP. Please try again.",
          placement: "topRight"
        });
        toast.error("Failed to send RSVP. Please try again.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div>
    <motion.div 
      className="rsvp"
      
    >
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <motion.div 
        className="back_home"
        variants={itemVariants}
      >
        <div className="jo">
          <Link className="a" to="/">
            <IoMdHome />
          </Link>
        </div>
        <div className="jo">/</div>
        <div className="jo">
          <h2 className="form_below">rsvp</h2>
        </div>
      </motion.div>

      <motion.div 
        className="line malz"
        variants={itemVariants}
      />

      <motion.div 
        className="devonz"
        variants={itemVariants}
      >
        <motion.h2 
          className="rsvp_title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          rsvp
        </motion.h2>
        <motion.h3 
          className="rsvp_date"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          by november 10
        </motion.h3>
        <h3 
          className="form_below"
        //   initial={{ opacity: 0, y: 20 }}
        //   animate={{ opacity: 1, y: 0 }}
        //   transition={{ delay: 0.4 }}
        >
          with the form below
        </h3>
        <motion.div 
          className="damn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="contact rsvp_title">contact</h2>
          <h2 className="contact_details rsvp_date">contact us 469 970 3726</h2>
          <h3 className="form_below">for any queries</h3>
        </motion.div>
      </motion.div>

      <motion.div 
        className="form_contain"
        style={{ opacity, y }}
      >
        <form onSubmit={handleSubmit} className="rsvp_form">
          <motion.div 
            className="form_inputer"
            variants={itemVariants}
          >
            <label htmlFor="fullName" className="form_label">
              your full name
            </label>
            <input
              type="text"
              className="form_inout"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div 
            className="form_inputer"
            variants={itemVariants}
          >
            <label className="form_label">will you be attending?</label>
            <div className="radio-group">
              {[
                { value: "wedding-ceremony", label: "Wedding Ceremony" },
                { value: "evening-banquet", label: "Evening Banquet" },
                { value: "both", label: "Both Wedding Ceremony and Evening Banquet" },
                { value: "no", label: "No, unfortunately I cannot attend" }
              ].map((option, index) => (
                <motion.label
                  key={option.value}
                  className="radio-option"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={option.value}
                    checked={formData.attendance === option.value}
                    onChange={handleChange}
                    required={index === 0}
                  />
                  <span>{option.label}</span>
                </motion.label>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="form_inputer"
            variants={itemVariants}
          >
            <label htmlFor="message" className="form_label">
              leave bride & groom a message:
            </label>
            <textarea
              className="form_inout"
              rows={5}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your warm wishes or special requests..."
            />
          </motion.div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            variants={itemVariants}
            disabled={loading}
          >
            {loading ? (
              <span className="loading-text">Sending...</span>
            ) : (
              "Submit RSVP"
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
      <Footer/>
      </div>
  );
};

export default Rsvp;
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Fox } from "./Fox";
import { Html } from "@react-three/drei";

// framer motion
//componets
import Circles from "/components/Circles";

// logic for formsfree
// import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm, ValidationError } from "@formspree/react";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

//  variants
import { fadeIn } from "../../variants";

const Contact = () => {
  const [state, handleSubmitEmail] = useForm("xyyrjwwn");
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "" && key !== "message") {
        newErrors[key] = "This field is required";
        hasErrors = true;
        // console.log(key);
      }
    });

    if (!emailRegex.test(formData.email)) {
      newErrors["email"] = "Please enter a valid email";
      hasErrors = true;
    }
    // console.log("hello");
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }
    const data = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      query: formData.message,
    };
    handleSubmitEmail(e);
    setLoading(true);
    setCurrentAnimation("hit");

    // Simulate form submission without EmailJS
    setTimeout(() => {
      setLoading(false);
      setCurrentAnimation("idle");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      Swal.fire({
        title: "Thanks for contacting me !",
        html: "I will reach out to you soon.",
        icon: "success",
        customClass: {
          popup: "your-custom-popup-class",
        },
      });
    }, 4000);
  };

  return (
    <>
      <div>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mt-24 lg:mt- px-4 lg:px-0"

          // className="h2 text-center  mt-24 lg:mt-32"
        >
          Let's Start a <span className="text-accent"> Conversation</span>
        </motion.h2>
      </div>
      <div className="h-full w-full flex flex-col lg:flex-row ">
        <div className="container mx-auto lg:pt-5 lg:pb-32 py-20 text-center xl:text-left flex items-center justify-center w-2/3 h-full  ">
          {/* {text $ forms} */}
          <div className="flex flex-col w-full max-w-[700px]">
            {/* {text} */}

            {/* {form} */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
            



              action="https://formspree.io/f/xrgnyvgv"
              method="POST"

            // need to change here something
              // action="https://formspree.io/f/xyyrjwwn"
              // method="POST"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              {/* {input group} */}
              <div className="flex gap-x-6 w-full">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="name"
                    className="input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <div className="error">{errors.name}</div>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="email"
                    className="input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <div className="error">{errors.email}</div>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="subject"
                  name="subject"
                  value={formData.subject}
                  className="input"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <div className="error">{errors.subject}</div>
              </div>
              <textarea
                placeholder="message"
                className="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <button
                disabled={loading}
                type="submit"
                className="btn rounded-full border border-white/50 
            max-w-[170px] px-8 transition-all duration-300 
            flex items-center justify-center overflow-hidden
             hover:border-accent group"
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <span
                    className="group-hover:-translate-y-[120%] 
              group-hover:opacity-0 transition-all duration-500"
                  >
                    {" "}
                    {/* Let’s talk */}
                    Let's talk
                  
                  </span>
                )}
                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 
              group-hover:flex group-hover:-translate-y-0 
              group-hover:opacity-100 transition-all duration-300 
              absolute text-[22px]"
                />
              </button>
            </motion.form>
          </div>
        </div>

        <div className=" w-[500px] lg:h-[500px] md:h-[550px] h-[350px] lg:flex">
          <Canvas
            camera={{
              position: [0, 0, 4],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense
              fallback={
                <Html>
                  <div>Loading...</div>
                </Html>
              }
            >
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Contact;

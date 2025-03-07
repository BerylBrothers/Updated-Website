"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Photo = () => {
  const handleVideoEnd = (e) => {
    e.target.currentTime = 0;
    e.target.play(); // Ensure video loops immediately without delay
  };

  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex justify-center items-center"
      >
        {/* Circle Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden"
        >
          {/* Image */}
          <Image
            src="/assets/Wave.jpg"
            priority
            quality={100}
            fill
            alt="Image"
            className="object-cover opacity-60"
          />
        </motion.div>

        {/* Circle Animation */}
        <motion.svg
          className="absolute w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] z-10"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16 25 92 72, 4 250 22 22",
              ],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
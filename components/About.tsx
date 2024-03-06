"use client";

import { FaUsers } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";
import React from "react";
import Achievements from "./Achievements";

const featured = [
  {
    icon: <FaUsers />,
    title: "award winning trainers",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores dignissimos laboriosam possimus temporibus voluptatum blanditiis aliquid deleniti, eum tempore ipsam ducimus numquam fugit doloribus qui enim exercitationem. Atque, ipsa.",
  },
  {
    icon: <IoIosPricetags />,
    title: "excellent prices",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores dignissimos laboriosam possimus temporibus voluptatum blanditiis aliquid deleniti, eum tempore ipsam ducimus numquam fugit doloribus qui enim exercitationem. Atque, ipsa.",
  },
  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores dignissimos laboriosam possimus temporibus voluptatum blanditiis aliquid deleniti, eum tempore ipsam ducimus numquam fugit doloribus qui enim exercitationem. Atque, ipsa.",
  },
];

const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        {/* Text Section */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <h2 className="h2 text-center">About us</h2>
          <p className="mx-auto text-center border-2 border-red-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            excepturi illum quibusdam ratione necessitatibus.
          </p>
        </div>
        {/* Featured Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16 ">
          {featured.map((feature, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-4 border p-10"
              >
                <div className="text-4xl w-[80px] h-[80px] bg-primary-300 text-white flex items-center justify-center rounded-full ">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className="h4 text-accent">{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* achievements */}
        <Achievements />
      </div>
    </section>
  );
};

export default About;

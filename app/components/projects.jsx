/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "./variants.js";
import Project1 from "../../public/project1.jpg";
import Project2 from "../../public/project2.jpg";
import { AiFillGithub } from "react-icons/ai";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import ProjectCard from "./projectcard.jsx";
const Projects = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      id="projects"
      className="container mx-auto w-full min-h-screen flex flex-col justify-center items-center py-20"
    >
      <h2 className=" font-HelloParisScript text-2xl tracking-widest bg-gradient-to-r from-[#FEF400] to-white/50 inline-block text-transparent bg-clip-text">
        Projects
      </h2>
      <div className="">
        <div className="w-full h-full grid grid-cols-1  md:grid-cols-2 gap-10 py-10">
          <ProjectCard name='Ecommerce Website' image={Project1}/>
          <ProjectCard name='Blog Website' image={Project2}/>
          <ProjectCard name='Portfolio Website' image={Project1}/>
          <ProjectCard name='Ecommerce Website' image={Project2}/>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

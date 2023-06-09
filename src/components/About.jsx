import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion";
import { BsTwitter } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";






const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
<p className={styles.sectionSubText}>Introduction</p>
<h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 mb-8 text-secondary text-[20px] max-w-3xl leading-[30px]"
      >
I am a front end developer who specializes in building interactive and responsive websites with a focus on user experience design. I have always been a lover of computers since my childhood days and this has has enabled my pursuit for the software engineering career. My skills include HTML, CSS, Javascript and front end frameworks like React and Vue.
     </motion.p>

     <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <h3 className="sm:text-[24px] text-[14px] uppercase tracking-wider text-[#915eff]">
          LET'S CONNECT{" "}
        </h3>
        <div className="flex flex-row gap-3 mt-3">
          <AiFillGithub
            className="text-secondary hover:text-white"
            style={{ fontSize: "28px" }}
            onClick={() =>
              window.open("https://github.com/SandraIsola", "_blank")
            }
          />

          <AiFillLinkedin
            className="text-secondary hover:text-white"
            style={{ fontSize: "28px" }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/isola-sandra/",
                "_blank"
              )
            }
          />

          <BsTwitter
            className="text-secondary hover:text-white"
            style={{ fontSize: "28px" }}
            onClick={() =>
              window.open("https://twitter.com/Yettysan", "_blank")
            }
          />
           </div>
      </motion.div>
    </>
  );  
};



export default SectionWrapper(About, "about");
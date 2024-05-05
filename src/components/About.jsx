import {styles} from "../styles.js";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {services} from "../constants/index.js";
import {fadeIn,textVariant} from "../utils/motion.js";

const About= () => {
    return(
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    Introduction</p>
                <h2 className={styles.sectionHeadText}>
                    Overview</h2>
            </motion.div>
            <motion.p
                variants={
                fadeIn("","",0.1,1)
                }
                className='mt-4 text-secondary
                text-[17px] max-w-3xl leading-[30px]'
                >
                With expertise in Python, Firebase, React, and more, I've contributed as a Teaching Assistant at the University of the Pacific, guiding students and preparing materials on object-oriented programming.
                In this role, I organized quizzes and assignments to reinforce learning.
                <br/>
                Additionally, I've volunteered for Oasis Care, Edible School Yard Community Farm, Blood Bank in India, Stockton Pet Care, and Food Bank Stockton.
                My volunteering involved various community services, showcasing my commitment to making a positive impact beyond academia.
            </motion.p>
            <div>

            </div>
        </>
    )
}
export default About


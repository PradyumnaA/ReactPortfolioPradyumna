import {VerticalTimeline,
VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {experiences} from "../constants/index.js";
import {SectionWrapper} from "../hoc";
import {textVariant} from "../utils/motion.js";

const Experience= () => {
    return(
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    Projects Accomplished so far
                </p>
                <h2 className={styles.sectionHeadText}>
                    Work Experience
                </h2>
            </motion.div>
        </>
    )
}
export default SectionWrapper(Experience,"work")

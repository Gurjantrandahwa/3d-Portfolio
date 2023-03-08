import React from 'react'
import {styles} from "../styles";
import {motion} from 'framer-motion';
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";
import {projects} from "../constants";
import Tilt from "react-tilt/dist/tilt";
import {github,logo} from "../assets";


const ProjectCard = ({index, name, description, tags, source_code_link, image,live_link}) => {
    return <>
        <motion.div
            variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className={"bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full"}
            >
                <div className={"relative w-full h-[230px]"}>
                    <img src={image} alt={name}
                         className={"w-full h-full object-cover rounded-2xl"}
                    />
                    <div className={"absolute inset-0 flex justify-end mt-3 card-img_hover"}>
                        <div onClick={() => window.open(source_code_link, "_blank")}
                             className={"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"}
                        >
                            <img src={github} alt={"github"}
                                 className={"w-1/2 h-1/2 object-contain"}
                            />
                        </div>
                        {
                            live_link &&   <div onClick={() => window.open(live_link, "_blank")}
                                                className={"border-black border w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"}
                            >
                                <img src={logo} alt={"github"}
                                     className={"w-1/2 h-1/2 object-contain"}
                                />
                            </div>
                        }

                    </div>

                </div>
                <div className={"mt-5"}>
                    <h3 className={"text-white font-bold text-[24px]"}>{name}</h3>
                    <p className={"text-secondary mt-2 text-[14px]"}>{description}</p>
                </div>
                <div className={"mt-4 flex flex-wrap gap-2"}>
                    {
                        tags.map((tag) => {
                            return <p key={tag.name}
                                      className={`text-[14px] ${tag.color}`}>#{tag.name}
                            </p>
                        })
                    }
                </div>
            </Tilt>
        </motion.div>

    </>
}

const Works = () => {

    return <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My work</p>
            <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>
        <div className={"w-full flex"}>
            <motion.p variants={fadeIn("", "", 0.1, 1)}
                      className={"mt-3 text-secondary text-[17px] max-w-3xl leading-[25px]"}
            >
                Using my skills in HTML, CSS, JavaScript and other frameworks, I have developed visually engaging and
                user-friendly web applications,
                including responsive designs, interactive animations, and seamless UX/UI experiences.
                Each project is briefly described with links to code repositories and live demos in it.
            </motion.p>
        </div>
        <div className={"mt-20 flex flex-wrap gap-7"}>
            {
                projects.map((project, index) => {
                    return <ProjectCard key={`project-${index}`} {...project} index={index}/>
                })
            }
        </div>
    </>
}

export default SectionWrapper(Works, "work")
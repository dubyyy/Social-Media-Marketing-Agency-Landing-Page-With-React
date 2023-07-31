import React from "react";
import CSS from './Services.module.css'
import Picture from './data/Picture.jpg'
import PictureTwo from './data/pic.jpg'
import {motion} from 'framer-motion'
function Services(){
    return(
        <div className={CSS.wrapper}>
            
            <a id='work'></a>
           <div className={CSS.container}>
              <div className={CSS.info}>
                   <motion.span 
                   initial={{opacity: 0,
                    y: -50, transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 140,
                    }}}
                     whileInView={{opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        delay: .5,
                      }
                    }}
                    viewport={{once:false}}
                   className={CSS.infoname}>Problem we solve</motion.span>

                   <motion.span
                   initial={{opacity: 0,
                    y: -50, transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 140,
                    }}}
                     whileInView={{opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        delay: .8,
                      }
                    }}
                    viewport={{once:false}}
                   >Low Brand <span className={CSS.blue}>Awareness </span></motion.span>

                   <motion.span
                   initial={{opacity: 0,
                    y: -50, transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 140,
                    }}}
                     whileInView={{opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        delay: 1.2,
                      }
                    }}
                    viewport={{once:false}}
                   className={CSS.infotext}>Many skincare brands struggle with limited brand recognition and awareness among their target audience. Viral Vision helps increase brand visibility and exposure through strategic social media marketing techniques, allowing brands to reach a wider audience and build brand awareness. </motion.span>

                   <a href='#Contact'><motion.button
                   initial={{opacity: 0,
                    y: -50, transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 140,
                    }}}
                     whileInView={{opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        delay: 1.5,
                      }
                    }}
                    whileHover={{
                        scale:1.2,
                    }}
                    whileTap={{
                        scale:0.8,
                    }}
                    viewport={{once:false}}
                   >I Want To Grow</motion.button></a>
              </div>
              <motion.img 
              initial={{opacity: 0,
                y: -50, transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 140,
                }}}
                 whileInView={{opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    delay: 1.2,
                  }
                }}
                viewport={{once:false}}
              src={Picture} alt=''></motion.img>
              <motion.img 
              initial={{opacity: 0,
                y: -50, transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 140,
                }}}
                 whileInView={{opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80,
                    delay: 1.2,
                  }
                }}
                viewport={{once:false}}
              src={PictureTwo} alt=''></motion.img>
              <div className={CSS.info}>
                   <motion.span 
                   initial={{opacity: 0,
                    y: -50, transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 140,
                    }}}
                     whileInView={{opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        delay: .5,
                      }
                    }}
                    viewport={{once:false}}
                   className={CSS.infoname}>Problem we solve</motion.span>

                   <motion.span
                   initial={{opacity: 0,
                    y: -50, transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 140,
                    }}}
                     whileInView={{opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        delay: .8,
                      }
                    }}
                    viewport={{once:false}}
                   >Lack of Targeted <span className={CSS.blue}>Advertising </span></motion.span>

                   <motion.span 
                   initial={{opacity: 0,
                    y: -50, transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 140,
                    }}}
                     whileInView={{opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        delay: 1.2,
                      }
                    }}
                    viewport={{once:false}}
                   className={CSS.infotext}>Without precise audience targeting, skincare brands may fail to reach their ideal customers. Viral Vision specializes in developing targeted advertising campaigns across various social media platforms, utilizing demographic and interest-based targeting to ensure that brands reach the right audience with their messaging, leading to higher conversion rates. </motion.span>

                   <a href='#Contact'><motion.button
                   initial={{opacity: 0,
                    y: -50, transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 140,
                    }}}
                     whileInView={{opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        delay: 1.5,
                      }
                    }}
                    whileHover={{
                        scale:1.2,
                    }}
                    whileTap={{
                        scale:0.8,
                    }}
                    viewport={{once:false}}
                    className={CSS.btn}
                   >I Want To Grow</motion.button></a>
              </div>

           </div>
        </div>
    )
}
export default Services
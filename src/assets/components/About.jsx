import React from "react";
import CSS from './About.module.css'
import Benefits from "./Benefits";
import {motion} from 'framer-motion'
function About(){
    return(
        <div className={CSS.wrapper}>
          <a id='About'></a>
              <div className={CSS.container}> 
                  <div className={CSS.about}>
                         <div className={CSS.benefitheader}>
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
                          className={CSS.benefitname}>who is for</motion.span>
                          <motion.div 
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
                                delay: .9,
                              }
                            }}
                            viewport={{once:false}}
                          className={CSS.mainbenefitheader}><div><span>Skincare Brands who Struggle to </span><span>Attract Customers </span></div></motion.div>
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
                          className={CSS.secondbenefitheader}>Skincare brands that struggle to attract customers often face numerous hurdles in a fiercely competitive market.</motion.span>
                          </div>   
                  </div>



                    <div className={CSS.benefits}>
                          <div className={CSS.benefitheader}>
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
                          className={CSS.benefitname}>Benefits</motion.span>

                          <motion.div 
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
                                delay: .9,
                              }
                            }}
                            viewport={{once:false}}
                          className={CSS.mainbenefitheader}><div><span>Unleashing Business Growth through </span><span>Advertising</span></div></motion.div>
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
                          
                          className={CSS.secondbenefitheader}>Unleashing business growth through social media advertising involves leveraging the immense reach and targeting capabilities of various social media platforms to drive expansion and success.</motion.span>
                          <div>
                            <Benefits />
                          </div>
                          <a href='#Contact'><motion.button
                          initial={{opacity: 0,
                            scale: 0, transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 140,
                            }}}
                             whileInView={{opacity: 1,
                              scale: 1,
                              transition: {
                                type: "spring",
                                stiffness: 80,
                                delay: .9,
                              }
                            }}
                            whileHover={{
                                scale:1.1,
                            }}
                            whileTap={{
                                scale:.8,
                            }}
                            viewport={{once:false}}
                          > I Want To Grow</motion.button></a>
                          </div>
                          
                    </div>
                </div>
            </div>
        
    )
}
export default About
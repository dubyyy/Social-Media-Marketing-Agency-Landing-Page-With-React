import React from "react";
import CSS from './Hero.module.css'
import hero from './data/hero.png'
import {motion} from 'framer-motion'
function Hero(){
    return(
        <div className={CSS.wrapper}>
            
          <div className={CSS.contaier}>
              <div className={CSS.left}>
                <div className={CSS.heading}>
                    <motion.div 
                    initial={{opacity: 0,
                        x: -50, transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 140,
                        }}}
                         whileInView={{opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            stiffness: 80,
                            delay: .7,
                          }
                        }}
                        viewport={{once:false}}
                    className={CSS.preheading}><span>Bringing your Brands  </span><span className={CSS.blue}>vision to life  </span><span>with Viral Vision</span></motion.div>
                    <motion.div 
                    initial={{opacity: 0,
                        x: -50, transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 140,
                        }}}
                         whileInView={{opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            stiffness: 80,
                            delay: .8,
                          }
                        }}
                        viewport={{once:false}} className={CSS.subheader}>Viral vision Empower skin care Companies to scale and conquer new markets</motion.div>
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
              <div className={CSS.right}>
              <motion.div initial={{opacity: 0,
                        x: -100, transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 140,
                        }}}
                         whileInView={{opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            stiffness: 80,
                            delay: .7,
                          }
                        }}
                        viewport={{once:false}} className={CSS.bluecircle}></motion.div>  
                  <motion.img 
                  initial={{opacity: 0,
                    x: 100, transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 140,
                    }}}
                     whileInView={{opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        delay: .7,
                      }
                    }}
                    viewport={{once:false}}
                  src={hero} alt=''></motion.img>
              </div>
          </div>
        </div>
    )
}
export default Hero
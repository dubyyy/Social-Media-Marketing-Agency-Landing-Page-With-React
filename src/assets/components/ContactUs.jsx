import React, { useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {motion} from 'framer-motion'; 
import './ContactUs.css'
import emailjs from 'emailjs-com';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5decshp', 'template_f2uvbc7', form.current, 'ZP-C69kKIi-uh3zgs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
        
        <div className='cowrapper'>
          <a id='Contact'></a>
      <Container>
     
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${'Viral vision.management@gmail.com'}`}>
              Viral vision.management@gmail.com'
              </a>
              <br />
              <br />
              
                <p>
                  <strong>Phone:</strong> +1 919-344-0093
                </p>
             
            </address>
            
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100" ref={form} onSubmit={sendEmail}>
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="user_name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="user_email"
                    name="from_name"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <motion.button 
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
                    whileHover={{
                        scale:1.2,
                    }}
                    whileTap={{
                        scale:0.8,
                    }}
                    viewport={{once:false}}
                  className="btn" type="submit"> 
                  Send
                  </motion.button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      </div>
  );
}

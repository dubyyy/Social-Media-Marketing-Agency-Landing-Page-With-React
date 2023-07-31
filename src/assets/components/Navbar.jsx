import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import {motion} from 'framer-motion'


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	

	return (
		<motion.header initial={{opacity: 0,
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
			viewport={{once:false}} className="header">
			<span>Viral Vision</span>
			<nav className="nav" ref={navRef}>
				<a href="#" onClick={showNavbar}>Home</a>
				<a href="#About" onClick={showNavbar}>About me</a>
				<a href="#work" onClick={showNavbar}>My work</a>
				<a href='#Contact' ><button className="btn-book" onClick={showNavbar}>Contact Us</button></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</motion.header>
	);
}

export default Navbar;

import Navbar from "../components/navbar/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import "./about.css";

const About = () => {

	return (
		<div >
			<Navbar />
			<div class="acontainer">
				<div class="content-section">
					<div class="title">
						<h1 style={{ color: 'black' }}>About Us</h1>
					</div>
					<div class="content">
						<h3>Our Belief</h3>
						<p>At EventVitals, we create unforgettable moments. Our passionate team specializes in weddings and all types of events, transforming spaces and crafting unique experiences.</p>

						<h3>Vision</h3>
						<p>Our vision is to be your ultimate event partner, serving as the premier event organizer in India, offering a "One-Stop Shoppe" for all your event management needs.</p>

						<h3>Mission</h3>
						<p>We're committed to delivering quality and elegance, from personal to professional events. We bring the expertise of the best event management company in India.</p>
					</div>
				</div>
				<div class="image-section">
					<img src="https://www.visionvivaah.com/blog/wp-content/uploads/2019/11/Vision-Vivaah.jpg" />
				</div>
			</div>
		</div>
	)
}

export default About

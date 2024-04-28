import Navbar from "../components/navbar/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import "./services.css";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div class="services">
        <br />
        <br />
        <h1 style={{ color: 'black' }}>Our Services</h1>
        <div class="cen">
          <div class="service">
            <i class="fab fa-android"></i>
            <h2 style={{ color: 'black' }}>Parties</h2>
            <p>A lively gathering filled with laughter, music, and fun, where every moment becomes a reason to celebrate.</p>
          </div>

          <div class="service">
            <i class="fas fa-anchor"></i>
            <h2 style={{ color: 'black' }}>Weddings and Engagements</h2>
            <p>Celebrate the beginning of a beautiful journey together.</p>
          </div>

          <div class="service">
            <i class="fab fa-angellist"></i>
            <h2 style={{ color: 'black' }}>Professional Events</h2>
            <p>Elevating corporate gatherings into successful and productive experiences, where connections are forged, and goals are achieved.</p>
          </div>

          <div class="service">
            <i class="fas fa-apple-alt"></i>
            <h2 style={{ color: 'black' }}>Anniversaries</h2>
            <p>Celebrations of a milestone in a relationship or event.</p>
          </div>

          <div class="service">
            <i class="fas fa-archway"></i>
            <h2 style={{ color: 'black' }}>Annual Functions</h2>
            <p>The day of Memorable Events.</p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Services

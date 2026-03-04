import { useEffect, useState } from 'react';
import './HeroSection.css';
import logo from '../assets/logo.png';
import logoone from '../assets/logoone.png';
import logotwo from '../assets/logotwo.png';

function HeroSection() {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  useEffect(() => {
    const targetDate = new Date("March 20, 2026 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-section">


      <div className="hero-content">

        {/* LOGO */}
        <img src={logo} alt="Kyronix Logo" className="hero-logo" />

        {/* COLLEGE NAME */}
        <h1 className="college-name">
          <img src={logoone} alt="logo one" className="college-logo" />
          <span className="college-text">SRM Madurai</span>
          <img src={logotwo} alt="logo two" className="college-logo" />
        </h1>

        <p className="college-subtitle">
          College for Engineering and Technology
        </p>

        <p className="college-affiliation">
          APPROVED BY AICTE. AFFILIATED TO ANNA UNIVERSITY
        </p>

        {/* EVENT TITLE */}
        <h2 className="event-title">KYRONIX 2026</h2>

        <p className="event-quote">
          "Where electronics meets intelligence, Join ultimate convergence of tech, talent, and future"
        </p>

        {/* 🔥 REGISTRATION DAYS LEFT BOX */}
        <div className="registration-box">
          <h3>{timeLeft.days} Days Left Registration closes on March 20, 2026</h3>
        </div>

        {/* 🔥 COUNTDOWN */}
        <div className="countdown-wrapper">

          <div className="timer-box">
            <h3>{timeLeft.days}</h3>
            <span>Days</span>
          </div>

          <div className="colon">:</div>

          <div className="timer-box highlight">
            <h3>{timeLeft.hours}</h3>
            <span>Hours</span>
          </div>

          <div className="colon">:</div>

          <div className="timer-box">
            <h3>{timeLeft.minutes}</h3>
            <span>Minutes</span>
          </div>

          <div className="colon">:</div>

          <div className="timer-box highlight">
            <h3>{timeLeft.seconds}</h3>
            <span>Seconds</span>
          </div>

        </div>

        {/* BUTTON */}
        <button
          className="cta-button"
          onClick={() => {
            const section = document.getElementById('events');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          EXPLORE EVENTS →
        </button>

      </div>

      {/* PARTICLES */}
      <div className="animated-particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* GLOW ORBS */}
      <div className="glow-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

    </section>
  );
}

export default HeroSection;
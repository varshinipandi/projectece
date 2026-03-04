import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>KYRONX 2026</h3>
          <p>A premier symposium bringing together the brightest minds in coding and innovative skills.</p>
          <div className="social-links">
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-7 9-7z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="18" cy="6" r="1" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#timeline">About</a></li>
            <li><a href="#coordinators">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Event Info</h4>
          <ul>
            <li>📅 March 27, 2026</li>
            <li>📍 Pottapalayam,Sivagangai District-630512</li>
            <li>🕐 8:00 AM - 5:00 PM</li>
            <li>👥 300+ Participants</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>📧 <a href="mailto:info@kyronx.com">info@kyronx.com</a></li>
            <li>📞 <a href="tel:+1234567890">+1 (234) 567-890</a></li>
            <li>🌐 www.kyronx2026.com</li>
            <li>📍 Pottapalayam,Sivagangai District-630512</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <p className="copyright">
          © {currentYear} KYRONX Technology Symposium. All rights reserved.
        </p>
        <div className="footer-credits">
          <span>Built with </span>
          <span className="heart">❤</span>
          <span> and Code</span>
        </div>
      </div>

      <div className="footer-glow">
        <div className="glow-element"></div>
      </div>
    </footer>
  );
}

export default Footer;

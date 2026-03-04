import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'timeline' },
    { name: 'Events', id: 'events' },
    { name: 'Coordinators', id: 'coordinators' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo-text">KYRONIX 2026</h1>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

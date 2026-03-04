import { useState, useEffect } from 'react';
import './Events.css';

import paperlyticsImg from '../assets/paperlytics.png';
import technoParadeImg from '../assets/tecnoparade.png';
import busBusterImg from '../assets/busbuster.png';
import oneSenseImg from '../assets/onesenseengineering.png';
import escapeRoomImg from '../assets/escapeRoom.png';
import resonanceImg from '../assets/resonance.png';
import bidBattleImg from '../assets/bidBattle.png';
import detectiveMysteryImg from '../assets/jumanji.png';
import jumanjiImg from '../assets/jumanji.png'; // ✅ Added missing import

import bidBattleRulesImg from '../assets/Rules/bidBattleRules.png';
import oneSceneRulesImg from '../assets/Rules/oneSceneRules.png';
import paperlyticsRulesImg from '../assets/Rules/paperlyticsRules.png';
import projectRulesImg from '../assets/Rules/projectRules.png';
import escapeRoomRulesImg from '../assets/Rules/escapeRoomRules.png';
import resonanceRulesImg from '../assets/Rules/ResonanceRules.png';
import circuitRulesImg from '../assets/Rules/circuitRules.png';
import jumanjiRulesImg from '../assets/Rules/jumanjiRules.png';

function Events() {

  const [selectedCategory, setSelectedCategory] = useState('technical');
  const [activeEvent, setActiveEvent] = useState(null);
  const [showOffer, setShowOffer] = useState(false);

  // ✅ Fixed useEffect error
  useEffect(() => {
    if (activeEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeEvent]);

  const closeModal = () => {
    setActiveEvent(null);
    setShowOffer(false);
  };

  const timelineEvents = [
    { name: 'Registration  (08:30-09:30)', icon: '📝', order: 1 },
    { name: 'Inauguration  (09:30-10:00)', icon: '🎉', order: 2 },
    { name: 'Technical Events...(10:00-12:30)', icon: '💻', order: 3 },
    { name: 'Lunch...(12:30-01:30)', icon: '🍽️', order: 4 },
    { name: 'Non-Technical Events...(01:30-03:00)', icon: '🎯', order: 5 },
    { name: 'Valediction   (03:00-03:30)', icon: '🏆', order: 6 } // ✅ Fixed time typo
  ];

  const technicalEvents = [
    {
      id: 1,
      title: 'Paperlytics',
      quote: 'Innovate. Present. Inspire the future of technology.',
      description: 'Demonstrate your technical expertise through compelling paper presentations',
      image: paperlyticsImg,
      rulesImage: paperlyticsRulesImg,
      info: {
        date: 'March 27, 2026',
        time: '10.00 AM to 1:00 PM',
        fee: '₹200 / Head',
        team: '1 to 3 Members',
        prizes: 'Certification & shield for winners',
        coordinator: 'Hariharan M (6381375200)',
        venue: 'Conference Hall'
      }
    },
    {
      id: 2,
      title: 'Techno Parade',
      quote: 'Where brilliance meets innovation on display.',
      description: 'Interactive tech exhibition displaying innovative projects and prototypes',
      image: technoParadeImg,
      rulesImage: projectRulesImg,
      info: {
        date: 'March 27, 2026',
        time: '10.00 AM to 1:00 PM',
        fee: '₹200 / Head',
        team: '2 to 3 Members',
        prizes: 'Certification & shield for winners',
        coordinator: 'Karthick Ragavan (8778172460)',
        venue: 'Expo Arena'
      }
    },
    {
      id: 3,
      title: 'Circuit Debugging Arena',
      quote: 'Code. Debug. Conquer.',
      description: 'Challenging debugging competition for coding enthusiasts',
      image: busBusterImg,
      rulesImage: circuitRulesImg,
      info: {
        date: 'March 27, 2026',
        time: '10.00 AM to 1:00 PM',
        fee: '₹200 / Head',
        team: '3 Members',
        prizes: 'Certification & shield for winners',
        coordinator: 'Yohanaa M (9962765593)',
        venue: 'Computer Lab'
      }
    },
    {
      id: 4,
      title: 'One Sense Engineering',
      quote: 'Build the impossible. Engineer your success.',
      description: 'Real-time engineering challenges testing your problem-solving skills',
      image: oneSenseImg,
      rulesImage: oneSceneRulesImg,
      info: {
        date: 'March 27, 2026',
        time: '10.00 AM to 1:00 PM',
        fee: '₹200 / Head',
        team: '2 to 3 Members',
        prizes: 'Certification & shield for winners',
        coordinator: 'Vishnu Priya S (7373624101)',
        venue: 'Workshop Hall'
      }
    }
  ];

  const nonTechnicalEvents = [
    {
      id: 5,
      title: 'Escape Room',
      quote: 'Test your general knowledge',
      description: 'Competitive quiz on technology and current innovations',
      image: escapeRoomImg,
      rulesImage: escapeRoomRulesImg,
      info: {
        date: 'March 27, 2026',
        time: '10.00 AM to 1:00 PM',
        fee: '₹100 / Team',
        team: '2 to 3 Members',
        prizes: 'Certification & shield for winners',
        coordinator: 'Sudharsana S S (9486412288)',
        venue: 'Seminar Hall'
      }
    },
    {
      id: 6,
      title: 'Resonance',
      quote: 'Feel the rhythm.',
      description: 'Fun music and rhythm based competition',
      image: resonanceImg,
      rulesImage: resonanceRulesImg,
      info: {
        date: 'March 27, 2026',
        time: '10.00 AM to 1:00 PM',
        fee: '₹100 / Team',
        team: '2 to 3 Members',
        prizes: 'Certification & shield for winners',
        coordinator: 'Akshaya M (6381680770)',
        venue: 'Open Stage'
      }
    },
    {
      id: 7,
      title: 'Bid Battle',
      quote: 'Pitch. Bid. Win.',
      description: 'Showcase your startup ideas and innovative concepts',
      image: bidBattleImg,
      rulesImage: bidBattleRulesImg,
      info: {
        date: 'March 27, 2026',
        time: '10.00 AM to 1:00 PM',
        fee: '₹100 / Team',
        team: '3 Members',
        prizes: 'Certification & shield for winners',
        coordinator: 'Rohit M (9043314330)',
        venue: 'Presentation Hall'
      }
    },
    {
      id: 8,
      title: 'Jumanji',
      quote: 'Adventure awaits. Solve. Survive. Succeed.',
      description: 'An exciting and interactive team challenge filled with puzzles, tasks, and mystery-solving activities.',
      image: jumanjiImg,
      rulesImage: jumanjiRulesImg,
      info: {
        date: 'March 27, 2026',
        time: '10.00 AM to 1:00 PM',
        fee: '₹100 / Team',
        team: '2 to 3 Members',
        prizes: 'Certification & shield for winners',
        coordinator: 'Priya Dharshini S (6374067300)',
        venue: 'Activity Room'
      }
    }
  ];

  const displayEvents = selectedCategory === 'technical' ? technicalEvents : nonTechnicalEvents;

  function generateEventSVG(title) {
    const bg1 = '%2300d9ff';
    const bg2 = '%23ff00ff';
    const text = encodeURIComponent(title);
    return `data:image/svg+xml;utf8,
      <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>
        <defs>
          <linearGradient id='g' x1='0' x2='1'>
            <stop offset='0' stop-color='${bg1}' stop-opacity='0.9'/>
            <stop offset='1' stop-color='${bg2}' stop-opacity='0.7'/>
          </linearGradient>
        </defs>
        <rect width='1200' height='800' fill='url(%23g)'/>
        <g transform='translate(80,100)'>
          <rect x='0' y='0' width='1040' height='600' rx='20' fill='rgba(255,255,255,0.04)'/>
          <g opacity='0.18'>
            <circle cx='900' cy='120' r='140' fill='%23ffffff' />
            <circle cx='300' cy='420' r='220' fill='%23ffffff' />
          </g>
        </g>
        <text x='50%' y='70%' font-family='Segoe UI, Arial' font-size='48' fill='%23ffffff' text-anchor='middle'>${text}</text>
      </svg>`;
  }

  return (
    <section id="events" className="events-section">
      <div className="section-header">
        <h2 className="event-date">March 27th 2026</h2>
        <h1 className="section-title">EVENT TIMELINE</h1>
      </div>

      <div className="timeline-container">
        <div className="horizontal-timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-step">
              <div className="step-circle">
                <span className="step-icon">{event.icon}</span>
              </div>
              <p className="step-name">{event.name}</p>
              {index < timelineEvents.length - 1 && <div className="timeline-connector"></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="events-category-section">
        <div className="category-toggle">
          <button
            className={`category-btn ${selectedCategory === 'technical' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('technical')}
          >
            <span className="btn-icon">💻</span> Technical Events
          </button>
          <button
            className={`category-btn ${selectedCategory === 'non-technical' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('non-technical')}
          >
            <span className="btn-icon">🎯</span> Non-Technical Events
          </button>
        </div>

        <div className="category-description">
          <h3 className="category-title">
            {selectedCategory === 'technical' ? 'TECHNICAL EVENTS' : 'NON-TECHNICAL EVENTS'}
          </h3>
          <p className="category-quote">
            {selectedCategory === 'technical'
              ? 'Push your limits. Showcase your skills. Claim victory in the tech arena.'
              : 'Build relationships and showcase your creative talents'}
          </p>
        </div>

        <div className="events-grid">
          {displayEvents.map((event) => {
            const imageUrl = event.image || generateEventSVG(event.title);
            return (
              <div key={event.id} className="event-card">
                <div className="card-content">
                  <h4 className="event-name">{event.title}</h4>
                  <p className="event-quote">{event.quote}</p>
                  <p className="event-description">{event.description}</p>
                  {/* View Details Button */}
                  <button className="view-details-btn" onClick={() => setActiveEvent(event)}>
                    View Details
                  </button>
                </div>

                <div
                  className="card-image"
                  role="img"
                  aria-label={event.title + ' image'}
                  style={{ backgroundImage: `url(${imageUrl})` }}
                />
              </div>
            );
          })}
        </div>

        {/* COMMON REGISTER BUTTON – changes per category */}
        <div className="category-register-wrap">
          <a
            href="https://erpsrm.com/srmhonline/eventsmcet/loginManager/youLogin.jsp"
            target="_blank"
            rel="noopener noreferrer"
            className="category-register-btn"
          >
            {selectedCategory === 'technical' ? '💻 Register for Technical Events' : '🎯 Register for Non-Technical Events'}
          </a>
        </div>
      </div>

      {/* EVENT DETAILS MODAL – fixed overlay outside all containers */}
      {activeEvent && (
        <div className="event-modal-overlay" onClick={closeModal}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>

            <button className="modal-close" onClick={closeModal}>✕</button>

            {/* EVENT IMAGE */}
            <div
              className="modal-image"
              style={{ backgroundImage: `url(${activeEvent.image})` }}
            />

            <div className="modal-content">
              <h2 className="modal-title">{activeEvent.title}</h2>
              <p className="modal-description">{activeEvent.description}</p>

              {/* INFO GRID */}
              <div className="modal-details-grid">
                <div className="info-box"><span>Date</span><p>{activeEvent.info.date}</p></div>
                <div className="info-box"><span>Time</span><p>{activeEvent.info.time}</p></div>
                <div className="info-box"><span>Fee</span><p>{activeEvent.info.fee}</p></div>
                <div className="info-box"><span>Team</span><p>{activeEvent.info.team}</p></div>
                <div className="info-box"><span>Prizes</span><p>{activeEvent.info.prizes}</p></div>
                <div className="info-box"><span>Coordinator</span><p>{activeEvent.info.coordinator}</p></div>
              </div>

              {/* ACTION BUTTONS */}
              <div className={`modal-actions ${selectedCategory === 'technical' ? 'technical-layout' : ''}`}>
                <button className="modal-rules-btn" onClick={() => window.open(activeEvent.rulesImage)}>
                  Rules
                </button>
                {selectedCategory === 'technical' && (
                  <button className="modal-rules-btn" onClick={() => setShowOffer(true)}>
                    View Offer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OFFER POPUP – separate fixed overlay */}
      {showOffer && (
        <div className="offer-overlay" onClick={() => setShowOffer(false)}>
          <div className="offer-popup" onClick={(e) => e.stopPropagation()}>
            <div className="balloons">
              <div className="balloon"></div>
              <div className="balloon"></div>
              <div className="balloon"></div>
              <div className="balloon"></div>
            </div>
            <div className="cracker cracker1"></div>
            <div className="cracker cracker2"></div>
            <div className="cracker cracker3"></div>
            <div className="cracker cracker4"></div>
            <div className="cracker cracker5"></div>
            <div className="sparkle sparkle1"></div>
            <div className="sparkle sparkle2"></div>
            <div className="sparkle sparkle3"></div>
            <div className="confetti">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <h2 className="offer-title">Participation Offer</h2>
            <div className="offer-text">
              <p>Participants who register for any one Technical Event are eligible to attend any one Non-Technical Event free of cost.</p>
              <p>There is no additional registration fee required for the selected non-technical event.</p>
              <p>Kindly refer to the list of Non-Technical Events and choose the event you wish to participate in while filling out the registration form.</p>
            </div>
            <button className="offer-close" onClick={() => setShowOffer(false)}>✖</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Events;

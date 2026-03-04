# KYRONX 2026 - Tech Symposium Webpage

A modern, animated website for the KYRONX 2026 Technology Symposium featuring circuit-themed design and a full-day event schedule.

## 🎯 Features

- **Animated Hero Section**: Full-screen landing page with video background and circuit animations
- **Circuit-themed Design**: Modern UI with glowing neon effects (cyan and magenta)
- **Sticky Header**: Fixed navigation bar with smooth scrolling
- **Event Timeline**: Complete symposium schedule with 8 events throughout the day
- **Responsive Design**: Fully mobile-friendly layout
- **Advanced Animations**: 
  - Particle effects
  - Glow orbs
  - Circuit line animations
  - Card hover effects
  - Smooth transitions

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
cd projectece
npm install
```

### Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Header.css          # Header styles
│   ├── HeroSection.jsx     # Landing section with video
│   ├── HeroSection.css     # Hero styles
│   ├── Events.jsx          # Event timeline
│   ├── Events.css          # Event styles
│   ├── Footer.jsx          # Footer with contact info
│   └── Footer.css          # Footer styles
├── App.jsx                 # Main component
├── App.css                 # App styles
├── index.css               # Global styles
└── main.jsx                # Entry point
```

## 🎬 Adding Your Video

To add your intro video:

1. **Place your video file** in the `public/` folder:
   ```
   public/kyronx-intro.mp4
   ```

2. **Supported formats**:
   - MP4 (.mp4)
   - WebM (.webm)
   - Ogg (.ogv)

3. **Video recommendations**:
   - Resolution: 1920x1080 or higher
   - Duration: 15-30 seconds
   - File size: Keep under 50MB for fast loading
   - Format: H.264 codec for MP4

4. **Update video source** in `src/components/HeroSection.jsx`:
   ```jsx
   <source src="/your-video-filename.mp4" type="video/mp4" />
   ```

## 🎨 Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #00d9ff;      /* Cyan */
  --secondary-color: #ff00ff;    /* Magenta */
  --dark-bg: #0a0f1e;            /* Dark background */
}
```

### Event Schedule
Modify the events array in `src/components/Events.jsx`:
```jsx
const events = [
  {
    id: 1,
    title: 'Your Event',
    time: '09:00 AM',
    description: 'Event description',
    icon: '🎯',
    tags: ['tag1', 'tag2']
  }
  // Add more events...
];
```

### Contact Information
Update the footer in `src/components/Footer.jsx` with your contact details.

## 📱 Responsive Breakpoints

- **Desktop**: 1400px max-width
- **Tablet**: 768px breakpoint
- **Mobile**: Optimized for all screen sizes

## ✨ Features Highlight

### Header
- Fixed position with blur backdrop
- Smooth scroll navigation
- Mobile hamburger menu
- Animated logo with glow effects

### Hero Section
- Full-screen video background with overlay
- Circuit pattern SVG animation
- Animated particles floating up
- Gradient text effects
- Call-to-action button

### Events Timeline
- Vertical timeline layout
- 8 symposium events with details
- Smooth animations on scroll
- Tag system for event categorization
- Feature boxes highlighting symposium benefits

### Footer
- Multi-column layout
- Social media links with hover effects
- Quick links navigation
- Event information
- Contact details
- Animated glow background

## 🔧 Technologies Used

- **React** 19.2.0
- **Vite** (build tool)
- **CSS3** (animations, gradients, filters)
- **SVG** (circuit animations)
- **HTML5 Video**

## 🎯 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 Creating an About Section

The website already has smooth scroll links to an "About" section. To add content to it, the section is prepared in `App.css` with the ID `#about`.

## 🎬 Animation Performance

All animations use GPU-accelerated CSS transforms:
- `transform`
- `opacity`
- No pure `top/left` positioning

This ensures smooth 60fps performance across devices.

## 📧 Event Contact

- **Email**: info@kyronx.com
- **Phone**: +1 (234) 567-890
- **Website**: www.kyronx2026.com
- **Location**: Innovation Park, Tech City

## 📄 License

All content and design are proprietary to KYRONX 2026.

## 🤝 Support

For questions or customization needs, refer to the code comments in each component file.

---

**Made with ❤️ and Code for KYRONX 2026**

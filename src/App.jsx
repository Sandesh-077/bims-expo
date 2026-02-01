import { useEffect, useMemo, useState } from "react";
import "./App.css";
import bimsLogo from "/assets/bimsLogo.png";

const EVENT_START = new Date("2026-04-18T09:00:00+05:45");

const timelinePhases = [
  { title: "Event Announced", date: "Jan 15", icon: "📢" },
  { title: "Registration Opens", date: "Jan 20", icon: "📝" },
  { title: "Venue Reveal", date: "Feb 10", icon: "📍" },
  { title: "Registration Closes", date: "Mar 05", icon: "🔒" },
  { title: "Idea Screening", date: "Mar 12-20", icon: "💡" },
  { title: "Event Day", date: "Apr 18", icon: "🎯" },
  { title: "Results", date: "Apr 18", icon: "🏆" },
  { title: "Post Event", date: "Apr 25", icon: "📸" },
  { title: "Completed", date: "Apr 30", icon: "✅" },
];

const currentPhaseIndex = 2;

const ocTeam = [
  {
    name: "Aarav Sharma",
    photo: "https://i.pravatar.cc/300?img=11",
    clubPost: "President",
    eventRole: "Event Director",
    message: "BIMS Expo is more than an event—it's a movement to inspire young minds. We're building something that will leave a lasting impact on every participant.",
  },
  {
    name: "Priya Thapa",
    photo: "https://i.pravatar.cc/300?img=5",
    clubPost: "Vice President",
    eventRole: "Operations Lead",
    message: "Every detail matters. From logistics to participant experience, we're committed to making this the most seamless and memorable expo yet.",
  },
  {
    name: "Rohan KC",
    photo: "https://i.pravatar.cc/300?img=12",
    clubPost: "Secretary",
    eventRole: "Communications Head",
    message: "Communication is the bridge between ideas and action. We're here to ensure every team and sponsor feels connected and informed.",
  },
  {
    name: "Aisha Gurung",
    photo: "https://i.pravatar.cc/300?img=9",
    clubPost: "Treasurer",
    eventRole: "Finance Lead",
    message: "Smart budgeting means maximum impact. Every rupee is allocated to create the best experience for participants and spectators alike.",
  },
  {
    name: "Bikash Rai",
    photo: "https://i.pravatar.cc/300?img=15",
    clubPost: "Director",
    eventRole: "Technical Head",
    message: "Technology drives innovation. We're integrating cutting-edge solutions to make BIMS Expo a truly futuristic experience.",
  },
  {
    name: "Sarina Poudel",
    photo: "https://i.pravatar.cc/300?img=20",
    clubPost: "Director",
    eventRole: "Creative Lead",
    message: "Design tells a story. Every visual element of BIMS Expo is crafted to inspire creativity and celebrate student achievements.",
  },
];

// ═══════════════════════════════════════════════════════════════
// SPONSORS DATA - Edit this section to add/update sponsors
// Each sponsor needs: { name: "Company Name", logo: "/path/to/logo.png" }
// ═══════════════════════════════════════════════════════════════
const sponsors = {
  title: [
    // { name: "Title Sponsor", logo: "/sponsors/title-sponsor.png" },
  ],
  gold: [
    // { name: "Gold Sponsor 1", logo: "/sponsors/gold-1.png" },
    // { name: "Gold Sponsor 2", logo: "/sponsors/gold-2.png" },
  ],
  silver: [
    // { name: "Silver Sponsor 1", logo: "/sponsors/silver-1.png" },
    // { name: "Silver Sponsor 2", logo: "/sponsors/silver-2.png" },
    // { name: "Silver Sponsor 3", logo: "/sponsors/silver-3.png" },
  ],
  bronze: [
    // { name: "Bronze Sponsor 1", logo: "/sponsors/bronze-1.png" },
    // { name: "Bronze Sponsor 2", logo: "/sponsors/bronze-2.png" },
  ],
  media: [
    // { name: "Media Partner 1", logo: "/sponsors/media-1.png" },
  ],
  general: [
    // { name: "General Sponsor 1", logo: "/sponsors/general-1.png" },
    // { name: "General Sponsor 2", logo: "/sponsors/general-2.png" },
  ],
};
// ═══════════════════════════════════════════════════════════════

function App() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = EVENT_START.getTime() - now.getTime();

    if (diff <= 0) {
      return null;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [expandedMember, setExpandedMember] = useState(null);
  
  const eventDateLabel = useMemo(
    () =>
      EVENT_START.toLocaleString("en-US", {
        dateStyle: "full",
        timeStyle: "short",
      }),
    []
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-cyan-950 text-white overflow-hidden page-load">
      {/* DECORATIVE GLOW  COULD BE THOUGHT OF ADDING LATER*/}
      {/* <div
        className="absolute top-24 left-1/2 -translate-x-1/2
                w-96 h-96
                bg-blue-500
                opacity-30
                blur-3xl
                rounded-full"
      ></div>

      <div
        className="absolute top-72 left-1/3
                w-80 h-80
                bg-cyan-400
                opacity-25
                blur-3xl
                rounded-full"
      ></div> */}

      {/* NAVBAR */}
      <nav className="relative z-50 flex justify-between items-center px-6 md:px-12 py-6 backdrop-blur-md bg-slate-950/50 sticky top-0 border-b border-white/5">
        <div className="flex items-center gap-3">
          <img className="h-12 w-12 object-contain" src={bimsLogo} alt="BIMS Logo" />
          <span className="font-bold text-xl tracking-wide hidden sm:block">BIMS EXPO <span className="text-cyan-400">2026</span></span>
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-cyan-400 cursor-pointer transition-colors">Home</li>
          <li onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 cursor-pointer transition-colors">Event Details</li>
          <li onClick={() => document.getElementById('sponsors-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 cursor-pointer transition-colors">Sponsors</li>
          <li onClick={() => document.getElementById('oc-team-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 cursor-pointer transition-colors">Organizing Team</li>
          <li onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 cursor-pointer transition-colors">Contact</li>
        </ul>

        <a href="https://register.bims.icmatribhumibaluwatar.org/" target="_blank" rel="noopener noreferrer" className="hidden md:block px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all text-sm font-semibold cursor-pointer">
          Register Team
        </a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center mt-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Build the Future with
          <span className="text-cyan-400"> <span className="text-[#129DCC]">B</span><span className="text-[#84C219]">I</span><span className="text-[#F68501]">M</span><span className="text-[#E42328]">S</span></span>
        </h1>

        <p className="mt-6 text-2xl font-semibold text-gray-300 max-w-3xl">
          <span className="text-[#129DCC]">B</span>usiness. <span className="text-[#84C219]">I</span>T. <span className="text-[#F68501]">M</span>athematics. <span className="text-[#E42328]">S</span>cience.
        </p>

        <p className="mt-2 text-gray-300 max-w-3xl">
          A platform where innovation meets creativity and learning becomes fun.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-12">
          <a href="https://register.bims.icmatribhumibaluwatar.org/" target="_blank" rel="noopener noreferrer" className="px-10 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition duration-300 cursor-pointer text-center">
            Register Now
          </a>

          <button onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-3 rounded-full border border-gray-500 text-white hover:border-cyan-400 hover:text-cyan-400 transition duration-300 cursor-pointer">
            Learn More
          </button>
        </div>
      </section>

   {/* MAIN CONTENT */}
      <main className="relative z-10 px-6 md:px-20 mt-80 max-w-7xl mx-auto mb-20">
        
        {/* ABOUT / MISSION */}
        <section id="about-section" className="mb-32">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Turning Theory Into <br />
                    <span className="text-cyan-400">Real-World Action</span>
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                    BIMS Expo 2026 is designed to become Nepal's leading student-driven platform. 
                    We move beyond textbooks to foster **analytical thinking, technological fluency, and financial awareness**.
                </p>
                <p className="text-gray-400 leading-relaxed text-lg">
                    Whether you are a high school student, educator, or industry professional, BIMS offers a space to connect, mentor, and inspire the next generation of leaders.
                </p>
            </div>
            {/* PDF Source [63]: Innovation Zones */}
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-linear-to-br from-[#129DCC]/20 to-transparent border border-[#129DCC]/30">
                    <h4 className="font-bold text-[#129DCC] text-xl mb-2">Business</h4>
                    <p className="text-sm text-gray-300">Entrepreneurial thinking & financial literacy.</p>
                </div>
                <div className="p-6 rounded-2xl bg-linear-to-br from-[#84C219]/20 to-transparent border border-[#84C219]/30">
                    <h4 className="font-bold text-[#84C219] text-xl mb-2">ICT</h4>
                    <p className="text-sm text-gray-300">Emerging tech & digital innovation.</p>
                </div>
                <div className="p-6 rounded-2xl bg-linear-to-br from-[#F68501]/20 to-transparent border border-[#F68501]/30">
                    <h4 className="font-bold text-[#F68501] text-xl mb-2">Math</h4>
                    <p className="text-sm text-gray-300">Problem solving & analytical frameworks.</p>
                </div>
                <div className="p-6 rounded-2xl bg-linear-to-br from-[#E42328]/20 to-transparent border border-[#E42328]/30">
                    <h4 className="font-bold text-[#E42328] text-xl mb-2">Science</h4>
                    <p className="text-sm text-gray-300">Research, discovery & experimentation.</p>
                </div>
            </div>
          </div>

          {/* STATS SECTION - Event Impact Metrics */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Event <span className="text-cyan-400">Impact</span>
              </h3>
              <p className="text-gray-400 max-w-xl mx-auto">
                Bringing together innovators, creators, and leaders for one extraordinary day
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "25+", label: "Competing Teams", icon: "👥" },
                { number: "100+", label: "Active Participants", icon: "🎯" },
                { number: "500+", label: "Expected Spectators", icon: "👀" },
                { number: "1 Day", label: "Of Innovation", icon: "⚡" },
              ].map((stat, index) => (
                <div key={index} className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 text-center transition-all duration-300 hover:-translate-y-2">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</h3>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COUNTDOWN + TIMELINE */}
        <section className="mb-32">
          {/* COUNTDOWN */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Countdown to Event Day</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The final showcase begins on <span className="text-cyan-400 font-semibold">{eventDateLabel}</span>.
              </p>
            </div>

            {timeLeft ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                  >
                    <h3 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                      {String(unit.value).padStart(2, "0")}
                    </h3>
                    <p className="text-gray-400 text-sm uppercase tracking-wide">{unit.label}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 text-center">
                <h3 className="text-2xl font-bold text-cyan-300">The event is live!</h3>
                <p className="text-gray-300 mt-2">Join us on-site and follow the highlights.</p>
              </div>
            )}
          </div>

          {/* TIMELINE - Clean Stepper Style */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Journey</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Follow our progress from announcement to celebration</p>
            </div>

            <div className="timeline-stepper">
              {timelinePhases.map((phase, index) => {
                const isComplete = index < currentPhaseIndex;
                const isCurrent = index === currentPhaseIndex;
                
                return (
                  <div key={phase.title} className={`step ${isComplete ? 'complete' : ''} ${isCurrent ? 'current' : ''}`}>
                    <div className="step-icon">
                      <span>{phase.icon}</span>
                      {isCurrent && <div className="step-ping" />}
                    </div>
                    <div className="step-content">
                      <span className="step-date">{phase.date}</span>
                      <span className="step-title">{phase.title}</span>
                    </div>
                    {index < timelinePhases.length - 1 && <div className="step-line" />}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* EVENT HIGHLIGHTS - Based on PDF Source [23-27] */}
        <section className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What to Expect</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A comprehensive one-day event packed with opportunities to learn, compete, and network.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <div className="mb-6 w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-2xl">🚀</div>
                    <h3 className="text-xl font-bold mb-3">Innovation Zones</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Dedicated spaces showcasing student-led projects, especially in Science and cutting-edge ICT solutions.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all overflow-hidden">
                    <div className="absolute top-0 left-0 w-fulinear from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <div className="mb-6 w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-2xl">🎤</div>
                    <h3 className="text-xl font-bold mb-3">Workshops & Experts</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Expert-led sessions delivering practical skills and live interactive demonstrations of emerging technologies.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all overflow-hidden">
                    <div className="absolute top-0 left-0 w-fulinear from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <div className="mb-6 w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-2xl">🏆</div>
                    <h3 className="text-xl font-bold mb-3">Competitions</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Engaging contests that ignite creativity, from financial literacy challenges to robotics and science fairs.
                    </p>
                </div>
            </div>
        </section>

        {/* SPONSORS SECTION */}
        <section id="sponsors-section" className="sponsors-section mb-32">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 mb-6">
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Partners & Sponsors</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">Powered By Excellence</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Join the visionary brands shaping the future of innovation
            </p>
          </div>

          {/* Title Sponsor - Premium Showcase */}
          <div className="sponsor-tier title-tier mb-20">
            <div className="tier-header title">
              <div className="tier-icon">👑</div>
              <h3>Title Sponsor</h3>
              <div className="tier-line"></div>
            </div>
            <div className="flex justify-center">
              {sponsors.title.length > 0 ? (
                sponsors.title.map((s, i) => (
                  <div key={i} className="sponsor-card-premium title">
                    <div className="sponsor-glow"></div>
                    <div className="sponsor-content">
                      <img src={s.logo} alt={s.name} />
                      <span className="sponsor-name">{s.name}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="sponsor-placeholder-premium title">
                  <div className="placeholder-icon">🏆</div>
                  <span className="placeholder-title">Premium Partner Spot</span>
                  <p className="placeholder-desc">Exclusive title sponsorship opportunity</p>
                  <div className="placeholder-cta">Contact Us</div>
                </div>
              )}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="sponsor-tier gold-tier mb-16">
            <div className="tier-header gold">
              <div className="tier-icon">🥇</div>
              <h3>Gold Sponsors</h3>
              <div className="tier-line"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {sponsors.gold.length > 0 ? (
                sponsors.gold.map((s, i) => (
                  <div key={i} className="sponsor-card-premium gold">
                    <div className="sponsor-glow"></div>
                    <div className="sponsor-content">
                      <img src={s.logo} alt={s.name} />
                      <span className="sponsor-name">{s.name}</span>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className="sponsor-placeholder-premium gold">
                    <div className="placeholder-icon">✨</div>
                    <span className="placeholder-title">Gold Partner</span>
                  </div>
                  <div className="sponsor-placeholder-premium gold">
                    <div className="placeholder-icon">✨</div>
                    <span className="placeholder-title">Gold Partner</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="sponsor-tier silver-tier mb-14">
            <div className="tier-header silver">
              <div className="tier-icon">🥈</div>
              <h3>Silver Sponsors</h3>
              <div className="tier-line"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {sponsors.silver.length > 0 ? (
                sponsors.silver.map((s, i) => (
                  <div key={i} className="sponsor-card-premium silver">
                    <div className="sponsor-content">
                      <img src={s.logo} alt={s.name} />
                      <span className="sponsor-name">{s.name}</span>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className="sponsor-placeholder-premium silver"><span>Silver Partner</span></div>
                  <div className="sponsor-placeholder-premium silver"><span>Silver Partner</span></div>
                  <div className="sponsor-placeholder-premium silver"><span>Silver Partner</span></div>
                </>
              )}
            </div>
          </div>

          {/* Bronze Sponsors */}
          <div className="sponsor-tier bronze-tier mb-14">
            <div className="tier-header bronze">
              <div className="tier-icon">🥉</div>
              <h3>Bronze Sponsors</h3>
              <div className="tier-line"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              {sponsors.bronze.length > 0 ? (
                sponsors.bronze.map((s, i) => (
                  <div key={i} className="sponsor-card-premium bronze">
                    <div className="sponsor-content">
                      <img src={s.logo} alt={s.name} />
                      <span className="sponsor-name">{s.name}</span>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className="sponsor-placeholder-premium bronze"><span>Bronze Partner</span></div>
                  <div className="sponsor-placeholder-premium bronze"><span>Bronze Partner</span></div>
                </>
              )}
            </div>
          </div>

          {/* Media & General Partners Row */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Media Partners */}
            <div className="sponsor-tier media-tier">
              <div className="tier-header media">
                <div className="tier-icon">📺</div>
                <h3>Media Partners</h3>
                <div className="tier-line"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {sponsors.media.length > 0 ? (
                  sponsors.media.map((s, i) => (
                    <div key={i} className="sponsor-card-premium media">
                      <div className="sponsor-content">
                        <img src={s.logo} alt={s.name} />
                        <span className="sponsor-name">{s.name}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="sponsor-placeholder-premium media"><span>Media Partner</span></div>
                )}
              </div>
            </div>

            {/* General Sponsors */}
            <div className="sponsor-tier general-tier">
              <div className="tier-header general">
                <div className="tier-icon">🤝</div>
                <h3>General Sponsors</h3>
                <div className="tier-line"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {sponsors.general.length > 0 ? (
                  sponsors.general.map((s, i) => (
                    <div key={i} className="sponsor-card-premium general">
                      <div className="sponsor-content">
                        <img src={s.logo} alt={s.name} />
                        <span className="sponsor-name">{s.name}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="sponsor-placeholder-premium general"><span>Partner</span></div>
                    <div className="sponsor-placeholder-premium general"><span>Partner</span></div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="sponsor-cta mt-20">
            <div className="sponsor-cta-content">
              <h3>Become a Sponsor</h3>
              <p>Partner with BIMS Expo 2026 and showcase your brand to thousands of innovators</p>
              <a href="mailto:sponsors@bimsexpo.com" className="sponsor-cta-btn">
                <span>Get Sponsorship Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </section>

        {/* OC TEAM SECTION */}
        <section id="oc-team-section" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the OC Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The dedicated individuals working behind the scenes to make BIMS Expo 2026 a reality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ocTeam.map((member, index) => (
              <div key={index} className="oc-card">
                <div className="oc-photo-wrap">
                  <img src={member.photo} alt={member.name} className="oc-photo" />
                  <div className="oc-photo-glow"></div>
                </div>
                <h3 className="oc-name">{member.name}</h3>
                <div className="oc-roles">
                  <span className="oc-club-post">{member.clubPost}</span>
                  <span className="oc-divider">•</span>
                  <span className="oc-event-role">{member.eventRole}</span>
                </div>
                
                {expandedMember === index ? (
                  <div className="oc-message-expanded">
                    <p>"{member.message}"</p>
                    <button onClick={() => setExpandedMember(null)} className="oc-collapse-btn">
                      Show Less
                    </button>
                  </div>
                ) : (
                  <button onClick={() => setExpandedMember(index)} className="oc-expand-btn">
                    Read Message
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact-section" className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions? Reach out to our organizing committee
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Instagram */}
            <a href="https://instagram.com/bimsexpo" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="contact-label">Instagram</span>
              <span className="contact-handle">@bimsexpo</span>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/9779800000000" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon whatsapp">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span className="contact-label">WhatsApp</span>
              <span className="contact-handle">+977 980-0000000</span>
            </a>

            {/* Email */}
            <a href="mailto:contact@bimsexpo.com" className="contact-card">
              <div className="contact-icon email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <span className="contact-label">Email</span>
              <span className="contact-handle">contact@bimsexpo.com</span>
            </a>
          </div>
        </section>

       
        

      </main>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-white/5 bg-slate-950">
        <div className="flex justify-center items-center gap-2 mb-4">
             <img className="h-8 w-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" src={bimsLogo} alt="BIMS" />
        </div>
        <p className="text-gray-500 text-sm">
          &copy; 2026 BIMS Expo | Organized by Interact Club of Matribhumi Baluwatar
        </p>
        <p className="text-gray-600 text-xs mt-2">Zone VI, Interact District 3292 (Nepal & Bhutan)</p>
      </footer>
    </div>
  );
}

export default App;
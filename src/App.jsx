import "./App.css";
import bimsLogo from "/assets/bimsLogo.png";

function App() {
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
          <li className="hover:text-cyan-400 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer transition-colors">Event Details</li>
         
          <li className="hover:text-cyan-400 cursor-pointer transition-colors">Contact</li>
        </ul>

        <button className="hidden md:block px-6 py-2 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all text-sm font-semibold cursor-pointer">
          Register Team
        </button>
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
          <button className="px-10 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition duration-300 cursor-pointer">
            Register Now
          </button>

          <button className="px-10 py-3 rounded-full border border-gray-500 text-white hover:border-cyan-400 hover:text-cyan-400 transition duration-300 cursor-pointer">
            Learn More
          </button>
        </div>
      </section>

   {/* MAIN CONTENT */}
      <main className="relative z-10 px-6 md:px-20 mt-80 max-w-7xl mx-auto mb-20">
        
        {/* STATS SECTION - Based on PDF Source [29] */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
            {[
                { number: "25+", label: "Competing Teams" },
                { number: "100+", label: "Active Participants" },
                { number: "500+", label: "Expected Spectators" },
                { number: "1 Day", label: "Of Innovation" },
            ].map((stat, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                    <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</h3>
                    <p className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</p>
                </div>
            ))}
        </section>

        {/* ABOUT / MISSION */}
        <section className="mb-32 flex flex-col md:flex-row gap-12 items-center">
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
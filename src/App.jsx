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

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="flex items-center gap-3">
          <img className="h-14 w-14" src={bimsLogo} alt="BIMS Logo" />
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <li className="hover:text-cyan-400 cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer">Register</li>
          <li className="hover:text-cyan-400 cursor-pointer">About</li>
          <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
        </ul>
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
    </div>
  );
}

export default App;

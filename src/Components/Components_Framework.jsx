import { useEffect, useState } from "react";

function Framework() {
  const totalSlots = 5;
  const logos = ["react", "html", "css", "tailwind", "bootstrap"];
  const emptySlots = totalSlots - logos.length;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  return (
    <section className="py-24 px-4 " id="frame">
      <div className="text-center text-white mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Powering your favorite
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
          Front-end tools
        </h3>
      </div>

      <div className="relative z-[-10] flex flex-wrap justify-center gap-6 ">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`relative w-28 h-28 p-3 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-md transition-all duration-500 hover:shadow-[0_0_30px_5px_rgba(0,255,127,0.3)] hover:scale-105 group ${
              show ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400 transition-all duration-500"></div>
            <img
              src={`/icons/${logo}.png`}
              alt={logo}
              className="max-w-full max-h-full object-contain z-10 relative"
            />
          </div>
        ))}

        {[...Array(emptySlots)].map((_, i) => (
          <div
            key={`empty-${i}`}
            className="w-28 h-28 rounded-2xl bg-[#1a1a1a] border border-dashed border-[#444] flex items-center justify-center text-gray-500 text-sm italic opacity-30 hover:opacity-50 transition"
          >
            Coming Soon
          </div>
        ))}
      </div>
    </section>
  );
}

export default Framework;

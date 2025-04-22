function About() {
    const features = [
      {
        icon: "💡",
        title: "Instant Server Start",
        desc: "On demand file serving over native ESM, no bundling required!",
      },
      {
        icon: "🛠️",
        title: "Feature",
        desc: "Supports automatic installation of dependencies like React, Vite, and Tailwind CSS ",
      },
      {
        icon: "📂",
        title: "Project Structure",
        desc: "Automatically generates a web project structure based on user input.",
      },
    ];
  
    return (
      <section className="flex justify-center py-32 px-6 bg-[#0f0f0f] text-white" id="about">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-3  leading-tight bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Redefining developer experience
          </h1>
          <h5 className="text-xl sm:text-2xl text-gray-400 mb-14">
            Vite makes web development simple again
          </h5>
  
          <div className=" grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-[#1a1a1a] shadow-xl border border-gray-700 hover:scale-[1.03] transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4 w-14 h-14 rounded-lg bg-gray-900 border border-gray-600 shadow-inner">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h2 className="text-lg font-semibold text-white mb-2">{item.title}</h2>
                <p className=" text-gray-400 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  
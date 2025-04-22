import '.././Global.css'

function Sidebar({ menuOpen, currentPage, setCurrentPage }) {
  const linkClass = (page) =>
    `text-sm mb-1 font-semibold text-left transition-colors duration-200 cursor-pointer ${
      currentPage === page
        ? "bg-purple-500 w-[200px] py-1 px-2 rounded-sm text-white"
        : "text-[var(--title-desc)] hover:text-white px-2 py-1"
    }`;

  return (
    <div
      className={`fixed top-15 left-0 h-screen w-64 bg-[#252525] z-40 transform ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300`}
    >
      <div className="text-side flex flex-col pt-4 pl-6">

        {/* Section: Getting Started */}
        <h1 className="text-xl font-semibold mb-2 text-white">Getting Started</h1>
        <div className="relative">
          <div className="line absolute top-0 left-1 h-full w-px"></div>
          <div className="flex flex-col ml-4">
            <button
              onClick={() => setCurrentPage("dosc")}
              className={linkClass("dosc")}
            >
              Introduction
            </button>
            <button
              onClick={() => setCurrentPage("installation")}
              className={linkClass("installation")}
            >
              Installation
            </button>
          </div>
        </div>

        {/* Section: Guide */}
        <h1 className="text-xl font-semibold mt-4 mb-2 text-white">Guide</h1>
        <div className="relative">
          <div className="line absolute top-0 left-1 h-full w-px"></div>
          <div className="flex flex-col ml-4">
            <button
              onClick={() => setCurrentPage("features")}
              className={linkClass("features")}
            >
              Features
            </button>
            <button
              onClick={() => setCurrentPage("cli")}
              className={linkClass("cli")}
            >
              CLI
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;

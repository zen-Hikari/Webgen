import "./Global.css";
import Webgen from "./assets/webgen.png";
import Webgen2 from "./assets/webgen-purple.png";
function Hero() {
  return (
    <div className="flex justify-center py-40">
      <div className="container flex justify-center">
        <div className="hero-container">
          <div className="hero-btn-top flex justify-center">
            <div className="con">
              <h5 className="text-sm font-semibold border-1 py-2 px-4 rounded-3xl flex gap-3 items-center">
                <div className="blinking-dot z-[-2]"></div>
                Webgen 2025
              </h5>
            </div>
          </div>

          {/* --- */}
          <div className="hero-compt mt-8">
            <div className="hero-title mb-40">
              <h1 className="xl:text-7xl lg:text-7xl md:text-7xl sm:text-6xl text-5xl text-center font-semibold">
                The Build Tool <br /> for <span>the Web</span>
              </h1>
              <p className="text-center pt-7 xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl text-xl">
                Webgen is a fast frontend building tool, <br /> actually this is
                just a fun project
              </p>
              <div className="hero-btn mt-6 flex justify-center gap-5 items-center ">
                <a
                  href="/getting-started"
                  className="btn-1 rounded-md py-3 px-4 font-semibold text-white"
                >
                  Get Started
                </a>
                <a
                  href="https://github.com/zen-Hikari/Project-Web-Generator" target="_blank"
                  className="btn-2 border-1 rounded-md py-3 px-4 flex items-center gap-2 font-semibold text-white"
                >
                  <i className="ai-github-fill"></i>
                  Github
                </a>
              </div>
            </div>
            <div className="img-container flex justify-center">
            <div className="hero-img  flex justify-center relative">
              <div className="overlay"></div>
              <img src={Webgen} alt="" width="130px" className="z-[-1]"/>
              <div className="overlay2"></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

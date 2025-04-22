function Banner() {
  return (
    <section className="py-50 flex justify-center">
      <div className="container flex justify-center">
        <div className="compt">
          <h1 className="text-5xl font-semibold mb-10 text-center">
            Start building with Webgen
          </h1>
          <p className="text-center text-xl mb-10 text-[var(--dark-light)]">
            Prepare for a development environment that can <br /> finally keep
            pace with the speed of your mind.
          </p>
          <div className="hero-btn flex justify-center">
            <a
              href="/getting-started"
              className="btn-1 rounded-md py-3 px-4 font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

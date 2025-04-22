import { useState } from "react";
import Header from "./Header";
import Sidebar from "./SideBar";

function GuidePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("dosc");

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">
      {/* Header */}
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Sidebar */}
      <Sidebar
        menuOpen={menuOpen}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      {/* Main Content */}
      <main className="pt-20 transition-all duration-300 md:ml-64">
        {currentPage === "dosc" && (
          <div className="content max-w-7xl mx-auto p-6">
            <div className="intro mb-12">
              <h1 className="text-5xl font-bold mb-4  text-white ">
                Introduction
              </h1>
              <hr className="my-4 border-t-px" />
              <p className=" text-[var(--dark-light)] mt-6 leading-relaxed">
                Welcome to Project Web Generator, a lightweight and customizable
                website scaffolding tool powered by Python. Designed to help
                developers quickly generate static websites with personalized
                configurations, this tool enables you to define page titles,
                descriptions, styles, and other content directly from a simple
                and intuitive interface. Built with efficiency in mind, Project
                Web Generator uses Python to dynamically create HTML, CSS, and
                JavaScript files, and the React library, making it ideal for
                rapid prototyping or learning the structure of a basic website.
                Whether you're just getting started in web development or need a
                quick boilerplate for your project, this Python-based solution
                delivers convenience and flexibility straight from your
                terminal.
              </p>
            </div>

            <div className="stack">
              <h1 className="text-4xl font-bold mb-6 ">Technology Stack</h1>
              <p className="mb-10 text-[var(--dark-light)]">
                Project Web Generator is a Python tool that helps developers
                quickly create a structured web project with their preferred CSS
                framework. Users can navigate the selection using arrow keys and
                confirm their choice with Enter.
              </p>
              <ul className="list-disc list-inside text-[var(--dark-light)] space-y-4 ml-15">
                <li className="text-lg">
                  <strong className="text-blue-500">Python</strong> – The main
                  programming language used to build this tool.
                </li>
                <li className="text-lg">
                  <strong className="text-blue-500">Standard Library</strong> –
                  Utilizes built-in modules such as:
                  <ul className="list-disc ml-6 space-y-2">
                    <li className="text-sm">
                      <code className="text-blue-500">os</code> – For managing
                      directories and files.
                    </li>
                    <li className="text-sm">
                      <code className="text-blue-500">shutil</code> – For
                      copying templates and folder structure.
                    </li>
                    <li className="text-sm">
                      <code className="text-blue-500">json</code> – For saving
                      and reading user configuration.
                    </li>
                  </ul>
                </li>
                <li className="text-lg">
                  <strong className="text-blue-500">
                    HTML / CSS / JavaScript / React
                  </strong>{" "}
                  – The resulting project is a website ready for development.
                </li>
                <li className="text-lg">
                  <strong className="text-blue-500">
                    Command-Line Interface (CLI)
                  </strong>{" "}
                  – Terminal-based interaction for user input.
                </li>
              </ul>
            </div>
            <div className="philosophy mt-15">
              <h1 className="text-4xl font-bold mb-4">Our Philosophy</h1>

              <p className="text-[var(--dark-light)] mb-8">
                Webgen operates on the philosophy of simplifying web development
                by automating the project setup process. <br />
                It provides developers with a quick and flexible way to generate
                structured web projects using customizable <br />
                options such as CSS frameworks and file configurations.
              </p>

              <p className="text-[var(--dark-light)]">
                In summary, Webgen is a lightweight yet powerful CLI tool built
                for developers who want to skip the repetitive <br /> setup
                phase and jump straight into building. With its user-friendly
                interface, extensibility, and developer-first <br /> approach,
                Webgen is the ideal starting point for modern web projects.
              </p>
            </div>
            <div className="btn-page mt-12">
              <a
                onClick={(e) => {
                  e.preventDefault(); // cegah reload
                  setCurrentPage("installation");
                  window.scrollTo({ top: 0 });
                }}
                href=""
                className="border-1 border-gray-600 hover:border-white duration-100 ease-in-out rounded-lg py-5 px-5 flex items-center gap-5 font-semibold justify-end"
              >
                <div>
                  <p className="text-right text-lg font-normal text-[var(--dark-light)]">
                    Next
                  </p>
                  <p className="text-3xl">Installation</p>
                </div>
                <i className="ai-arrow-right text-xl"></i>
              </a>
            </div>
          </div>
        )}

        {currentPage === "installation" && (
          <div className="content max-w-7xl mx-auto p-6">
            <div className="installation">
              <h1 className="text-5xl font-bold mb-4">Installation</h1>
              <hr />
              <p className="text-[var(--dark-light)] pt-8 pb-15">
                Follow these simple steps to run the Webgen tool on your
                computer:
              </p>

              <div className="terminal-1">
                <h1 className="text-4xl font-bold">1. Clone the Repository:</h1>
                <p className="text-[var(--dark-light)] py-8">
                  Open your terminal and run the following command to clone the
                  Webgen repository
                </p>

                <div class="bash-terminal border-1">
                  <div class="terminal-header border-b-1 py-3 px-5">
                    <span class="dot green"></span>
                    <span class="dot yellow"></span>
                    <span class="dot red"></span>
                  </div>
                  <div class="terminal-content py-5 px-5">
                    <pre class="command">
                      <span className="text-blue-600">git</span> clone
                      https://github.com/zen-Hikari/Project-Web-Generator.git
                    </pre>
                  </div>
                </div>
              </div>

              <div className="terminal-2 py-10">
                <h1 className="text-4xl font-bold">
                  2. Navigate to the project folder:
                </h1>
                <p className="text-[var(--dark-light)] py-8">
                  Change your working directory to the tool folder:
                </p>

                <div class="bash-terminal border-1 ">
                  <div class="terminal-header border-b-1 py-3 px-5">
                    <span class="dot green"></span>
                    <span class="dot yellow"></span>
                    <span class="dot red"></span>
                  </div>
                  <div class="terminal-content py-5 px-5">
                    <pre class="command">
                      <span className="text-blue-600">cd</span>{" "}
                      Project-Web-Generator
                    </pre>
                  </div>
                </div>
              </div>

              <div className="terminal-3 py-10">
                <h1 className="text-4xl font-bold">
                  3. Install dependencies using:
                </h1>
                <p className="text-[var(--dark-light)] py-8">
                  Install the required dependencies using pip:
                </p>

                <div class="bash-terminal border-1 ">
                  <div class="terminal-header border-b-1 py-3 px-5">
                    <span class="dot green"></span>
                    <span class="dot yellow"></span>
                    <span class="dot red"></span>
                  </div>
                  <div class="terminal-content py-5 px-5">
                    <pre class="command">
                      <span className="text-blue-600">pip</span> install -r
                      requirements.txt
                    </pre>
                  </div>
                </div>
              </div>

              <div className="terminal-4 py-10">
                <h1 className="text-4xl font-bold">4. Install Globally</h1>
                <p className="text-[var(--dark-light)] py-8">
                  To use webgen as a globally executable command:
                </p>

                <div class="bash-terminal border-1 ">
                  <div class="terminal-header border-b-1 py-3 px-5">
                    <span class="dot green"></span>
                    <span class="dot yellow"></span>
                    <span class="dot red"></span>
                  </div>
                  <div class="terminal-content py-5 px-5">
                    <pre class="command">
                      <span className="text-blue-600">python</span> -m webgen
                      --editable .
                    </pre>
                  </div>
                </div>
              </div>

              <div className="terminal-5 py-10">
                <h1 className="text-4xl font-bold">5. Run the tool</h1>
                <p className="text-[var(--dark-light)] py-8">
                  Now, you can execute the command from anywhere:
                </p>

                <div class="bash-terminal border-1 ">
                  <div class="terminal-header border-b-1 py-3 px-5">
                    <span class="dot green"></span>
                    <span class="dot yellow"></span>
                    <span class="dot red"></span>
                  </div>
                  <div class="terminal-content py-5 px-5">
                    <pre class="command">
                      <span className="text-blue-600">python</span> -m webgen
                    </pre>
                  </div>
                </div>
              </div>
              <div className="btn-page mt-12 flex justify-center w-full gap-5">
                <div className="btn-page-prev w-full">
                  <a
                    onClick={(e) => {
                      e.preventDefault(); // cegah reload
                      setCurrentPage("dosc");
                      window.scrollTo({ top: 0 });
                    }}
                    href="#"
                    className="border-1 border-gray-600 hover:border-white duration-100 ease-in-out rounded-lg py-5 px-5 flex items-center gap-5 font-semibold justify-start"
                  >
                    <i className="ai-arrow-left text-xl"></i>
                    <div>
                      <p className="text-left text-lg font-normal text-[var(--dark-light)]">
                        Previous
                      </p>
                      <p className="text-3xl">Introduction</p>
                    </div>
                  </a>
                </div>
                <div className="btn-page-next w-full">
                  <a
                    onClick={(e) => {
                      e.preventDefault(); // cegah reload
                      setCurrentPage("features");
                      window.scrollTo({ top: 0 });
                    }}
                    href=""
                    className="border-1 border-gray-600 hover:border-white duration-100 ease-in-out rounded-lg py-5 px-5 flex items-center gap-5 font-semibold justify-end"
                  >
                    <div>
                      <p className="text-right text-lg font-normal text-[var(--dark-light)]">
                        Next
                      </p>
                      <p className="text-3xl">Features</p>
                    </div>
                    <i className="ai-arrow-right text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === "features" && (
          <div className="content max-w-7xl mx-auto p-6">
            <h1 className="text-5xl font-bold mb-4">Features</h1>
            <hr className="my-4 border-t-px" />
            <ul className="text-gray-400 list-disc pl-5 space-y-3">
              <li>
                ✅{" "}
                <strong className="text-blue-500">
                  Automatically generates a web project structure
                </strong>{" "}
                based on user input.
              </li>
              <li>
                🎨{" "}
                <strong className="text-blue-500">
                  Allows users to choose a CSS framework
                </strong>{" "}
                for their project:
                <ul className="ml-6 space-y-1">
                  <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:border before:border-gray-500">
                    🌐 <strong className="text-blue-500">Manual CSS</strong>{" "}
                    (for HTML + CSS projects)
                  </li>
                  <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:border before:border-gray-500">
                    🎨 <strong className="text-blue-500">Bootstrap</strong> (for
                    HTML + CSS projects)
                  </li>
                  <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:border before:border-gray-500">
                    🌊 <strong className="text-blue-500">Tailwind CSS</strong>{" "}
                    (for HTML + CSS and React projects)
                  </li>
                  <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:rounded-full before:border before:border-gray-500">
                    🧩 <strong className="text-blue-500">Custom CSS</strong>{" "}
                    (for React projects)
                  </li>
                </ul>
              </li>
              <li>
                ⌨️{" "}
                <strong className="text-blue-500">
                  Interactive CLI interface
                </strong>
                : Uses arrow keys for selection, and Enter to confirm.
              </li>
              <li>
                📂{" "}
                <strong className="text-blue-500">
                  Creates essential project files
                </strong>
                :
                <ul className="ml-6 space-y-1">
                  <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:border before:border-gray-500">
                    For <strong className="text-blue-500">HTML + CSS</strong>:{" "}
                    <code>index.html</code>, <code>style.css</code>,{" "}
                    <code>script.js</code>
                  </li>
                  <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:border before:border-gray-500">
                    For <strong className="text-blue-500">React</strong>:{" "}
                    <code>index.html</code>, <code>App.jsx</code>,{" "}
                    <code>App.css</code>, <code>main.jsx</code>,{" "}
                    <code>index.css</code>, <code>vite.config.js</code>, and{" "}
                    <code>package.json</code>
                  </li>
                </ul>
              </li>
              <li>
                ⚙️{" "}
                <strong className="text-blue-500 ">
                  Supports automatic installation
                </strong>{" "}
                of dependencies like React, Vite, and Tailwind CSS (if
                selected).
              </li>
            </ul>
            <div className="contributing py-13">
              <h1 className="text-4xl font-bold mb-6">Contributing</h1>
              <p className="text-[var(--dark-light)]">
                We welcome and appreciate contributions of any kind! 🚀 Feel
                free to fork this repository, open issues, <br /> or submit pull
                requests to suggest improvements, fix bugs, or add new features.
                Whether it's code, <br /> documentation, or ideas, your input
                helps make Webgen better for everyone. Let's build it together!
                💡
              </p>
            </div>
            <div className="licensi">
              <h1 className="text-4xl font-bold mb-6">License</h1>
              <p className="text-[var(--dark-light)]">
                This project is licensed under the MIT License, a permissive
                open-source license that allows you to freely <br /> use,
                modify, and distribute the software. You are welcome to build
                upon this project for personal or <br /> commercial use, as long
                as you include the original license and copyright notice.
              </p>
            </div>
            <div className="btn-page mt-12 flex justify-center w-full gap-5">
              <div className="btn-page-prev w-full">
                <a
                  onClick={(e) => {
                    e.preventDefault(); // cegah reload
                    setCurrentPage("installation");
                    window.scrollTo({ top: 0 });
                  }}
                  href="#"
                  className="border-1 border-gray-600 hover:border-white duration-100 ease-in-out rounded-lg py-5 px-5 flex items-center gap-5 font-semibold justify-start"
                >
                  <i className="ai-arrow-left text-xl"></i>
                  <div>
                    <p className="text-left text-lg font-normal text-[var(--dark-light)]">
                      Previous
                    </p>
                    <p className="text-3xl">Installation</p>
                  </div>
                </a>
              </div>
              <div className="btn-page-next w-full">
                <a
                  onClick={(e) => {
                    e.preventDefault(); // cegah reload
                    setCurrentPage("cli");
                    window.scrollTo({ top: 0 });
                  }}
                  href=""
                  className="border-1 border-gray-600 hover:border-white duration-100 ease-in-out rounded-lg py-5 px-5 flex items-center gap-5 font-semibold justify-end"
                >
                  <div>
                    <p className="text-right text-lg font-normal text-[var(--dark-light)]">
                      Next
                    </p>
                    <p className="text-3xl">CLI</p>
                  </div>
                  <i className="ai-arrow-right text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        )}
        {currentPage === "cli" && (
          <div className="content max-w-7xl mx-auto p-6">
            <h1 className="text-5xl font-bold">Command Line Interface</h1>
            <hr className="my-4 border-t-px" />
            <div className="opsi">
              <h1 className="text-3xl font-bold mb-12">Webgen CLI</h1>
              <p className="mb-5">
                <mark className="bg-[var(--border)] text-gray-100 py-2 px-2 font-bold rounded-sm text-sm">
                  Webgen
                </mark>
              </p>
              <p className="mb-12">starting from global webgen command</p>

              <h1 className="text-2xl font-bold mb-5">Usage</h1>
              <div className="bash-terminal border-1 mb-12">
                <div className="terminal-header border-b-1 py-3 px-5 flex gap-2">
                  <span className="dot green w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="dot yellow w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="dot red w-3 h-3 rounded-full bg-red-500"></span>
                </div>
                <div className="terminal-content py-5 px-5 bg-black text-white rounded-b-md">
                  <pre className="command">
                    <span className="text-blue-400">python</span> -m webgen
                  </pre>
                </div>
              </div>

              <h1 className="text-2xl font-bold mb-5">Options</h1>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border border-gray-300 dark:border-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-2 font-semibold border-b border-gray-300 dark:border-gray-700 border-r">
                        Option
                      </th>
                      <th className="px-4 py-2 font-semibold border-b border-gray-300 dark:border-gray-700">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 font-mono  border-r border-gray-300 dark:border-gray-700">
                        <mark className="bg-[var(--border)] text-blue-600 py-1 px-1 font-bold rounded-sm text-sm">
                          --help
                        </mark>
                      </td>
                      <td className="px-4 py-2">Show help and how to use</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 font-mono border-r border-gray-300 dark:border-gray-700">
                        <mark className="bg-[var(--border)] text-blue-600 py-1 px-1 font-bold rounded-sm text-sm">
                          --list
                        </mark>
                      </td>
                      <td className="px-4 py-2">
                        Show list of available templates and CSS
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-mono text-blue-600 border-r border-gray-300 dark:border-gray-700">
                        <mark className="bg-[var(--border)] text-blue-600 py-1 px-1 font-bold rounded-sm text-sm">
                          --version
                        </mark>
                      </td>
                      <td className="px-4 py-2">Show project version</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="btn-page mt-12 flex justify-center w-full gap-5">
              <div className="btn-page-prev w-full">
                <a
                  onClick={(e) => {
                    e.preventDefault(); // cegah reload
                    setCurrentPage("features");
                    window.scrollTo({ top: 0 });
                  }}
                  href="#"
                  className="border-1 border-gray-600 hover:border-white duration-100 ease-in-out rounded-lg py-5 px-5 flex items-center gap-5 font-semibold justify-start"
                >
                  <i className="ai-arrow-left text-xl"></i>
                  <div>
                    <p className="text-left text-lg font-normal text-[var(--dark-light)]">
                      Previous
                    </p>
                    <p className="text-3xl">Features</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default GuidePage;

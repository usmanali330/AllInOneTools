import React from 'react';

const UsmanPortfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white font-sans px-4 py-8">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Usman Ali</h1>
        <p className="text-lg text-gray-300">Frontend Web Developer</p>
      </header>

      {/* About Section */}
      <section className="mb-10 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-gray-300">
          I'm a passionate Web Developer with 2 years of experience in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and ReactJS. I love building responsive and attractive websites that provide great user experiences.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
          {['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'ReactJS'].map(skill => (
            <div key={skill} className="bg-gray-800 rounded-lg py-3 shadow-md hover:bg-gray-700 transition">{skill}</div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Projects</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">Portfolio Website</h3>
            <p className="text-gray-400">A personal portfolio website showcasing my skills and projects using ReactJS and Tailwind CSS.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">Weather App</h3>
            <p className="text-gray-400">A weather forecast app using open weather API, styled with Tailwind CSS.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p className="text-gray-300">Phone: 0370-5040336</p>
        <p className="text-gray-300">Address: Landai Shah, Sardheri, Charsadda, KPK, Pakistan</p>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} © 2025 Usman Ali. Built with using ReactJS & Tailwind CSS
      </footer>
    </div>
  );
};

export default UsmanPortfolio;

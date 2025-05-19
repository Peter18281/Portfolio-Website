import React from 'react'
import Navigation from '@/components/Navigation'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* About Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                About Me
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Learn more about my journey, skills, and what drives me to create exceptional digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Background */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Professional Background
            </h2>
            <div className="mt-8 space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Senior Full Stack Developer</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">Company Name • 2020 - Present</p>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Led the development of multiple web applications using modern technologies and best practices.
                  Collaborated with cross-functional teams to deliver high-quality solutions.
                </p>
              </div>
              {/* Add more experience items as needed */}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Education
            </h2>
            <div className="mt-8 space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-300">University Name • 2016 - 2020</p>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Focused on software engineering, data structures, and algorithms.
                  Participated in various hackathons and coding competitions.
                </p>
              </div>
              {/* Add more education items as needed */}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Skills
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Frontend Development</h3>
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• React.js / Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• HTML5 / CSS3</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Backend Development</h3>
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Node.js</li>
                  <li>• Python</li>
                  <li>• SQL / NoSQL</li>
                  <li>• RESTful APIs</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tools & Technologies</h3>
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Git / GitHub</li>
                  <li>• Docker</li>
                  <li>• AWS</li>
                  <li>• CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 
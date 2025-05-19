import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import portfolio from '@/img/portfolio.png'

const technologies = [
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'React',
  'Vercel',
  'Framer Motion'
]

// Set this to true if the repository is private
const isPrivate = false

export default function PortfolioWebsiteProject() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      {/* Hero Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Portfolio Website
              <span className="block w-24 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mt-4"></span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A modern, responsive portfolio website built with Next.js and Tailwind CSS.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <svg 
                className={`w-8 h-8 ${isPrivate ? 'text-gray-400 dark:text-gray-500' : 'text-green-600 dark:text-green-500'}`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              {isPrivate ? (
                <span className="text-gray-400 dark:text-gray-500">Private</span>
              ) : (
                <a
                  href="https://github.com/Peter18281/Portfolio-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 dark:text-green-500 hover:underline"
                >
                  View Repository
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Overview</h2>
            <span className="block w-16 h-1 bg-teal-600 dark:bg-teal-400 mb-6"></span>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                This portfolio website was built using Next.js and TypeScript for optimal performance and type safety. 
                The UI is crafted with Tailwind CSS, providing a modern and responsive design that works seamlessly across all devices. 
                Framer Motion adds smooth animations and transitions, while Vercel ensures fast deployment and reliable hosting. 
                The site is built with developer experience in mind, featuring a clean codebase and efficient component structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-0">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Key Features</h2>
            <span className="block w-16 h-1 bg-teal-600 dark:bg-teal-400 mb-8"></span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Responsive Design</h4>
                <p className="text-gray-600 dark:text-gray-300">Fully responsive layout that works on all devices</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Dark Mode</h4>
                <p className="text-gray-600 dark:text-gray-300">Built-in dark mode support with smooth transitions</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Project Showcase</h4>
                <p className="text-gray-600 dark:text-gray-300">Detailed project pages with galleries and features</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="w-full bg-white dark:bg-gray-800 py-12">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technologies Used</h2>
            <span className="block w-16 h-1 bg-teal-600 dark:bg-teal-400 mb-8"></span>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
            >
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 
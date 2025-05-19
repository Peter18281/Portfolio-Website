import React from 'react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      {/* Hero Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex-1"></div>
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                Resume
                <span className="block w-24 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mt-4"></span>
              </h1>
            </div>
            <div className="flex-1 flex justify-end">
              <a
                href="https://docs.google.com/document/d/1SfAACqm635MVEExBaT0STS5uzRux1kxwd1LT7_FCzBc/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="pt-8 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <iframe
              src="https://docs.google.com/document/d/1SfAACqm635MVEExBaT0STS5uzRux1kxwd1LT7_FCzBc/preview"
              className="w-full h-[1000px]"
              frameBorder="0"
            />
          </div>
        </div>
      </section>
    </div>
  )
} 
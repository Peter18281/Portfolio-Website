import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import lafomo from '@/img/La-Fomo-logo.webp'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-6 px-2 sm:px-4 lg:px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Peter Preuschoff</span>
                <span className="block text-teal-600 dark:text-teal-400">Full Stack Developer</span>
                <span className="block w-24 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mt-4"></span>
              </h1>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link href="/projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10">
                    View My Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-8 px-2 sm:px-4 lg:px-6 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center">
              Featured Project
              <span className="block w-24 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mt-4"></span>
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-2xl w-full">
                <div className="relative aspect-square">
                  <Image
                    src={lafomo}
                    alt="La Fomo"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent backdrop-blur-md" style={{ height: '45%', maskImage: 'linear-gradient(to top, black 80%, transparent 100%)' }}>
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">La Fomo</h3>
                      <p className="mt-4 text-gray-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        Brief description of the project and its key features.
                      </p>
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100/90 text-teal-800 backdrop-blur-sm">
                            React
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100/90 text-teal-800 backdrop-blur-sm">
                            JavaScript
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100/90 text-teal-800 backdrop-blur-sm">
                            MySQL
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100/90 text-teal-800 backdrop-blur-sm">
                            NodeJS
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100/90 text-teal-800 backdrop-blur-sm">
                            CSS
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100/90 text-teal-800 backdrop-blur-sm">
                            Material UI
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100/90 text-teal-800 backdrop-blur-sm">
                            Heroku
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100/90 text-teal-800 backdrop-blur-sm">
                            GCP
                          </span>
                        </div>
                      </div>
                      <div className="mt-8">
                        <Link href="/projects/1" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600/90 hover:bg-teal-700 backdrop-blur-sm">
                          View Project
                          <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 
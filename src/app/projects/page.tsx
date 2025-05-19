import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import lafomo from '@/img/La-Fomo-logo.webp'
import moop from '@/img/MOOP.png'
import minima from '@/img/minimafighter.avif'
import portfolio from '@/img/portfolio.png'

const projects = [
  {
    title: 'La Fomo',
    description: 'An app to showcase a curated list of the best events in London.',
    image: lafomo,
    technologies: ['React', 'JavaScript', 'CSS', 'MySQL'],
    link: '/projects/la-fomo'
  },
  {
    title: 'Moop',
    description: 'An app that showcases and archives art gallery pieces and more.',
    image: moop,
    technologies: ['React', 'TypeScript', 'Expo', 'MongoDB'],
    link: '/projects/moop'
  },
  {
    title: 'Minima Fighter',
    description: 'A 2D networked fighting game built with Unity.',
    image: minima,
    technologies: ['Unity', 'C#', 'Mirror Networking'],
    link: '/projects/minima-fighter'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    image: portfolio,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer'],
    link: '/projects/portfolio-website'
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      {/* Hero Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              My Projects
              <span className="block w-24 h-1 bg-teal-600 dark:bg-teal-400 mx-auto mt-4"></span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Click on any project card to view more details
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-square">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent backdrop-blur-md" style={{ height: '55%', maskImage: 'linear-gradient(to top, black 80%, transparent 100%)' }}>
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-gray-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {project.description}
                      </p>
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100/90 text-teal-800 backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 
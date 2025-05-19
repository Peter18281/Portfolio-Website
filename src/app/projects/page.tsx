import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, TypeScript, and Stripe integration.',
    image: '/project1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    link: '/projects/1'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/project2.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: '/projects/2'
  },
  {
    id: 3,
    title: 'AI-Powered Chatbot',
    description: 'An intelligent chatbot that helps users with customer support and information retrieval.',
    image: '/project3.jpg',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    link: '/projects/3'
  }
]

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {/* Projects Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                My Projects
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Explore my latest work and personal projects that showcase my skills and expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-300">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link
                        href={project.link}
                        className="text-indigo-600 hover:text-indigo-500 font-medium"
                      >
                        View Project →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 
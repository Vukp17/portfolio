'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft, Play } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

const projects = [
  {
    id: 1,
    title: "IradSys",
    description: "A web application for visualizing and monitoring gamma radiation in real time on trucks",
    fullDescription: "IradSys is a comprehensive web application designed for real-time monitoring and visualization of gamma radiation levels on trucks. The system provides advanced data visualization, real-time alerts, and comprehensive reporting features to ensure safety and compliance in radiation monitoring.",
    image: "/projects/iradsys.png",
    images: ["/projects/iradsys.png", "/projects/iradsys-dashboard.png", "/projects/iradsys-list.png"],
    tags: ["PHP", "Angular", "MySql"],
    github: "https://github.com/vukpapic/project-one",
    live: "https://project-one.vercel.app",
    video: "", // Add video URL when available
    slug: "iradsys",
    features: [
      "Real-time gamma radiation monitoring",
      "Advanced data visualization",
      "Alert system for safety thresholds",
      "Comprehensive reporting dashboard",
      "Mobile-responsive design"
    ]
  },
  {
    id: 2,
    title: "Tick",
    description: "A time tracking tool for freelancers and agencies with advanced features",
    fullDescription: "Tick is a sophisticated time tracking application built for freelancers and agencies. It features project management, time tracking, invoicing, and detailed reporting to help manage work efficiently and professionally.",
    image: "/projects/tick.png",
    images: ["/projects/tick.png", "/projects/time-track-main.png", "/projects/time-track-login.png", "/projects/time-track-project.png"],
    tags: ["Angular", "Nestjs", "PostgreSQL","Prisma"],
    github: "https://github.com/vukpapic/project-two",
    live: "https://project-two.vercel.app",
    video: "", // Add video URL when available
    slug: "tick",
    features: [
      "Advanced time tracking",
      "Project management tools",
      "Invoicing system",
      "Detailed reporting and analytics",
      "Team collaboration features"
    ]
  },
  {
    id: 3,
    title: "eCitera",
    description: "Medical management app for nutrition and health with smart calculations",
    fullDescription: "eCitera is a comprehensive medical management application focused on nutrition and health. It provides smart calculations for dietary planning, health monitoring, and medical record management with an intuitive interface for healthcare professionals.",
    image: "/projects/ecitera.png",
    images: ["/projects/ecitera.png", "/projects/ecitera-pp-dashboard.png", "/projects/ecitera-list.png"],
    tags: ["Angular", "PHP", "SQLServer"],
    github: "",
    live: "https://project-three.vercel.app",
    video: "", // Add video URL when available
    slug: "ecitera",
    features: [
      "Smart nutrition calculations",
      "Health monitoring dashboard",
      "Medical record management",
      "Patient progress tracking",
      "Healthcare professional tools"
    ]
  },
  {
    id: 4,
    title: "Sledat",
    description: "Fleet management system with features for tracking and managing vehicles",
    fullDescription: "Sledat is a comprehensive fleet management system designed to track and manage vehicles efficiently. It provides real-time GPS tracking, maintenance scheduling, fuel monitoring, and driver management features for optimal fleet operations.",
    image: "/projects/sledat.png",
    images: ["/projects/sledat.png"],
    tags: [ "Angular", "NestJS", "MongoDB"],
    github: "",
    live: "https://sledat.com",
    video: "", // Add video URL when available
    slug: "sledat",
    features: [
      "Real-time GPS vehicle tracking",
      "Maintenance scheduling system",
      "Fuel consumption monitoring",
      "Driver management tools",
      "Route optimization"
    ]
  }
];

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4">Project Not Found</h1>
          <button 
            onClick={() => router.back()}
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-stone-200 dark:border-stone-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.button
              onClick={() => window.location.href = '/'}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Portfolio
            </motion.button>
            <motion.h1 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-semibold text-stone-900 dark:text-stone-100"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </nav>

      {/* Project Content */}
      <div className="pt-20 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-light text-stone-900 dark:text-stone-100 mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-3xl mx-auto mb-8">
              {project.fullDescription}
            </p>
            
            {/* Project Links */}
            <div className="flex justify-center space-x-6 mb-8">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-stone-900 dark:bg-stone-700 text-white rounded-full hover:bg-stone-800 dark:hover:bg-stone-600 transition-colors font-medium"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Source
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </motion.a>
              )}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Walkthrough Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-light text-stone-900 dark:text-stone-100 mb-8 text-center">
              Project Walkthrough
            </h2>
            <div className="bg-white dark:bg-stone-800 rounded-2xl overflow-hidden shadow-lg">
              {project.video ? (
                <div className="aspect-video">
                  <iframe 
                    src={project.video}
                    className="w-full h-full"
                    allowFullScreen
                    title={`${project.title} Walkthrough`}
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-700 dark:to-stone-600 flex items-center justify-center">
                  <div className="text-center text-stone-500 dark:text-stone-400">
                    <Play className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">Video Coming Soon</p>
                    <p className="text-sm">Project walkthrough video will be available here</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Project Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-light text-stone-900 dark:text-stone-100 mb-8 text-center">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-stone-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img 
                    src={image} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-contain object-center p-4"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-light text-stone-900 dark:text-stone-100 mb-8 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-stone-800 rounded-xl p-6 shadow-sm"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                    <p className="text-stone-700 dark:text-stone-300">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-light text-stone-900 dark:text-stone-100 mb-6">
              Interested in Similar Work?
            </h2>
            <p className="text-stone-600 dark:text-stone-400 mb-8 max-w-2xl mx-auto">
              I'd love to help bring your ideas to life. Let's discuss your next project.
            </p>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "IradSys",
    description: "A web application for visualizing and monitoring gamma radiation in real time on trucks",
    fullDescription: "IradSys is a comprehensive web application designed for real-time monitoring and visualization of gamma radiation levels on trucks. The system provides advanced data visualization, real-time alerts, and comprehensive reporting features to ensure safety and compliance in radiation monitoring.",
    image: "/projects/iradsys.png",
    images: ["/projects/iradsys.png", "/projects/iradsys-dashboard.png", "/projects/iradsys-list.png"],
    tags: ["PHP", "Angular", "MySql"],
    live: "https://iradsys.net",
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
    live: "https://88.198.106.21/",
    video: "/videos/tick.mp4", // Add video URL when available
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
  },
  {
    id: 5,
    title: "Uphive",
    description: "A browser extension to turn Upwork leads into contracts with client insights and proposal templates",
    fullDescription: "Uphive is a powerful browser extension designed to transform Upwork leads into contracts. It streamlines client management by capturing client insights including name, website, budget, and location. The extension provides professional proposal and contract templates, an automated lead database, opportunity tracking, and reduces administrative work by up to 80% with seamless one-click Upwork integration.",
    image: "/projects/uphive.png",
    images: ["/projects/uphive.png"],
    tags: ["JavaScript", "Chrome Extension", "React"],
    live: "https://uphive.app",
    video: "",
    slug: "uphive",
    features: [
      "Client insights capture - name, website, budget, location",
      "Professional proposal and contract templates",
      "Automated lead database with search and filter",
      "Real-time opportunity tracking",
      "Dynamic placeholder variables for personalization",
      "Reduces admin work by 80%",
      "Seamless one-click Upwork integration",
      "Works directly within Upwork platform"
    ]
  }
];

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const project = projects.find(p => p.slug === slug);
  
  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };
  
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
          {project.video && (
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
                <div className="aspect-video">
                  <iframe 
                    src={project.video}
                    className="w-full h-full"
                    allowFullScreen
                    title={`${project.title} Walkthrough`}
                  />
                </div>
              </div>
            </motion.div>
          )}

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
            
            {/* Main Image Display */}
            <div className="relative max-w-4xl mx-auto mb-8">
              <div className="bg-white dark:bg-stone-800 rounded-2xl overflow-hidden shadow-lg">
                <div className="relative aspect-video">
                  <Image 
                    src={project.images[currentImageIndex]} 
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    fill
                    className="object-contain p-4"
                  />
                  
                  {/* Navigation Arrows */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>
              </div>
              
              {/* Image Counter */}
              {project.images.length > 1 && (
                <div className="text-center mt-4">
                  <span className="text-stone-600 dark:text-stone-400">
                    {currentImageIndex + 1} of {project.images.length}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {project.images.length > 1 && (
              <div className="flex justify-center gap-4 overflow-x-auto pb-4">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-blue-500 scale-105'
                        : 'border-stone-300 dark:border-stone-600 hover:border-blue-400'
                    }`}
                  >
                    <Image 
                      src={image} 
                      alt={`${project.title} thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
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
              I&apos;d love to help bring your ideas to life. Let&apos;s discuss your next project.
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

'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

// Animated Counter Component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const projects = [
  {
    id: 1,
    title: "IradSys",
    description: "A web application for visualizing and monitoring gamma radiation in real time on trucks",
    image: "/projects/iradsys.png",
    tags: ["PHP", "Angular", "MySql"],
    github: "",
    live: "",
    video: "", // Add video URL when available
    slug: "iradsys"
  },
  {
    id: 2,
    title: "Tick",
    description: "A time tracking tool for freelancers and agencies with advanced features",
    image: "/projects/tick.png",
    tags: ["Angular", "Nestjs", "PostgreSQL","Prisma"],
    github: "https://github.com/vukpapic/project-two",
    live: "",
    video: "", // Add video URL when available
    slug: "tick"
  },
  {
    id: 3,
    title: "eCitera",
    description: "Medical management app for nutrition and health with smart calculations",
    image: "/projects/ecitera.png",
    tags: ["Angular", "PHP", "SQLServer"],
    github: "",
    live: "",
    video: "", // Add video URL when available
    slug: "ecitera"
  },
  {
    id: 4,
    title: "Sledat",
    description: "Fleet management system with features for tracking and managing vehicles",
    image: "/projects/sledat.png",
    tags: [ "Angular", "NestJS", "MongoDB"],
    github: "",
    live: "https://sledat.com",
    video: "", // Add video URL when available
    slug: "sledat"
  }
];

const experience = [
  {
    company: "Uscom d.o.o",
    position: "Full-stack Developer",
    period: "May 2024 - Present",
    description: "ERP System Development – Participated in the design, development, and maintenance of ERP systems tailored to client needs and business workflows. Managed task distribution within the team, coordinated project milestones, and maintained direct communication with clients to gather requirements and provide support. Frontend Development and Visualization (Angular) – Developed and visualized modern user interfaces using the Angular framework, ensuring a responsive and user-friendly experience."
  },
  {
    company: "Paradigmatic Innovations",
    position: "Research And Development Engineer",
    period: "March 2025 - Present",
    description: "Development of R&D solutions, concept testing across various projects, AI integration, and innovative technologies."
  },
  {
    company: "AMES d.o.o.",
    position: "Web Developer",
    period: "March 2023 - Present",
    description: "Developed IoT solutions and planned new features in collaboration with clients. Built internal tools and handled system integrations. Independently led smaller projects from concept to delivery."
  },
  {
    company: "LANCom",
    position: "Cloud Administrator",
    period: "March 2023 - March 2024",
    description: "Assisted in system engineering tasks, including setup, maintenance, and basic troubleshooting. Gained hands-on experience with IT infrastructure and internal support tools. Contributed to day-to-day team operations and technical documentation."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm border-b border-stone-200 dark:border-stone-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-semibold text-stone-900 dark:text-stone-100"
            >
              Vuk Papić
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex space-x-8"
            >
              <a href="#about" className="text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#experience" className="text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#contact" className="text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-bold">
                VP
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-stone-900 dark:text-stone-100 mb-6">
             Full-stack Developer
            </h1>
            <p className="text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto mb-8">
              Developer based in Eurpe. I specialize in UI design, web and mobile 
              application development and maintenance.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Upwork Section */}
      <section className="py-16 px-6 bg-white dark:bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-stone-900 dark:text-stone-100 mb-4">
              Freelance Excellence
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              Proven track record of delivering high-quality projects on Upwork with satisfied clients worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 100% Job Success Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-stone-50 dark:bg-stone-700 rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
                <AnimatedCounter value={100} suffix="%" /> Job Success
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                Perfect completion rate with all clients satisfied
              </p>
            </motion.div>

            {/* Rising Talent Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-stone-50 dark:bg-stone-700 rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">↗</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
                Rising Talent
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                Recognized for exceptional skills and client feedback
              </p>
            </motion.div>

            {/* Top Rated Plus (if applicable) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-stone-50 dark:bg-stone-700 rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">★</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
                <AnimatedCounter value={5} suffix=".0" /> Rating
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm">
                Consistently excellent client reviews and ratings
              </p>
            </motion.div>
          </div>

          {/* Client Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-blue-50 to-stone-50 dark:from-blue-900/20 dark:to-stone-700 rounded-2xl p-8"
          >
            <div className="text-center">
              <div className="text-4xl text-blue-500 mb-4">&ldquo;</div>
              <p className="text-lg text-stone-700 dark:text-stone-300 mb-6 italic">
                &ldquo;After going through 4 different freelancers to upgrade out custom built multimodal freight Calculator, we found Vuk. His understanding of the task, knowledge and expertise was like no other. He made everything look like a breeze. Thank you&rdquo;
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <span className="text-stone-600 dark:text-stone-400 ml-3"> — Kyle Ram Containezone</span>
              </div>
            </div>
          </motion.div>

          {/* Upwork Profile Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <motion.a
              href="https://www.upwork.com/freelancers/~015cb7d0f4131554bd?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.006-2.439-5.458-5.439-5.458z"/>
              </svg>
              View Upwork Profile
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-stone-900 dark:text-stone-100 mb-4">
              Featured Projects
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              A selection of my recent work showcasing different technologies and design approaches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => window.location.href = `/projects/${project.slug}`}
              >
                {/* Project Image */}
                <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300 p-4"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-stone-700">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-stone-300 dark:bg-stone-600 rounded-lg flex items-center justify-center">
                          📱
                        </div>
                        <p className="text-sm">Project Image</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Project Name */}
                <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white dark:bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-stone-900 dark:text-stone-100 mb-4">
              Work Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-stone-50 dark:bg-stone-700 rounded-2xl p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                      {exp.position}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-stone-600 dark:text-stone-400 mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-stone-600 dark:text-stone-400">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-stone-900 dark:text-stone-100 mb-4">
              About Me
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-stone-600 dark:text-stone-400 mb-6">
                Hi, I&apos;m Vuk Papić, a passionate Web and Mobile Developer with a knack for 
                crafting seamless digital experiences. With a strong background in both frontend 
                and backend development, I thrive in the intersection where creativity meets technology.
              </p>
              <p className="text-lg text-stone-600 dark:text-stone-400 mb-8">
                Over the years, I&apos;ve honed my skills in building robust, user-friendly applications 
                that not only meet the needs of users but also push the boundaries of what&apos;s possible. 
                My projects range from innovative web applications to responsive designs, all with a 
                focus on performance, security, and scalability.
              </p>
              <div className="flex space-x-6">
                <a href="https://github.com/Vukp17" className="text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/vuk-papi%C4%87-1b77b3187/" className="text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl overflow-hidden flex items-center justify-center"
            >
              <Image 
                src="/profile/IMG_5212.jpg" 
                alt="Vuk Papić"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="text-center text-stone-600 dark:text-stone-400 hidden">
                <div className="w-24 h-24 mx-auto mb-4 bg-stone-300 dark:bg-stone-600 rounded-full flex items-center justify-center text-4xl">
                  👤
                </div>
                <p>Your Photo Here</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white dark:bg-stone-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-stone-900 dark:text-stone-100 mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-stone-600 dark:text-stone-400 mb-8 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
            </p>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-stone-200 dark:border-stone-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-stone-600 dark:text-stone-400">
            © 2025 Vuk Papić. Designed & Developed
          </p>
        </div>
      </footer>
    </div>
  );
}

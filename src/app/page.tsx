'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ArrowLeft, ArrowRight, Building2, Code2, Github, Linkedin, Mail, Menu, Monitor, Play, Smartphone, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Animated Counter Component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 200,
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
    slug: "iradsys",
    backgroundColor: "#ffffff",
    stats: [
      { value: "75%", label: "Faster reporting" },
      { value: "99.9%", label: "System uptime" },
    ]
  },
  {
    id: 2,
    title: "Tick",
    description: "A time tracking tool for freelancers and agencies with advanced features",
    image: "/projects/tick.png",
    tags: ["Angular", "Nestjs", "PostgreSQL", "Prisma"],
    github: "https://github.com/vukpapic/project-two",
    live: "",
    video: "", // Add video URL when available
    slug: "tick",
    backgroundColor: "#ffffff",
    stats: [
      { value: "42%", label: "More billable hours" },
      { value: "3x", label: "Faster invoicing" },
    ]
  },
  {
    id: 3,
    title: "eCitera",
    description: "Medical management app for nutrition and health with smart calculations",
    image: "/projects/ecitera2.png",
    tags: ["Angular", "PHP", "SQLServer"],
    github: "",
    live: "",
    video: "", // Add video URL when available
    slug: "ecitera",
    backgroundColor: "#ffffff",
    stats: [
      { value: "65%", label: "Workflow automation" },
      { value: "100%", label: "Data traceability" },
    ]
  },
  {
    id: 4,
    title: "Sledat",
    description: "Fleet management system with features for tracking and managing vehicles",
    image: "/projects/sledat.png",
    tags: ["Angular", "NestJS", "MongoDB"],
    github: "",
    live: "https://sledat.com",
    video: "", // Add video URL when available
    slug: "sledat",
    backgroundColor: "#d9d9d9",
    stats: [
      { value: "30%", label: "Fuel cost reduction" },
      { value: "24/7", label: "Fleet visibility" },
    ]
  },
  {
    id: 5,
    title: "Uphive",
    description: "A browser extension to turn Upwork leads into contracts with client insights and proposal templates",
    image: "/projects/uphive.png",
    tags: ["JavaScript", "Chrome Extension", "React"],
    github: "",
    live: "https://uphive.app",
    video: "",
    slug: "uphive",
    backgroundColor: "#ffffff",
    stats: [
      { value: "2.4x", label: "Reply conversion" },
      { value: "58%", label: "Less proposal time" },
    ]
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

const clientLogos = [
  {
    src: '/clients/ms-ivnnovation-hub.avif',
    alt: 'MS Innovation Hub'
  },
  {
    src: '/clients/containerzone.webp',
    alt: 'Containezone'
  },
  {
    src: '/clients/sledat.png',
    alt: 'Sledat'
  },
  {
    src: '/clients/ames_logo.png',
    alt: 'AMES'
  },
  {
    src: '/clients/modulor.webp',
    alt: 'Modulor'
  },
    {
    src: '/clients/elevio.webp',
    alt: 'Elevio'
  },

];

const applicationTypes = [
  {
    title: 'Web Applications',
    description: 'Our custom web applications prioritize scalability and exceptional user experience. We ensure seamless integration with existing systems, providing a user-centric interface that fosters engagement and retention.',
    icon: Code2,
  },
  {
    title: 'Mobile Applications',
    description: 'We engineer and design bespoke mobile applications that resonate deeply with your target users. Leveraging modern technologies, we craft immersive and engaging mobile experiences that drive measurable business outcomes.',
    icon: Smartphone,
  },
  {
    title: 'Desktop Applications',
    description: 'We specialize in building robust and feature-rich desktop applications tailored to your specific requirements. Our focus on intuitive interface design and optimization helps users achieve their goals efficiently.',
    icon: Monitor,
  },
  {
    title: 'Enterprise Application',
    description: 'We develop custom enterprise applications that integrate with your existing IT ecosystem. From CRM to analytics tools, we deliver tailored solutions that streamline business processes and optimize performance.',
    icon: Building2,
  },
];

const applicationUseCases = [
  'Enterprise Dashboards & Web Portals',
  'Scalable SaaS Products',
  'Branded Microsites',
  'Mobile Healthcare',
  'Large Scale Distribution',
  'Fleet Management',
  'Media Streaming',
  'mCommerce Development',
  'Sports & Lifestyle Apps',
  'Internal Admin Tools',
  'Booking & Reservation Systems',
  'Fintech Workflows',
];

const deliveryPipeline = [
  {
    title: 'Plan',
    description: 'Conduct a requirements analysis, define the project scope and deliverables, and set up the project team along with the necessary tools.',
  },
  {
    title: 'Build',
    description: 'Plan and schedule development iterations, design and develop the application, and create comprehensive documentation.',
  },
  {
    title: 'Test',
    description: 'Conduct thorough post-development QA and perform acceptance testing with stakeholders.',
  },
  {
    title: 'Deploy',
    description: 'Transfer project ownership, hand over all documentation, and provide on-demand user training sessions.',
  },
  {
    title: 'Support',
    description: 'Continuously monitor solution performance and offer L1, L2, and L3 technical support as needed.',
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroLogoItems = Array.from({ length: 10 }, (_, index) => ({
    ...clientLogos[index % clientLogos.length],
    key: `client-${index}`
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F9FA] to-[#EEF1F4] dark:from-[#0A1128] dark:to-[#111B36]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#030607]/85 backdrop-blur-sm border-b border-white/10">
        <div className="mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-semibold text-white"
            >
              Vuk Papić
            </motion.h1>

            {/* Desktop Menu */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#about" className="text-white/80 hover:text-[#30B795] transition-colors">About</a>
              <a href="#services" className="text-white/80 hover:text-[#30B795] transition-colors">Services</a>
              <a href="#projects" className="text-white/80 hover:text-[#30B795] transition-colors">Projects</a>
              <a href="#experience" className="text-white/80 hover:text-[#30B795] transition-colors">Experience</a>
              <a href="#contact" className="text-white/80 hover:text-[#30B795] transition-colors">Contact</a>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="md:hidden p-2 text-white/80 hover:text-[#30B795] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              height: isMenuOpen ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4">
              <a
                href="#about"
                className="block text-white/80 hover:text-[#30B795] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="block text-white/80 hover:text-[#30B795] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#projects"
                className="block text-white/80 hover:text-[#30B795] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#experience"
                className="block text-white/80 hover:text-[#30B795] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#contact"
                className="block text-white/80 hover:text-[#30B795] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden bg-[#030607]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(48,183,149,0.18),transparent_45%),radial-gradient(circle_at_80%_40%,rgba(48,183,149,0.08),transparent_35%)]" />

        <div className="mx-auto max-w-[1280px] relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">
                <span className="text-[#30B795]">20+ Businesses</span> are thriving on our custom software solutions
              </h1>
              <p className="text-lg text-white/80 max-w-xl mb-10">
                No two businesses are alike, so their software shouldn&apos;t be either. I craft end-to-end custom solutions for web platforms, internal systems, and high-growth products.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#30B795] text-white hover:bg-[#30B795]/10 transition-colors font-medium"
              >
                Get in Touch
                <span aria-hidden>↗</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative h-[360px] md:h-[420px] rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-[#30B795]/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-16 rounded-full border border-[#30B795]/20"
              />

              {Array.from({ length: 72 }, (_, i) => {
                const col = i % 12;
                const row = Math.floor(i / 12);
                return (
                  <motion.span
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full bg-[#30B795]/70"
                    style={{ left: `${8 + col * 7}%`, top: `${18 + row * 10}%` }}
                    animate={{ y: [0, -8, 0], opacity: [0.25, 0.95, 0.25] }}
                    transition={{ duration: 2.8, delay: i * 0.04, repeat: Infinity }}
                  />
                );
              })}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute left-6 bottom-8 px-4 py-3 rounded-xl bg-[#0D1518] border border-[#30B795]/30 text-white"
              >
                <p className="text-xs text-white/70">Delivery speed</p>
                <p className="text-2xl font-semibold text-[#30B795]">5x</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute right-6 top-8 px-4 py-3 rounded-xl bg-[#0D1518] border border-[#30B795]/30 text-white"
              >
                <p className="text-xs text-white/70">Recurring clients</p>
                <p className="text-2xl font-semibold text-[#30B795]">20+</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-14 pt-7 border-t border-white/10 relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030607] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030607] to-transparent z-10" />

            <motion.div
              className="flex w-max items-center gap-14"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
            >
              {[...heroLogoItems, ...heroLogoItems].map((logo, index) => (
                <div
                  key={`${logo.key}-${index}`}
                  className="h-12 min-w-[180px] px-5 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={40}
                    className="h-7 w-auto object-contain opacity-90"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F3F4F6]">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-center justify-between gap-4 mb-10">
            <h2 className="text-4xl font-semibold text-[#0A1128]">
              Just tell us what kind of application you need
            </h2>

            <div className="hidden md:flex items-center gap-3">
              <button
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-[#D1D5DB] text-[#B8BDC6] flex items-center justify-center"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-[#30B795] text-[#30B795] flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {applicationTypes.map((application, index) => {
              const Icon = application.icon;
              return (
                <motion.article
                  key={application.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.45 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-[#D1D5DB] bg-[#F3F4F6] p-8"
                >
                  <motion.div
                    className="mb-7 inline-flex flex-col items-start"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3.4, delay: index * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="relative w-16 h-14">
                      <div className="absolute inset-0 rounded-xl border border-[#D1D5DB] bg-white" />
                      
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2.8, delay: index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Icon size={24} strokeWidth={1.8} className="text-[#30B795]" />
                      </motion.div>
                    </div>
                    <motion.div
                      className="mt-2 h-[6px] rounded-full bg-[#30B795]"
                      animate={{ width: [56, 44, 56], opacity: [1, 0.75, 1] }}
                      transition={{ duration: 3.1, delay: index * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </motion.div>

                  <h3 className="text-[2rem] leading-tight font-semibold text-[#111827] mb-5">
                    {application.title}
                  </h3>
                  <p className="text-[#374151] leading-relaxed text-lg">
                    {application.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="relative left-1/2 mt-20 w-screen -translate-x-1/2 overflow-hidden">
          <div className="mx-auto max-w-[1280px] px-6 mb-10">
            <h2 className="text-4xl font-semibold text-[#0A1128]">
              All kinds of applications get built here
            </h2>
          </div>

          <div className="space-y-6 pb-2">
            <motion.div
              className="flex w-max items-center gap-6"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
            >
              {[...applicationUseCases, ...applicationUseCases].map((item, index) => (
                <div
                  key={`use-case-a-${index}`}
                  className="min-w-[320px] md:min-w-[420px] rounded-2xl border border-[#D1D5DB] bg-[#F3F4F6] px-8 py-9 text-center"
                >
                  <p className="text-3xl md:text-[2.2rem] font-semibold text-[#111827] leading-tight">{item}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex w-max items-center gap-6"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
            >
              {[...applicationUseCases.slice(5), ...applicationUseCases.slice(0, 5), ...applicationUseCases.slice(5), ...applicationUseCases.slice(0, 5)].map((item, index) => (
                <div
                  key={`use-case-b-${index}`}
                  className="min-w-[320px] md:min-w-[420px] rounded-2xl border border-[#D1D5DB] bg-[#F3F4F6] px-8 py-9 text-center"
                >
                  <p className="text-3xl md:text-[2.2rem] font-semibold text-[#111827] leading-tight">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[rgb(250,250,250)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:pt-10"
          >
            <div className="relative w-24 h-14 mb-10">
              <motion.div
                className="absolute left-0 top-3 w-7 h-7 border border-[#9CA3AF] rounded-sm bg-white"
                animate={{ y: [0, -2, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute left-8 top-4 w-8 h-8 border border-[#9CA3AF] rounded-sm bg-[#30B795]"
                animate={{ y: [0, 2, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute left-16 top-7 w-8 h-8 border border-[#9CA3AF] rounded-sm bg-white"
                animate={{ y: [0, -2, 0], rotate: [0, -4, 0] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold text-[#0A1128] leading-tight max-w-2xl">
              Simple yet meticulous, our application delivery pipeline
            </h2>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-10 px-7 py-3 rounded-xl border border-[#1F2937] text-[#1F2937] hover:bg-white transition-colors font-medium"
            >
              Get in Touch
              <span aria-hidden>↗</span>
            </motion.a>
          </motion.div>

          <div className="relative pl-10 md:pl-14">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[#D7DDF0]" />

            {deliveryPipeline.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                className={index === deliveryPipeline.length - 1 ? 'relative pb-0' : 'relative pb-14'}
              >
                <span className="absolute -left-[34px] md:-left-[42px] top-1.5 w-5 h-5 rounded-full bg-white border border-[#D1D5DB] shadow-sm flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6B7280]" />
                </span>

                <h3 className="text-5xl font-semibold text-[#1F2937] mb-2">{step.title}</h3>
                <p className="text-[#4B5563] text-2xl leading-relaxed max-w-2xl">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Upwork Section */}
      {/* <section className="py-16 px-6 bg-white dark:bg-[#111B36]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-[#0A1128] dark:text-[#EEF1F4] mb-4">
              Freelance Excellence
            </h2>
            <p className="text-[#4B5563] dark:text-[#98A2AE] max-w-2xl mx-auto">
              Proven track record of delivering high-quality projects on Upwork with satisfied clients worldwide.
            </p>
          </motion.div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
            {/* 100% Job Success Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F8F9FA] dark:bg-[#2D3748] rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-[#E7F0FF] dark:bg-[#0A1128] rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-[#0056D2] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0A1128] dark:text-[#EEF1F4] mb-2">
                <AnimatedCounter value={100} suffix="%" /> Job Success
              </h3>
              <p className="text-[#4B5563] dark:text-[#98A2AE] text-sm">
                Perfect completion rate with all clients satisfied
              </p>
            </motion.div> */}

            {/* Rising Talent Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#F8F9FA] dark:bg-[#2D3748] rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-[#DCEBFF] dark:bg-[#0A1128] rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-[#1A73E8] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">↗</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0A1128] dark:text-[#EEF1F4] mb-2">
                Rising Talent
              </h3>
              <p className="text-[#4B5563] dark:text-[#98A2AE] text-sm">
                Recognized for exceptional skills and client feedback
              </p>
            </motion.div> */}

            {/* Top Rated Plus (if applicable) */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#F8F9FA] dark:bg-[#2D3748] rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-[#FFF2E7] dark:bg-[#0A1128] rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-[#FF6600] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">★</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0A1128] dark:text-[#EEF1F4] mb-2">
                <AnimatedCounter value={5} suffix=".0" /> Rating
              </h3>
              <p className="text-[#4B5563] dark:text-[#98A2AE] text-sm">
                Consistently excellent client reviews and ratings
              </p>
            </motion.div> */}
          {/* </div> */}

          {/* Client Testimonial */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-[#E7F0FF] to-[#F8F9FA] dark:from-[#0A1128]/20 dark:to-[#2D3748] rounded-2xl p-8"
          >
            <div className="text-center">
              <div className="text-4xl text-[#1A73E8] mb-4">&ldquo;</div>
              <p className="text-lg text-[#2D3748] dark:text-[#D9DDE2] mb-6 italic">
                &ldquo;After going through 4 different freelancers to upgrade out custom built multimodal freight Calculator, we found Vuk. His understanding of the task, knowledge and expertise was like no other. He made everything look like a breeze. Thank you&rdquo;
              </p>
              <div className="flex items-center justify-center space-x-2">
                <div className="flex text-[#FFB27A]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <span className="text-[#4B5563] dark:text-[#98A2AE]"> — Kyle Ram Containezone</span>
              </div>
            </div>
          </motion.div> */}

          {/* Upwork Profile Link */}
          {/* <motion.div
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
              className="inline-flex items-center px-6 py-3 bg-[#FF6600] text-white rounded-full hover:bg-[#E55C00] transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.006-2.439-5.458-5.439-5.458z" />
              </svg>
              View Upwork Profile
            </motion.a>
          </motion.div>
        </div>
      </section> */}
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#F3F4F6]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-5xl font-semibold text-[#0A1128]"
            >
              Claims backed by success stories
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#30B795] text-[#30B795] font-medium hover:bg-[#30B795]/10 transition-colors"
              >
                View all Work
                <span aria-hidden>↗</span>
              </a>
              <button aria-label="Previous" className="w-11 h-11 rounded-full border border-[#D1D5DB] text-[#B8BDC6] flex items-center justify-center">
                <ArrowLeft size={20} />
              </button>
              <button aria-label="Next" className="w-11 h-11 rounded-full border border-[#30B795] text-[#30B795] flex items-center justify-center">
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative min-w-[320px] md:min-w-[620px] h-[420px] rounded-xl overflow-hidden snap-start cursor-pointer"
                onClick={() => window.location.href = `/projects/${project.slug}`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={95}
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 group-hover:blur-[2px] transition-all duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#1F2E5B]" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-[#1B3C86]/45" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-8 text-white transition-transform duration-500 group-hover:-translate-y-14">
                  <h3 className="text-5xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-2xl text-white/90 max-w-3xl leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <button
                      className="px-5 py-3 rounded-full border border-white/60 text-white font-medium hover:bg-white/10 transition-colors"
                      onClick={(event) => {
                        event.stopPropagation();
                        window.location.href = `/projects/${project.slug}`;
                      }}
                    >
                      VIEW CASE STUDY
                    </button>

                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-full bg-white/90 text-[#1F2937] flex items-center justify-center">
                        <ArrowRight size={20} />
                      </span>
                      <span className="w-12 h-12 rounded-full bg-white/90 text-[#1F2937] flex items-center justify-center">
                        <Play size={20} className="ml-0.5" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="grid grid-cols-2 border-t border-white/20 bg-[#4E537C]/90 backdrop-blur-sm">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="px-6 py-4 text-white">
                        <p className="text-4xl font-semibold leading-none">{stat.value}</p>
                        <p className="mt-1 text-lg text-white/90">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white dark:bg-[#111B36]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-[#0A1128] dark:text-[#EEF1F4] mb-4">
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
                className="bg-[#F8F9FA] dark:bg-[#2D3748] rounded-2xl p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0A1128] dark:text-[#EEF1F4]">
                      {exp.position}
                    </h3>
                    <p className="text-[#0056D2] dark:text-[#66A3FF] font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[#4B5563] dark:text-[#98A2AE] mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[#4B5563] dark:text-[#98A2AE]">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-[#E7F0FF] to-[#F8F9FA] dark:from-[#0A1128]/20 dark:to-[#111B36]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-[#0A1128] dark:text-[#EEF1F4] mb-4">
              What Services Do I Offer?
            </h2>
            <p className="text-[#4B5563] dark:text-[#98A2AE] max-w-2xl mx-auto">
              From concept to deployment, I provide comprehensive development services
              tailored to bring your ideas to life with modern technologies and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                iconBg: "linear-gradient(135deg, #FF6B6B, #FF8E8E)",
                iconColor: "#fff",
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                ),
                title: "Full Stack Development",
                description: "I do full-stack development using technologies like React and React Native and Spring Boot for robust backend applications. I focus on creating efficient, high-performance applications with seamless user experiences."
              },
              {
                iconBg: "linear-gradient(135deg, #4ECDC4, #66D9D2)",
                iconColor: "#fff",
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                  </svg>
                ),
                title: "Artificial Intelligence",
                description: "I develop AI solutions, including predictive models that analyze data and provide valuable insights. My work involves machine learning techniques to optimize predictions and enhance decision-making."
              },
              {
                iconBg: "linear-gradient(135deg, #45B7D1, #6BC5E8)",
                iconColor: "#fff",
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                  </svg>
                ),
                title: "Cloud & Deployment",
                description: "I do deployment of applications to scalable cloud environments, ensuring high performance and reliability. I optimize the deployment process to maintain seamless availability for production applications."
              },
              {
                iconBg: "linear-gradient(135deg, #96CEB4, #FFEAA7)",
                iconColor: "#fff",
                icon: (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                ),
                title: "Custom ERP Solutions",
                description: "I build tailored enterprise resource planning solutions designed to streamline business processes and improve efficiency. My ERP systems are customized to meet specific organizational needs and workflows."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="bg-white dark:bg-[#2D3748] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#EEF1F4] dark:border-[#4B5563] h-full">
                  {/* Icon Circle */}
                  <div className="flex justify-center mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                      style={{ background: service.iconBg }}
                    >
                      <div style={{ color: service.iconColor }}>
                        {service.icon}
                      </div>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#0A1128] dark:text-[#EEF1F4] mb-6 text-center group-hover:text-[#0056D2] dark:group-hover:text-[#66A3FF] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4B5563] dark:text-[#98A2AE] leading-relaxed text-center">
                    {service.description}
                  </p>

                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1A73E8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-[#4B5563] dark:text-[#98A2AE] mb-6">
              Ready to start your next project?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#E55C00] transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              Let&apos;s Discuss Your Project
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
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
            <h2 className="text-4xl font-light text-[#0A1128] dark:text-[#EEF1F4] mb-4">
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
              <p className="text-lg text-[#4B5563] dark:text-[#98A2AE] mb-6">
                Hi, I&apos;m Vuk Papić, a passionate Full-stack with a knack for
                crafting seamless digital experiences. With a strong background in both frontend
                and backend development, I thrive in the intersection where creativity meets technology.
              </p>
              <p className="text-lg text-[#4B5563] dark:text-[#98A2AE] mb-8">
                Over the years, I&apos;ve honed my skills in building robust, user-friendly applications
                that not only meet the needs of users but also push the boundaries of what&apos;s possible.
                My projects range from innovative web applications to responsive designs, all with a
                focus on performance, security, and scalability.
              </p>
              <div className="flex space-x-6">
                <a href="https://github.com/Vukp17" className="text-[#4B5563] dark:text-[#98A2AE] hover:text-[#0056D2] dark:hover:text-[#66A3FF] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/vuk-papi%C4%87-1b77b3187/" className="text-[#4B5563] dark:text-[#98A2AE] hover:text-[#0056D2] dark:hover:text-[#66A3FF] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-[#DCEBFF] to-[#DCEBFF] dark:from-[#0A1128] dark:to-[#111B36] rounded-2xl overflow-hidden flex items-center justify-center"
            >
              <Image
                src="/profile/profile.jpg"
                alt="Vuk Papić"
                width={600}
                height={600}
                quality={95}
                priority={true}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="text-center text-[#4B5563] dark:text-[#98A2AE] hidden">
                <div className="w-24 h-24 mx-auto mb-4 bg-[#D9DDE2] dark:bg-[#4B5563] rounded-full flex items-center justify-center text-4xl">
                  👤
                </div>
                <p>Your Photo Here</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white dark:bg-[#111B36]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-[#0A1128] dark:text-[#EEF1F4] mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-[#4B5563] dark:text-[#98A2AE] mb-8 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can design and deliver an innovative solution together.
            </p>
            <motion.a
              href="mailto:papicvuk17@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#E55C00] transition-colors font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#E6E9ED] dark:border-[#2D3748]">
        <div className="max-w-6xl mx-auto">
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <motion.a
              href="https://github.com/Vukp17"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#4B5563] dark:text-[#98A2AE] hover:text-[#0056D2] dark:hover:text-[#66A3FF] transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vuk-papi%C4%87-1b77b3187/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#4B5563] dark:text-[#98A2AE] hover:text-[#0056D2] dark:hover:text-[#66A3FF] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.upwork.com/freelancers/~015cb7d0f4131554bd?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#4B5563] dark:text-[#98A2AE] hover:text-[#0056D2] dark:hover:text-[#66A3FF] transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.006-2.439-5.458-5.439-5.458z" />
              </svg>
            </motion.a>
          </div>

          {/* Email Display */}
          <div className="text-center mb-6">
            <motion.a
              href="mailto:papicvuk17@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 text-[#4B5563] dark:text-[#98A2AE] hover:text-[#0056D2] dark:hover:text-[#66A3FF] transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-lg">papicvuk17@gmail.com</span>
            </motion.a>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-[#4B5563] dark:text-[#98A2AE]">
              © 2025 Vuk Papić. Designed & Developed
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

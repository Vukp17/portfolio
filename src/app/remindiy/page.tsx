'use client';

import { motion } from 'framer-motion';
import { Bell, Clock, Link2, Repeat, Cloud, Crown, Mail, MessageCircle, Users, Menu, X, ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';

const features = [
    {
        icon: Bell,
        title: "Quick Reminder",
        description: "Select any text with a date and instantly create a reminder. Works with any webpage content.",
        gradient: "from-blue-500 to-blue-600"
    },
    {
        icon: Clock,
        title: "Smart Time Selection",
        description: "Choose from preset times: 30 minutes before, 1 hour, 1 day, or set custom timing.",
        gradient: "from-blue-400 to-cyan-500"
    },
    {
        icon: Link2,
        title: "Link Includes",
        description: "Every reminder automatically includes the source link. Never lose context again.",
        gradient: "from-cyan-500 to-blue-500"
    },
    {
        icon: Repeat,
        title: "Repetitive Reminders",
        description: "Set daily, weekly, or custom recurring schedules for habits and routines.",
        gradient: "from-blue-600 to-indigo-600"
    },
    {
        icon: Cloud,
        title: "Cloud Sync",
        description: "Seamlessly sync your reminders across all devices. Access anywhere, anytime.",
        gradient: "from-indigo-500 to-blue-500"
    },
    {
        icon: Crown,
        title: "Bizz (Premium)",
        description: "Unlock advanced features, unlimited reminders, and priority support.",
        gradient: "from-amber-500 to-orange-500"
    },
    {
        icon: Mail,
        title: "Email Reminders",
        description: "Get notified via email. Perfect for important deadlines and events.",
        gradient: "from-blue-500 to-blue-700"
    },
    {
        icon: MessageCircle,
        title: "WhatsApp Reminders",
        description: "Receive reminder notifications directly on WhatsApp for instant access.",
        gradient: "from-green-500 to-emerald-600"
    },
    {
        icon: Users,
        title: "Shared Reminders",
        description: "Collaborate with teams. Share reminders and keep everyone on track.",
        gradient: "from-blue-600 to-purple-600"
    }
];

export default function RemindiyPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
            {/* Header */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-2"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                                <Bell className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                Remindiy
                            </span>
                        </motion.div>

                        {/* Desktop Menu */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="hidden md:flex items-center space-x-8"
                        >
                            <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Features</a>
                            <a href="#premium" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Premium</a>
                            <motion.a
                                href="#download"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all"
                            >
                                Get Extension
                            </motion.a>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
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
                                href="#features"
                                className="block text-slate-600 hover:text-blue-600 transition-colors font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </a>
                            <a
                                href="#premium"
                                className="block text-slate-600 hover:text-blue-600 transition-colors font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Premium
                            </a>
                            <a
                                href="#download"
                                className="block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium text-center shadow-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Extension
                            </a>
                        </div>
                    </motion.div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Floating circles */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.2, 0.35, 0.2]
                        }}
                        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                        className="absolute top-40 right-1/4 w-64 h-64 bg-cyan-200 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8"
                        >
                            <Bell className="w-4 h-4 mr-2" />
                            Chrome Extension
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                                Never Forget
                            </span>
                            <br />
                            <span className="text-slate-800">Anything Again</span>
                        </h1>

                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            The smartest reminder extension for Chrome. Select any text, set reminders instantly,
                            and stay on top of everything that matters.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <motion.a
                                href="#download"
                                id="download"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(37, 99, 235, 0.35)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg shadow-xl shadow-blue-200 flex items-center space-x-2"
                            >
                                <span>Add to Chrome</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="#features"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg border-2 border-blue-200 hover:border-blue-300 transition-colors"
                            >
                                Explore Features
                            </motion.a>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
                        >
                            {[
                                { value: "10K+", label: "Active Users" },
                                { value: "500K+", label: "Reminders Set" },
                                { value: "4.9★", label: "Chrome Rating" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                                    <div className="text-slate-500 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                            Powerful <span className="text-blue-600">Features</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Everything you need to stay organized and never miss a deadline again.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-50"
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Section */}
            <section id="premium" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                            <Crown className="w-4 h-4 mr-2" />
                            Premium Plan
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Upgrade to Bizz
                        </h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
                            Unlock the full potential with unlimited reminders, priority notifications, and premium integrations.
                        </p>

                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20">
                            <div className="grid md:grid-cols-2 gap-6 text-left mb-8">
                                {[
                                    "Unlimited reminders",
                                    "Priority notifications",
                                    "Email & WhatsApp integration",
                                    "Team collaboration",
                                    "Advanced scheduling",
                                    "Priority support",
                                    "Custom reminder sounds",
                                    "Analytics dashboard"
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center text-white"
                                    >
                                        <Check className="w-5 h-5 mr-3 text-blue-300" />
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full md:w-auto px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                            >
                                Start Free Trial
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                            Join thousands of users who never miss a deadline. Install Remindiy today and take control of your schedule.
                        </p>
                        <motion.a
                            href="#download"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-200"
                        >
                            <Bell className="w-5 h-5 mr-2" />
                            Add to Chrome — It&apos;s Free
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-gradient-to-br from-slate-900 to-blue-900 border-t border-blue-800">
                <div className="max-w-6xl mx-auto">
                    {/* Logo and Description */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div className="flex items-center space-x-2 mb-6 md:mb-0">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                                <Bell className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">Remindiy</span>
                        </div>

                        <div className="flex items-center space-x-6">
                            <a href="#features" className="text-blue-200 hover:text-white transition-colors">Features</a>
                            <a href="#premium" className="text-blue-200 hover:text-white transition-colors">Premium</a>
                            <a href="mailto:papicvuk17@gmail.com" className="text-blue-200 hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-8">
                        <motion.a
                            href="https://github.com/Vukp17"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-200 hover:text-white hover:bg-white/20 transition-all"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/vuk-papi%C4%87-1b77b3187/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-200 hover:text-white hover:bg-white/20 transition-all"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </motion.a>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-blue-300 text-sm">
                        <p>© 2025 Remindiy. Built by Vuk Papić. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

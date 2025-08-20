import { motion } from "framer-motion";
import { useState } from "react";
import CTASection from "./CTASection";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#cta" },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500 font-inter">
        
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border-b border-white/20 dark:border-gray-700/40">
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent tracking-tight">
          Weagate
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="relative group hover:text-blue-500 transition-colors"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Actions + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#cta"
            className="hidden md:inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg transition"
          >
            Get Started
          </motion.a>

          {/* Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden backdrop-blur-xl bg-white/40 dark:bg-gray-900/40 border-b border-white/20 dark:border-gray-700/40 px-6 py-4 flex flex-col gap-4 text-gray-700 dark:text-gray-200 font-medium"
        >
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setMobileOpen(false)} // auto close ketika klik
              className="hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          ))}

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#cta"
            className="px-5 py-2 text-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg transition"
          >
            Get Started
          </motion.a>
        </motion.nav>
      )}
    </header>

        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-900 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-indigo-900"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between px-6 pt-40 pb-24 max-w-7xl mx-auto"
          >
            {/* Left content */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-4xl font-extrabold leading-tight">
                <span className="text-blue-500">Weagate:</span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-blue-600 bg-clip-text text-transparent">
                  A Modern WhatsApp Emulator
                </span>
              </h2>
              <p className="text-md text-gray-300 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
                Kelola banyak akun WhatsApp dan aplikasi lain dalam satu tempat.
                Desain ringan, cepat, dan aman untuk produktivitasmu.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#cta"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-indigo-400/40 transition"
                >
                  🚀 Download Now
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#features"
                  className="px-8 py-3 rounded-full bg-gray-200/80 dark:bg-gray-700/80 text-gray-900 dark:text-white font-semibold border border-gray-300 dark:border-gray-600 hover:bg-gray-300/90 dark:hover:bg-gray-600/90 transition"
                >
                  Learn More
                </motion.a>
              </div>
            </div>

            {/* Right side illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex-1 flex justify-center mt-12 md:mt-0 relative"
            >
              {/* Floating image */}
              <motion.img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="Starbox Preview"
                className="w-72 md:w-[400px] drop-shadow-[0_0_25px_rgba(0,255,150,0.6)]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              {/* Glow effect */}
              <div className="absolute -z-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
            </motion.div>
          </motion.div>
        </section>

       {/* About Section */}
        <section
          id="about"
          className="relative px-6 py-28 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-black"></div>

          {/* Image with glow */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.img
              src="https://via.placeholder.com/500x400"
              alt="About Starbox"
              className="w-full max-w-md rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/40 backdrop-blur-lg relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            {/* Glow effect */}
            <div className="absolute -z-10 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-indigo-500/20 dark:from-indigo-600/40 dark:to-blue-600/30 rounded-full blur-3xl top-12 animate-pulse"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                About Starbox
              </span>
            </h3>
            <p className="text-md leading-relaxed text-gray-600 dark:text-gray-300">
              Starbox adalah aplikasi modern untuk mengelola berbagai akun WhatsApp
              dan aplikasi lain dalam satu dashboard. Dibuat dengan fokus pada
              kenyamanan, keamanan, dan produktivitas.
            </p>

            {/* Feature points */}
            <ul className="space-y-4">
              {[
                "Interface simpel & mudah digunakan",
                "Dukungan multi-akun tanpa ribet",
                "Keamanan data terenkripsi end-to-end",
                "Cocok untuk freelancer, bisnis, & perusahaan",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-white text-sm shadow-md">
                    ✓
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-blue-500/40 transition"
            >
              Explore Features
            </motion.a>
          </motion.div>
        </section>


        {/* Features Section */}
        <section id="features" className="px-6 py-20 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold tracking-tight"
            >
              🚀 Fitur Unggulan <span className="text-green-500">Weagate</span>
            </motion.h2>
            <p className="mt-3 text-md text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Semua yang kamu butuhkan untuk mengelola WhatsApp dengan lebih mudah, aman, dan fleksibel.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { icon: "👥", title: "Multi-Account", desc: "Kelola banyak akun WhatsApp sekaligus tanpa ribet, cocok untuk bisnis maupun pribadi." },
              { icon: "🔒", title: "Keamanan Terjamin", desc: "Data terenkripsi end-to-end, privasi kamu tetap aman setiap saat." },
              { icon: "💻", title: "Cross-Platform", desc: "Akses dari desktop, tablet, maupun smartphone. Bisa jalan di semua device." },
              { icon: "⚡", title: "Performa Cepat", desc: "Ringan, responsif, dan hemat resource meski jalankan banyak akun sekaligus." },
              { icon: "📊", title: "Analitik Real-time", desc: "Pantau statistik chat, engagement, dan performa akun langsung dari dashboard." },
              { icon: "🤖", title: "Bot & Otomasi", desc: "Tambahkan bot & otomatisasi untuk balas pesan lebih cepat dan efisien." },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{f.icon}</div>

                {/* Title */}
                <h3 className="text-md font-semibold">{f.title}</h3>

                {/* Hidden Description (fade-in saat hover) */}
                <p className="absolute inset-0 flex items-center justify-center px-6 text-gray-700 dark:text-gray-300 text-sm opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-gray-100/95 dark:bg-gray-900/95 rounded-2xl">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>




        {/* Pricing Section */}
        <section id="pricing" className="px-6 py-20 max-w-7xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent"
          >
            Pricing Plans
          </motion.h3>

          <div className=" grid md:grid-cols-3 gap-8">
            {[
              {
                plan: "Starter",
                price: "Free",
                features: [
                  "1 WhatsApp Instance",
                  "Community Support",
                  "Basic Features",
                ],
                highlight: false,
              },
              {
                plan: "Pro",
                price: "$29/mo",
                features: [
                  "Up to 5 WhatsApp Instances",
                  "Priority Support",
                  "Advanced Features",
                  "API Access",
                ],
                highlight: true,
              },
              {
                plan: "Enterprise",
                price: "Custom",
                features: [
                  "Unlimited Instances",
                  "24/7 Dedicated Support",
                  "Custom Integrations",
                  "Team Collaboration",
                ],
                highlight: false,
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 
                  ${p.highlight 
                    ? "bg-gradient-to-b from-blue-600 to-purple-600 text-white scale-105" 
                    : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  } hover:shadow-2xl`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 right-6 bg-yellow-400 text-black px-3 py-1 text-xs font-bold rounded-full shadow">
                    Best Value
                  </span>
                )}

                <h4 className="text-xl font-bold mb-2">{p.plan}</h4>
                <p className="text-2xl font-extrabold mb-6">{p.price}</p>
                
                <ul className="mb-8 space-y-3">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center justify-center gap-2">
                      <span className="text-green-500">✔</span> {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`px-6 py-3 rounded-xl font-semibold transition 
                    ${p.highlight 
                      ? "bg-white text-blue-700 hover:bg-gray-100" 
                      : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                >
                  {p.highlight ? "Get Pro" : "Choose Plan"}
                </button>
              </motion.div>
            ))}
          </div>
        </section>


       {/* Testimonials Section */}
      <section
        id="testimonials"
        className="px-6 py-20 max-w-7xl mx-auto text-center"
      >
        {/* Partner Logos Bar */}
        <div className="overflow-hidden relative mb-12 rounded-xl shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800" />
          
          <motion.div
            className="flex gap-12 items-center relative py-6"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[
              "https://dummyimage.com/100x40/000/fff&text=Talk+Action",
              "https://dummyimage.com/100x40/000/fff&text=Ruby+Works",
              "https://dummyimage.com/100x40/000/fff&text=Sky+Cloud",
              "https://dummyimage.com/100x40/000/fff&text=Walk+Away",
              "https://dummyimage.com/100x40/000/fff&text=DeePay",
            ].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Logo ${i}`}
                className="h-10 object-contain opacity-70 hover:opacity-100 transition"
              />
            ))}

            {/* Duplikat agar animasi looping seamless */}
            {[
              "https://dummyimage.com/100x40/000/fff&text=Talk+Action",
              "https://dummyimage.com/100x40/000/fff&text=Ruby+Works",
              "https://dummyimage.com/100x40/000/fff&text=Sky+Cloud",
              "https://dummyimage.com/100x40/000/fff&tk:from-graway",
              "https://dummyimage.com/100x40/000/fff&text=DeePay",
            ].map((logo, i) => (
              <img
                key={`dup-${i}`}
                src={logo}
                alt={`Logo ${i}`}
                className="h-10 object-contain opacity-70 hover:opacity-100 transition"
              />
            ))}
          </motion.div>
        </div>

        {/* Testimonials Title */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold mb-12"
        >
          What Our Users Say
        </motion.h3>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Great service! Sangat membantu pekerjaan saya lebih efisien dan profesional.",
              name: "John Doe",
              role: "CEO Startup",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              quote:
                "Team kreatif & profesional. Mereka selalu memberikan solusi tepat untuk brand saya.",
              name: "Jane Smith",
              role: "UI/UX Designer",
              img: "https://randomuser.me/api/portraits/women/45.jpg",
            },
            {
              quote:
                "Solusi mereka luar biasa! Integrasi cepat, hasilnya memuaskan, dan support-nya top.",
              name: "Michael Lee",
              role: "Fullstack Developer",
              img: "https://randomuser.me/api/portraits/men/41.jpg",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-indigo-500 shadow-md"
              />
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "{t.quote}"
              </p>
              <h4 className="font-semibold text-md">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </section>




      <CTASection />



        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand */}
            <div>
              <h2 className="text-md font-bold text-gray-900 dark:text-white">Starbox</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Aplikasi modern untuk mempermudah manajemen Anda.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Menu</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Fitur</a></li>
                <li><a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Harga</a></li>
                <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Tentang Kami</a></li>
                <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Kontak</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Ikuti Kami</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-2sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Starbox. All rights reserved.
          </div>
        </div>
      </footer>

      </div>
    </div>
  );
}

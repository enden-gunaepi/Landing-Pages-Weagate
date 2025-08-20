import { motion } from "framer-motion";
import { Download, Apple, Play } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative px-6 py-24 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white text-center overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-10 left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl bottom-10 right-20 animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h3 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
          Siap Mulai Perjalananmu?
        </h3>
        <p className="text-lg md:text-md mb-10 max-w-2xl mx-auto opacity-90">
          Download <span className="font-semibold">Starbox</span> sekarang dan rasakan kemudahan
          mengelola bisnis digital Anda di satu platform yang simpel, cepat, dan aman.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            <Download className="w-5 h-5" />
            Download App
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-xl shadow-lg hover:bg-gray-800 transition"
          >
            <Apple className="w-5 h-5" />
            App Store
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-xl shadow-lg hover:bg-green-600 transition"
          >
            <Play className="w-5 h-5" />
            Google Play
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

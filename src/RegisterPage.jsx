import { motion } from "framer-motion";
import { useState } from "react";
import signupIllustration from "./assets/signup.svg";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl w-full grid md:grid-cols-2 shadow-xl rounded-2xl overflow-hidden bg-white dark:bg-gray-800">
        
        {/* Left - Form */}
        <div className="flex flex-col justify-center px-10 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            Create Account ✨
          </motion.h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Join us and explore new possibilities 🚀
          </p>

          {/* Form */}
          <form className="mt-8 space-y-5">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Sign Up
            </motion.button>
          </form>

          {/* Login Redirect */}
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 font-medium hover:underline">
              Login
            </a>
          </p>
        </div>

        {/* Right - Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8">
        {/* Judul */}
        <h2 className="text-2xl font-bold mb-2">Join Our Community</h2>
        
        {/* Deskripsi */}
        <p className="text-center text-sm mb-6 max-w-sm">
            Buat akun baru dan mulai perjalananmu bersama kami. Nikmati fitur eksklusif
            untuk mendukung produktivitas dan kreativitasmu.
        </p>

        {/* SVG Illustration */}
        <img
            src={signupIllustration}
            alt="Register Illustration"
            className="w-3/4"
        />
        </div>

      </div>
    </div>
  );
}

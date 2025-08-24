import { motion } from "framer-motion";
import { useState } from "react";
import loginIllustration from "./assets/login.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            Holla, <br /> Welcome Back 👋
          </motion.h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Hey, welcome back to your special place
          </p>

          {/* Form */}
          <form className="mt-8 space-y-5">
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

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <input type="checkbox" className="w-4 h-4 rounded text-indigo-600" />
                Remember me
              </label>
              <a href="#" className="text-indigo-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Sign In
            </motion.button>
          </form>

          {/* Sign Up */}
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            Don’t have an account?{" "}
            <a href="/register" className="text-indigo-600 font-medium hover:underline">
              Sign Up
            </a>
          </p>
        </div>

        {/* Right - Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center text-center bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Semangat Pagi!
          </h2>
          <p className="text-white/90 mb-6 max-w-sm">
            Akses akunmu dan lanjutkan aktivitasmu tanpa hambatan.  
            Login untuk tetap terhubung dan produktif setiap hari 🚀
          </p>
          <img
            src={loginIllustration}
            alt="Login Illustration"
            className="w-3/4"
          />
        </div>
      </div>
    </div>
  );
}

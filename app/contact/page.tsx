"use client";

import { motion } from "framer-motion";
import { Header } from "../components";

export default function ContactPage() {
  // Remove the following unused lines:
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   company: "",
  //   message: "",
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  // const handleSubmit = async (e: React.FormEvent) => { ... };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight bg-white bg-clip-text text-transparent drop-shadow-lg"
          >
            Let&apos;s Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Ready to transform your vision into reality? We&apos;re here to help
            you achieve extraordinary results.
          </motion.p>
          <motion.a
            href="mailto:ams@puls-entertainment.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-[#0aaae8] text-white font-semibold py-4 px-10  shadow-lg hover:bg-[#0995c7] transition-all duration-200 text-lg mt-4"
          >
            ams@puls-entertainment.com
          </motion.a>
        </div>
      </section>

      {/* Divider before Why Choose Us */}
      <div className="w-full flex justify-center items-center my-12">
        <div className="h-1 w-32 bg-gradient-to-r from-[#0aaae8] via-white to-[#0aaae8] rounded-full opacity-40"></div>
      </div>

      {/* Additional Info Section */}
      <section className="py-24 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
              Why Choose Us?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#0aaae8] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium">Fast Response</h3>
                <p className="text-gray-300">
                  We typically respond within 24 hours to all inquiries.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#0aaae8] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium">Expert Team</h3>
                <p className="text-gray-300">
                  Our experienced professionals deliver exceptional results.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#0aaae8] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium">Personal Touch</h3>
                <p className="text-gray-300">
                  Every project receives our dedicated attention and care.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

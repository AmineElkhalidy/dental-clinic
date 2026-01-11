import { buttonVariants } from "@/components/common/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Sparkles, Shield, Heart } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(97, 83, 204, 0.95), rgba(97, 83, 204, 0.85), rgba(48, 41, 47, 0.7)), url('/images/hero.jpg')",
      }}
    >
      <section className="min-h-[90vh] container max-w-screen-xl px-4 flex flex-col justify-center relative overflow-hidden">
        <div className="my-auto flex flex-col justify-center items-start max-w-4xl py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-white/90" />
            <span className="text-white/90 text-sm font-medium uppercase tracking-wider">
              Award-Winning Dental Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="my-4 text-white font-bold text-5xl md:text-7xl lg:text-8xl leading-tight"
          >
            Transform Your Smile,
            <br />
            <span className="text-primary-light bg-white/10 px-4 py-2 rounded-lg inline-block mt-2">
              Transform Your Life
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="my-8 text-white/95 text-lg md:text-xl max-w-[55ch] leading-relaxed"
          >
            Discover the difference that premium dental care makes. Our state-of-the-art clinic 
            delivers personalized treatments using cutting-edge technology, ensuring your comfort 
            and confidence every step of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link
              href="/new-appointment"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className: "text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all",
              })}
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book Your Appointment
            </Link>
            <Link
              href="/about"
              className={buttonVariants({
                variant: "white",
                size: "lg",
                className: "text-lg px-8 py-6",
              })}
            >
              Discover Our Story
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 w-full"
          >
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-3 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-2xl">20+</div>
                <div className="text-white/80 text-sm">Years of Excellence</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-2xl">25K+</div>
                <div className="text-white/80 text-sm">Smiles Transformed</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-3 rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-2xl">98%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

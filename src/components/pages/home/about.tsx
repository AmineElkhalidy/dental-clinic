import { buttonVariants } from "@/components/common/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Users, Clock, Heart as HeartIcon } from "lucide-react";

export const About = () => {
  return (
    <section className="container max-w-screen-xl py-16 md:py-28 px-4">
      <div className="md:grid md:grid-cols-[1.2fr_1.8fr] md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-8 md:mb-0"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about.jpg"
              alt="Bright Smile Dental Team - Expert Dentists"
              className="w-full h-full object-cover object-center"
              width={600}
              height={700}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
              <Award className="w-8 h-8" />
              <div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-white/90">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-auto"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            About Bright Smile Dental
          </div>
          
          <h2 className="text-secondary font-bold text-4xl md:text-5xl mb-4 leading-tight">
            Where Exceptional Care
            <br />
            <span className="text-primary">
              Meets Extraordinary Results
            </span>
          </h2>
          
          <div className="w-20 h-1.5 bg-primary mb-8 rounded-full"></div>
          
          <p className="mb-6 text-gray-700 text-lg leading-relaxed">
            At Bright Smile Dental, we don&apos;t just treat teeth—we transform lives. 
            With over two decades of combined expertise, our passionate team of dental professionals 
            has helped thousands of patients rediscover their confidence through beautiful, healthy smiles.
          </p>
          
          <p className="mb-8 text-gray-600 leading-relaxed">
            Our modern, welcoming clinic features the latest dental technology in a calming, 
            stress-free environment. We know that dental visits can cause anxiety, which is why 
            every detail—from our soothing ambiance to our gentle techniques—is designed with your 
            comfort in mind. Whether you need preventive care, cosmetic enhancement, or restorative 
            treatment, we&apos;re committed to delivering results that exceed your expectations.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary text-lg">Expert Professionals</div>
                <div className="text-gray-600 text-sm">Board-certified specialists</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary text-lg">Extended Hours</div>
                <div className="text-gray-600 text-sm">Fit your busy schedule</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <HeartIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary text-lg">Customized Plans</div>
                <div className="text-gray-600 text-sm">Designed for you</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-secondary text-lg">Premium Standards</div>
                <div className="text-gray-600 text-sm">Highest quality materials</div>
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "text-lg px-8 py-6",
            })}
          >
            Our Full Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

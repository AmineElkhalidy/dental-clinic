import Service1Icon from "@root/public/svgs/service1.svg";
import Service2Icon from "@root/public/svgs/service2.svg";
import Service3Icon from "@root/public/svgs/service3.svg";
import Service4Icon from "@root/public/svgs/service4.svg";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/common/button";

const services = [
  {
    icon: Service1Icon,
    title: "Comprehensive Dental Exams",
    description: "Thorough examinations using the latest technology to detect issues early and maintain optimal oral health.",
    features: ["Digital X-rays", "Oral cancer screening", "Gum health assessment"],
  },
  {
    icon: Service2Icon,
    title: "Preventive Care & Cleanings",
    description: "Professional cleanings and preventive treatments to keep your teeth and gums healthy for years to come.",
    features: ["Deep cleaning", "Fluoride treatment", "Sealants"],
  },
  {
    icon: Service3Icon,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our advanced cosmetic procedures designed to boost your confidence.",
    features: ["Teeth whitening", "Veneers", "Smile makeovers"],
  },
  {
    icon: Service4Icon,
    title: "Advanced Treatments",
    description: "Comprehensive solutions for complex dental issues, from root canals to dental implants and more.",
    features: ["Root canals", "Crowns & bridges", "Dental implants"],
  },
];

export const Services = () => {
  return (
    <section className="bg-gradient-to-br from-secondary via-secondary to-secondary/95 text-white px-4 py-20 md:py-32">
      <div className="container max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive Dental Care
            <br />
            <span className="text-primary-light">For Every Need</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From routine check-ups to complex procedures, we offer a full range of 
            dental services to keep your smile healthy and beautiful at every stage of life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="bg-primary/20 p-4 rounded-xl w-fit mb-6 group-hover:bg-primary/30 transition-colors">
                  <IconComponent className="w-12 h-16 overflow-visible text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/new-appointment"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "text-lg px-8 py-6 bg-white text-secondary hover:bg-gray-100",
            })}
          >
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

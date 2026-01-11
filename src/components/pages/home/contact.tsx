import { Book } from "./book";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Calendar, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/common/button";
import Link from "next/link";

interface ContactProps {
  showBook?: boolean;
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "866 Balistreri Light Suite 937",
    subContent: "Helgatown 93810-6364",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (504) 558-3645",
    subContent: "+1 (234) 567-890",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "contact@thedental.com",
    subContent: "info@thedental.com",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: "Monday - Friday: 8:00 AM - 4:00 PM",
    subContent: "Saturday: 8:00 AM - 12:00 PM",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
];

export const Contact = ({ showBook = true }: ContactProps) => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <section className="container max-w-screen-xl py-20 md:py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            We&apos;re Here to Help
            <br />
            <span className="text-primary">Your Smile Matters</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions? Want to schedule a consultation? Our friendly team 
            is ready to assist you. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
              >
                <div className={`${info.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 ${info.color}`} />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-700 font-medium mb-1">
                  {info.content}
                </p>
                {info.subContent && (
                  <p className="text-gray-600 text-sm">
                    {info.subContent}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <Calendar className="w-12 h-12 mx-auto mb-6 text-white/90" />
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h3>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and take the first step towards 
            a healthier, more confident smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/new-appointment"
              className={buttonVariants({
                variant: "white",
                size: "lg",
                className: "text-lg px-8 py-6",
              })}
            >
              Book Appointment Now
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "text-lg px-8 py-6 border-white text-white hover:bg-white/10",
              })}
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

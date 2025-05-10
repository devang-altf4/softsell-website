"use client"

import { motion } from "framer-motion"
import { Shield, Clock, BadgeDollarSign, Award } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <BadgeDollarSign className="h-10 w-10" />,
      title: "Best Market Rates",
      description: "We leverage our extensive network to ensure you get the highest value for your licenses.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Secure Transactions",
      description: "Our platform uses enterprise-grade security to protect your data and transactions.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Fast Process",
      description: "Get valuations within 24 hours and payment within 3-5 business days.",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Expert Support",
      description: "Our team of software licensing experts is available to assist you every step of the way.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="why-choose-us" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h2>Why Choose Us</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              SoftSell offers unmatched benefits when it comes to reselling your software licenses.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center space-y-4 text-center p-6 rounded-xl border border-primary/20 bg-card shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/40 shadow-md">
                <div className="text-primary">{reason.icon}</div>
              </div>
              <h3 className="text-xl font-bold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Upload, DollarSign, CreditCard } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="h-10 w-10" />,
      title: "Upload License",
      description: "Simply upload your software license details through our secure portal.",
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Get Valuation",
      description: "Our experts will assess your license and provide the best market valuation.",
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Get Paid",
      description: "Accept our offer and receive payment through your preferred method.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h2>How It Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our streamlined process makes selling your software licenses quick and hassle-free.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 mt-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center space-y-4 text-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/40 shadow-lg">
                <div className="text-primary">{step.icon}</div>
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

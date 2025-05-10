"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">
                  Unlock the Value of Your Unused Software Licenses
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Turn your idle software assets into cash. SoftSell provides the fastest, most secure way to sell your
                unused licenses at the best market rates.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#contact">
                <Button
                  size="lg"
                  className="w-full min-[400px]:w-auto bg-gradient-to-r from-primary to-secondary-foreground hover:opacity-90 transition-all duration-300 shadow-lg"
                >
                  Sell My Licenses
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full min-[400px]:w-auto border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  Learn How It Works
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-background to-muted flex items-center justify-center shadow-xl overflow-hidden">
                <img
                  src="/Softcell-logo.png"
                  alt="SoftSell Logo"
                  className="w-full h-full object-cover"
                  style={{ filter: "drop-shadow(0 2px 16px rgba(80,80,120,0.15))" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

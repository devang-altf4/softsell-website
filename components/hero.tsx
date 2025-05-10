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
        <div className="flex justify-center items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center items-center text-center space-y-4 max-w-3xl"
          >
            <motion.div variants={itemVariants} className="space-y-2 flex flex-col items-center">
              <h1 className="tracking-tighter">
                <span className="bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">
                  Unlock the Value of Your Unused Software Licenses
                </span>
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Turn your idle software assets into cash. SoftSell provides the fastest, most secure way to sell your
                unused licenses at the best market rates.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
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
          
        </div>
      </div>
    </section>
  )
}

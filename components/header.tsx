"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 font-bold text-xl"
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground shadow-md">
              <span className="text-lg font-bold">S</span>
            </div>
            <span className="font-bold bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">
              SoftSell
            </span>
          </Link>
        </motion.div>

        <motion.nav className="hidden md:flex gap-8" variants={navVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <Link href="#how-it-works" className="nav-link">
              How It Works
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="#why-choose-us" className="nav-link">
              Why Choose Us
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="#testimonials" className="nav-link">
              Testimonials
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </motion.div>
        </motion.nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <motion.button
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
        >
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary transition-colors py-2 border-b border-border/50"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#why-choose-us"
              className="text-sm font-medium hover:text-primary transition-colors py-2 border-b border-border/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors py-2 border-b border-border/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

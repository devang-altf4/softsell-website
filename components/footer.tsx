"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-full border-t py-6 bg-gradient-to-b from-background to-muted/50"
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent font-semibold">
            SoftSell
          </span>
          . All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </motion.footer>
  )
}

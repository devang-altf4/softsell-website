"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was incredibly smooth and their valuation was higher than we expected.",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechGrowth Inc.",
      initials: "SJ",
    },
    {
      quote:
        "As a software asset manager, I've tried several resale platforms, but SoftSell stands out for their transparency, speed, and excellent customer service. Highly recommended!",
      name: "Michael Chen",
      role: "Software Asset Manager",
      company: "Innovate Solutions",
      initials: "MC",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="overflow-hidden border border-primary/20 shadow-md bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-0">
                  <div className="flex items-start gap-4">
                    <Quote className="h-8 w-8 text-primary opacity-70" />
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-4 italic">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary-foreground text-primary-foreground">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

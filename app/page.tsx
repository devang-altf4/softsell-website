import type { Metadata } from "next"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "SoftSell - Get the Best Value for Your Software Licenses",
  description:
    "SoftSell helps businesses sell unused software licenses quickly and at the best market rates. Upload, get valued, get paid.",
  keywords: "software resale, license reselling, software license marketplace, sell software licenses",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

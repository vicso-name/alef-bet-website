import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import LeadMagnetSection from '@/components/sections/LeadMagnetSection'
import FAQSection from '@/components/sections/FAQSection'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <LeadMagnetSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
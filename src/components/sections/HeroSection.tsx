'use client'
import GooglePlayButton from '@/components/ui/GooglePlayButton'
import Image from 'next/image'

export default function HeroSection() {

  return (
    <>
      <section className="position-relative bg-light py-section overflow-hidden">
        {/* Background decorative elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{opacity: '0.4'}}>
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-light" style={{opacity: '0.5'}}></div>
        </div>
        
        <div className="position-relative container">
          <div className="row align-items-center g-5">
            
            {/* Left Column - Content */}
            <div className="col-lg-6 text-center text-lg-start">
              {/* Main Headline */}
              <h1 className="display-2 fw-bold text-dark mb-4 fade-in" style={{lineHeight: '1.1'}}>
                Master the{' '}
                <span className="gradient-primary-text">
                  Hebrew Alphabet
                </span>{' '}
                in 30 minutes
              </h1>
              
              {/* Subheading */}
              <p className="fs-3 text-muted mb-4 slide-up" style={{lineHeight: '1.6'}}>
                Interactive lessons, AI reading trainer & smart spaced repetition
              </p>
              
              {/* Trust Badges */}
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start gap-4 mb-5">
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="text-warning" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-dark fw-medium">4.8 Play Store</span>
                </div>
                
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex" style={{marginLeft: '-0.5rem'}}>
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="rounded-circle border border-white border-2 d-flex align-items-center justify-content-center"
                        style={{
                          width: '2rem',
                          height: '2rem',
                          marginLeft: '-0.5rem',
                          backgroundColor: '#E5EAF4',
                        }}
                      >
                         <i className="bi bi-person-fill" style={{ color: '#000', fontSize: '0.875rem' }}></i>
                      </div>
                    ))}

                  </div>
                  <span className="text-dark fw-medium">2,500+ learners</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-4">
                <GooglePlayButton 
                  variant="dark" 
                  size="lg" 
                  text="Get for Android"
                />
              </div>
              
              {/* SEO Keywords naturally included */}
              <p className="small text-muted">
                Start your Hebrew learning journey today. Learn Hebrew alphabet, read Hebrew texts, and master the language with our comprehensive Hebrew app.
              </p>
            </div>
            
            {/* Right Column - Phone Mockup */}
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <div className="position-relative">
                <Image
                    src="/images/phone-mockup.png"
                    alt="App mockup"
                    width={320}
                    height={640}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />


                {/* Floating elements (optional) */}
                <div className="position-absolute gradient-secondary rounded-circle d-flex align-items-center justify-content-center shadow floating-bounce"
                    style={{ top: '-1rem', right: '-1rem', width: '5rem', height: '5rem' }}>
                  <span className="text-white fw-bold fs-3 font-hebrew">א</span>
                </div>

                <div className="position-absolute gradient-secondary rounded-circle d-flex align-items-center justify-content-center shadow floating-pulse"
                    style={{ bottom: '-1rem', left: '-1rem', width: '4rem', height: '4rem' }}>
                  <span className="text-white fw-bold fs-4 font-hebrew">ב</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
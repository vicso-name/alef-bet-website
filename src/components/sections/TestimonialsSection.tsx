'use client'

import { useState } from 'react'
import GooglePlayButton from '@/components/ui/GooglePlayButton'
import Image from 'next/image'

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah L.',
      role: 'Tourist',
      location: 'New York, USA',
      avatar: '/images/sarah.webp',
      quote: "I could read street signs in Tel-Aviv after one weekend.",
      fullReview: "Amazing app! I was planning a trip to Israel and wanted to at least read basic signs. After just one weekend with Alef-Bet Tutor, I could actually read street signs, restaurant menus, and shop names. The alphabet course is so well designed - each letter just clicks!",
      rating: 5,
      verified: true,
    },
    {
      id: 2,
      name: 'Michael R.',
      role: 'Student',
      location: 'London, UK',
      avatar: '/images/michael.webp',
      quote: "Finally understanding Hebrew prayers makes synagogue so much more meaningful.",
      fullReview: "I've been going to synagogue for years but never understood what I was reading. This app changed everything. The reading trainer helped me go from alphabet to actual prayer text in just 2 months. Now I can follow along and feel truly connected.",
      rating: 5,
      verified: true,
    },
    {
      id: 3,
      name: 'Rebecca K.',
      role: 'Language Enthusiast',
      location: 'Berlin, Germany',
      avatar: '/images/rebecca.webp',
      quote: "Best Hebrew learning app I've tried. The AI scanner is a game-changer!",
      fullReview: "I've tried Duolingo, Babbel, and others, but nothing comes close to this. The progression from alphabet to reading real texts is perfect. And the AI scanner? Pure magic! I can translate Hebrew text just by pointing my camera at it.",
      rating: 5,
      verified: true,
    },
    {
      id: 4,
      name: 'David C.',
      role: 'Business Owner',
      location: 'Toronto, Canada',
      avatar: '/images/david.webp',
      quote: "My Israeli business partners were impressed I learned to read Hebrew so quickly.",
      fullReview: "Working with Israeli companies, I always felt left out when they'd share Hebrew documents or texts. After 6 weeks with this app, I surprised them by reading a Hebrew business card out loud. They couldn't believe I learned so fast!",
      rating: 5,
      verified: true,
    },
    {
      id: 5,
      name: 'Lisa M.',
      role: 'Grandmother',
      location: 'Miami, USA',
      avatar: '/images/lisa.webp',
      quote: "Learning Hebrew to connect with my grandchildren's heritage. So proud!",
      fullReview: "At 67, I thought it was too late to learn Hebrew. My grandchildren are learning it in Hebrew school, and I wanted to help them. This app made it possible! The lessons are clear, patient, and I love the daily reminders. Now I can read their Hebrew books with them.",
      rating: 5,
      verified: true,
    },
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-section bg-white">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-3 fw-bold text-dark mb-4">
            What our{' '}
            <span>
              learners say
            </span>
          </h2>
          <p className="fs-4 text-muted mx-auto" style={{maxWidth: '48rem', lineHeight: '1.6'}}>
            Join thousands who&apos;ve transformed their Hebrew learning journey
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="position-relative bg-light rounded-4 p-4 p-lg-5 mb-5 overflow-hidden">
          
          {/* Background Pattern */}
          <div className="position-absolute top-0 end-0 opacity-25" style={{width: '16rem', height: '16rem', transform: 'translate(8rem, -8rem)'}}>
            <div className="w-100 h-100 gradient-primary rounded-circle"></div>
          </div>

          <div className="position-relative" style={{zIndex: 10}}>
            <div className="row align-items-center g-4">
              
              {/* Avatar */}
              <div className="col-auto">
                <div
                  className="rounded-circle shadow overflow-hidden"
                  style={{ width: '6rem', height: '6rem' }}
                >
                  <Image
                    src={testimonials[activeTestimonial].avatar}
                    alt={testimonials[activeTestimonial].name}
                    width={96} // 6rem ≈ 96px
                    height={96}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="col text-center text-lg-start">
                {/* Quote */}
                <blockquote className="display-6 fw-bold text-dark mb-4">
                  &quot;{testimonials[activeTestimonial].quote}&quot;
                </blockquote>
                
                {/* Full Review */}
                <p className="text-muted fs-5 mb-4" style={{lineHeight: '1.6'}}>
                  {testimonials[activeTestimonial].fullReview}
                </p>

                {/* Author Info */}
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start gap-3">
                  <div className="d-flex align-items-center gap-3">
                    {/* Rating */}
                    <div className="d-flex">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <svg key={i} className="text-warning" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    
                    {/* Author */}
                    <div>
                      <div className="fw-semibold text-dark d-flex align-items-center gap-2">
                        <span>{testimonials[activeTestimonial].name}</span>
                      </div>
                      <div className="text-muted small">
                        {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="col-auto d-flex gap-3">
                <button 
                  onClick={prevTestimonial}
                  className="btn btn-light rounded-circle shadow transition-all"
                  style={{width: '3rem', height: '3rem'}}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="btn btn-light rounded-circle shadow transition-all"
                  style={{width: '3rem', height: '3rem'}}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="d-flex justify-content-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`border-0 rounded-pill transition-all ${
                    index === activeTestimonial
                      ? 'bg-primary-custom'
                      : 'bg-secondary'
                  }`}
                  style={{
                    width: index === activeTestimonial ? '2rem' : '0.75rem',
                    height: '0.75rem'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Testimonials Grid */}
        <div className="row g-4 mb-5">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="col-md-4">
              <div className="card h-100 border-light shadow-sm hover-transform">
                <div className="card-body">
                  {/* Header */}
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div
                      className="rounded-circle overflow-hidden shadow"
                      style={{ width: '3rem', height: '3rem' }}
                    >
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    </div>
                    <div>
                      <div className="fw-semibold text-dark d-flex align-items-center gap-1">
                        <span>{testimonial.name}</span>
                      </div>
                      <div className="text-muted small">{testimonial.role}</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="d-flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="text-warning" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-dark fst-italic" style={{lineHeight: '1.6'}}>
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <GooglePlayButton
            variant="primary"
            size="lg"
            text="Join These Success Stories"
            className="d-inline-flex w-auto px-4"
          />
        </div>
      </div>
    </section>
  )
}
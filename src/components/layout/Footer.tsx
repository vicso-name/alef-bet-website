'use client'

import { useState } from 'react'
import GooglePlayButton from '@/components/ui/GooglePlayButton'
import Image from 'next/image';

export default function Footer() {
  const [showAppModal, setShowAppModal] = useState(false)

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Download App', href: '#', onClick: () => setShowAppModal(true) }
    ],
    learn: [
      { name: 'Hebrew Alphabet Guide', href: '/blog/hebrew-alphabet-guide' },
      { name: 'Nikud Pronunciation', href: '/blog/nikud-guide' },
      { name: 'Reading Tips', href: '/blog/how-to-read-hebrew' },
      { name: 'Learning Resources', href: '/blog/hebrew-learning-resources' },
      { name: 'Success Stories', href: '#testimonials' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Press Kit', href: '/press' },
      { name: 'Contact', href: '#contact' },
      { name: 'Support', href: '#support' },
      { name: 'Community', href: '/community' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Refund Policy', href: '/refunds' }
    ]
  }

  return (
    <>
      <footer className="bg-dark text-white">
        <div className="container">
          
          {/* Main Footer Content */}
          <div className="py-5">
            <div className="row g-5">
              
              {/* Logo & Description */}
              <div className="col-lg-4">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="d-flex align-items-center justify-content-center"
                      style={{ width: '3rem', height: '3rem' }}>
                    <Image
                      src="/images/main_logo.svg"
                      alt="Logo"
                      width={48}
                      height={48}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <span className="fs-3 fw-bold">Alef-Bet Tutor</span>
                </div>
                
                <p className="text-light fs-5 mb-4" style={{lineHeight: '1.6'}}>
                  The fastest way to learn Hebrew alphabet and start reading. Master all 22 letters in just 30 minutes with our interactive lessons and AI-powered tools.
                </p>
              </div>

              {/* Product Links */}
              <div className="col-lg-2 col-md-6">
                <h3 className="fs-5 fw-semibold mb-4">Product</h3>
                <ul className="list-unstyled">
                  {footerLinks.product.map((link) => (
                    <li key={link.name} className="mb-3">
                      {link.onClick ? (
                        <button
                          onClick={link.onClick}
                          className="btn btn-link p-0 text-light text-decoration-none"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-light text-decoration-none"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn Links */}
              <div className="col-lg-2 col-md-6">
                <h3 className="fs-5 fw-semibold mb-4">Learn</h3>
                <ul className="list-unstyled">
                  {footerLinks.learn.map((link) => (
                    <li key={link.name} className="mb-3">
                      <a
                        href={link.href}
                        className="text-light text-decoration-none"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div className="col-lg-2 col-md-6">
                <h3 className="fs-5 fw-semibold mb-4">Company</h3>
                <ul className="list-unstyled">
                  {footerLinks.company.map((link) => (
                    <li key={link.name} className="mb-3">
                      <a
                        href={link.href}
                        className="text-light text-decoration-none"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div className="col-lg-2 col-md-6">
                <h3 className="fs-5 fw-semibold mb-4">Legal</h3>
                <ul className="list-unstyled">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name} className="mb-3">
                      <a
                        href={link.href}
                        className="text-light text-decoration-none"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="py-4 border-top border-secondary">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 text-center">
                <h3 className="fs-3 fw-bold mb-3">
                  Stay updated with Hebrew learning tips
                </h3>
                <p className="text-light mb-4">
                  Get weekly tips, new features, and exclusive content delivered to your inbox
                </p>
                
                <form className="d-flex flex-column flex-sm-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control bg-secondary border-0 text-white newsletter-input"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary text-white fw-semibold px-4"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-4 border-top border-secondary">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
              
              {/* Copyright */}
              <div className="small text-light">
                © 2025 Alef-Bet Tutor. All rights reserved.
              </div>

              {/* App Store Badges */}
              <div className="d-flex gap-3">
                <GooglePlayButton
                    variant="dark"
                    size="sm"
                    text="Google Play"
                    className="d-inline-flex w-auto px-4"
                  />
              </div>

            </div>
          </div>
        </div>
      </footer>

      {/* App Download Modal */}
      {showAppModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0" style={{borderRadius: '1rem'}}>
              <div className="modal-body p-4 p-lg-5 position-relative">
                <button 
                  onClick={() => setShowAppModal(false)}
                  className="btn-close position-absolute top-0 end-0 m-3"
                ></button>
                
                <div className="text-center">
                  <div className="gradient-primary rounded-4 d-flex align-items-center justify-content-center mx-auto mb-4"
                       style={{width: '5rem', height: '5rem'}}>
                    <span className="text-white fw-bold display-6 font-hebrew">א</span>
                  </div>
                  
                  <h3 className="fs-3 fw-bold text-dark mb-3">Download Alef-Bet Tutor</h3>
                  <p className="text-muted mb-4">Start your Hebrew learning journey today!</p>
                  
                  <div className="d-grid gap-3">
                    <a 
                      href="#" 
                      className="btn btn-dark fw-semibold py-3 d-flex align-items-center justify-content-center gap-3"
                    >
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <div className="text-start">
                        <div style={{fontSize: '0.65rem'}}>GET IT ON</div>
                        <div className="small fw-bold">Google Play</div>
                      </div>
                    </a>
                    
                    <a 
                      href="#" 
                      className="btn btn-dark fw-semibold py-3 d-flex align-items-center justify-content-center gap-3"
                    >
                      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-start">
                        <div style={{fontSize: '0.65rem'}}>Download on the</div>
                        <div className="small fw-bold">App Store</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
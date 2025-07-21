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
                  <div className="bg-primary-custom rounded-4 d-flex align-items-center justify-content-center mx-auto mb-4"
                       style={{width: '5rem', height: '5rem'}}>
                    <span className="text-white fw-bold display-6 font-hebrew">א</span>
                  </div>
                  
                  <h3 className="fs-3 fw-bold text-dark mb-3">Download Alef-Bet Tutor</h3>
                  <p className="text-muted mb-4">Start your Hebrew learning journey today!</p>
                  
                  <div className="d-grid gap-3">
                    <GooglePlayButton 
                        variant="dark" 
                        size="md" 
                        text="Download"
                        className="px-3"
                    />

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
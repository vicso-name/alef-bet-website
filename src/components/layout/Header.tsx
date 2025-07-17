'use client'

import { useState } from 'react'
import Link from 'next/link'
import GooglePlayButton from '@/components/ui/GooglePlayButton'
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top" 
              style={{backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.95)'}}>
        <div className="container">
          
          {/* Logo */}
          <Link href="/" className="navbar-brand d-flex align-items-center gap-3 text-decoration-none">
            <div className="d-flex align-items-center justify-content-center"
                style={{ width: '2.5rem', height: '2.5rem' }}>
              <Image src="/images/main_logo.svg" alt="Logo" width={40} height={40} />
            </div>
            <span className="fs-5 fw-bold text-dark">Alef-Bet Tutor</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="navbar-toggler border-0 p-2 d-md-none"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon-custom">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </span>
          </button>

          {/* Desktop Navigation - Always visible on desktop */}
          <div className="navbar-collapse d-none d-md-block">
            <nav className="navbar-nav ms-auto d-flex align-items-center gap-4">
              <a href="#home" className="nav-link text-muted fw-medium navbar-link-custom">
                Home
              </a>
              <a href="#features" className="nav-link text-muted fw-medium navbar-link-custom">
                Features
              </a>
              <a href="#testimonials" className="nav-link text-muted fw-medium navbar-link-custom">
                Testimonials
              </a>
              <Link href="/blog" className="nav-link text-muted fw-medium navbar-link-custom text-decoration-none">
                Blog
              </Link>
              <GooglePlayButton 
                variant="dark" 
                size="sm" 
                text="Download"
                className="px-3"
              />
            </nav>
          </div>
        </div>

        {/* Mobile Navigation - Separate from desktop */}
        {isMobileMenuOpen && (
          <div className="d-md-none">
            <div className="container">
              <div className="navbar-nav border-top pt-3">
                <a href="#home" className="nav-link text-muted fw-medium py-2">
                  Home
                </a>
                <a href="#features" className="nav-link text-muted fw-medium py-2">
                  Features
                </a>
                <a href="#testimonials" className="nav-link text-muted fw-medium py-2">
                  Testimonials
                </a>
                <Link href="/blog" className="nav-link text-muted fw-medium py-2 text-decoration-none">
                  Blog
                </Link>
                <div className="mt-2">
                  <div className="dropdown">
                    <GooglePlayButton 
                      variant="primary" 
                      size="sm" 
                      text="Download"
                      className="px-3"
                    />
                    <ul className="dropdown-menu w-100 shadow border-0" style={{borderRadius: '1rem'}}>
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center gap-3 py-3"
                          href="https://play.google.com/store/apps/details?id=com.alefbet.tutor"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                          </svg>
                          <div>
                            <div className="fw-semibold small">Google Play</div>
                            <div className="text-muted" style={{fontSize: '0.75rem'}}>Android</div>
                          </div>
                        </a>
                      </li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center gap-3 py-3"
                          href="https://apps.apple.com/app/alef-bet-tutor/id123456789"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          <div>
                            <div className="fw-semibold small">App Store</div>
                            <div className="text-muted" style={{fontSize: '0.75rem'}}>iOS</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
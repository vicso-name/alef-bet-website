'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import GooglePlayButton from '@/components/ui/GooglePlayButton'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'

  const [pendingScrollTo, setPendingScrollTo] = useState<string | null>(null)

  useEffect(() => {
    if (isHome && pendingScrollTo) {
      // Scroll после перехода
      const el = document.getElementById(pendingScrollTo)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      setPendingScrollTo(null)
    }
  }, [isHome, pendingScrollTo])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleAnchorClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (isHome) {
      scrollToSection(id)
    } else {
      setPendingScrollTo(id)
      router.push('/')
    }
  }

  const NavLink = ({ id, label }: { id: string, label: string }) => (
    <a href="#" onClick={handleAnchorClick(id)} className="nav-link text-muted fw-medium navbar-link-custom">
      {label}
    </a>
  )

  return (
    <>
      <header
        className="navbar navbar-expand-md navbar-light bg-white shadow-sm fixed-top"
        style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
      >
        <div className="container">

          {/* Logo */}
          <Link href="/" className="navbar-brand d-flex align-items-center gap-3 text-decoration-none">
            <div className="d-flex align-items-center justify-content-center" style={{ width: '2.5rem', height: '2.5rem' }}>
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

          {/* Desktop Navigation */}
          <div className="navbar-collapse d-none d-md-block">
            <nav className="navbar-nav ms-auto d-flex align-items-center gap-4">
              <NavLink id="home" label="Home" />
              {isHome && (
                <>
                  <NavLink id="features" label="Features" />
                  <NavLink id="testimonials" label="Testimonials" />
                </>
              )}
              <Link href="/blog" className="nav-link text-muted fw-medium navbar-link-custom text-decoration-none">
                Blog
              </Link>
              <GooglePlayButton variant="primary" size="sm" text="Download" className="px-3" />
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="d-md-none">
            <div className="container">
              <div className="navbar-nav border-top pt-3">
                <NavLink id="home" label="Home" />
                {isHome && (
                  <>
                    <NavLink id="features" label="Features" />
                    <NavLink id="testimonials" label="Testimonials" />
                  </>
                )}
                <Link href="/blog" className="nav-link text-muted fw-medium py-2 text-decoration-none">
                  Blog
                </Link>
                <div className="mt-2">
                  <GooglePlayButton variant="primary" size="sm" text="Download" className="px-3" />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

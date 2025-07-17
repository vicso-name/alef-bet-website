'use client'

import { useState } from 'react'
import GooglePlayButton from '@/components/ui/GooglePlayButton'

export default function LeadMagnetSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setIsSubmitted(true)
    
    // In real implementation, this would redirect to /thanks-chart
    // window.location.href = '/thanks-chart'
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setEmail('')
  }

  return (
    <section className="py-section bg-dark position-relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{opacity: '0.1'}}>
        <div className="position-absolute bg-white rounded-circle" 
             style={{top: '2.5rem', left: '2.5rem', width: '8rem', height: '8rem'}}></div>
        <div className="position-absolute bg-white rounded-circle" 
             style={{bottom: '5rem', right: '5rem', width: '6rem', height: '6rem'}}></div>
      </div>

      <div className="position-relative container" style={{zIndex: 10}}>
        <div className="row align-items-center g-5">
          
          {/* Left Column - Content */}
          <div className="col-lg-6 text-white">
            <h2 className="display-2 fw-bold mb-4" style={{lineHeight: '1.2'}}>
              Get Your Free{' '}
              <span style={{color: '#f27327'}}>
                Alef-Bet Chart
              </span>
            </h2>
            
            <p className="fs-3 mb-4" style={{color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6'}}>
              Perfect reference guide for all 22 Hebrew letters with pronunciations, writing tips, and memory tricks.
            </p>

            {/* Features List */}
            <div className="mb-4">
              {[
                'High-quality PDF ready for printing',
                'All 22 letters with nikud (vowel points)',
                'Pronunciation guide for each letter',
                'Memory tricks and writing tips',
                'Perfect for beginners and reference'
              ].map((feature, index) => (
                <div key={index} className="d-flex align-items-center mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                       style={{
                         width: '1.5rem', 
                         height: '1.5rem', 
                         backgroundColor: 'rgba(255, 255, 255, 0.2)'
                       }}>
                    <svg className="text-white" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span style={{color: 'rgba(255, 255, 255, 0.9)'}}>{feature}</span>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="d-flex align-items-center gap-3">
              <div>
                <div className="text-white fw-semibold">5,000+ downloads</div>
                <div className="small" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Join the community</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="col-lg-6">
            {!isSubmitted ? (
              <div className="bg-white rounded-4 p-4 p-lg-5 shadow position-relative overflow-hidden">
                
                {/* Form Background Pattern */}
                <div className="position-absolute top-0 end-0" style={{width: '8rem', height: '8rem', opacity: '0.05'}}>
                  <div className="w-100 h-100 gradient-primary rounded-circle" 
                       style={{transform: 'translate(4rem, -4rem)'}}></div>
                </div>

                <div className="position-relative" style={{zIndex: 10}}>
                  {/* Chart Preview */}
                  <div className="bg-light rounded-4 p-4 mb-4">
                    <div className="text-center">
                      <h3 className="fs-3 fw-bold text-dark mb-3">Hebrew Alphabet Chart</h3>
                      
                      {/* Sample Letters Preview */}
                      <div className="row g-3 mb-3">
                        {['א', 'ב', 'ג', 'ד'].map((letter, i) => (
                          <div key={i} className="col-3">
                            <div className="bg-white rounded-3 p-3 shadow-sm">
                              <div className="fs-2 font-hebrew text-accent mb-1 fw-bold">{letter}</div>
                              <div className="small text-muted">Letter {i + 1}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="small text-muted">
                        ...and 18 more letters with full details
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label fw-medium text-dark">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        style={{
                          borderRadius: '0.75rem',
                          borderColor: '#d1d5db',
                          fontSize: '1.125rem'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn w-100 py-3 fw-bold fs-5 rounded-3 bg-dark transition-all hover-scale"
                      style={{
                        border: 'none',
                        color: 'white'
                      }}
                    >
                      {isLoading ? (
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <div className="spinner-border spinner-border-sm text-white" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        'Send me the PDF'
                      )}
                    </button>
                  </form>

                  {/* Trust Indicators */}
                  <div className="mt-4 pt-4 border-top">
                    <div className="d-flex align-items-center justify-content-center gap-4 small text-muted">
                      <div className="d-flex align-items-center gap-1">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span>100% Free</span>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>No Spam</span>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                        </svg>
                        <span>Secure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Success State */
              <div className="bg-white rounded-4 p-4 p-lg-5 shadow text-center">
                
                <div
                  className="rounded-circle bg-primary-custom d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{ width: '5rem', height: '5rem' }}
                >
                  <i className="bi bi-envelope-check-fill text-white" style={{ fontSize: '2rem' }}></i>
                </div>
                
                <h3 className="display-6 fw-bold text-dark mb-3">Check Your Email!</h3>
                <p className="text-muted mb-4 fs-5">
                  We&apos;ve sent the Hebrew Alphabet Chart to <strong>{email}</strong>. 
                  Check your inbox (and spam folder) for the download link.
                </p>
                
                <div>
                  <div className="gradient-secondary rounded-4 p-4 text-white mb-3">
                    <h4 className="fw-bold fs-5 mb-2">Ready for the next step?</h4>
                    <p className="mb-3">Download our app to start your interactive Hebrew learning journey!</p>
                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                      <GooglePlayButton 
                        variant="dark" 
                        size="md" 
                        text="Download"
                        className="px-3"
                      />
                    </div>
                  </div>
                  
                  <button 
                    onClick={resetForm}
                    className="btn btn-link text-muted text-decoration-none"
                  >
                    Send to another email →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
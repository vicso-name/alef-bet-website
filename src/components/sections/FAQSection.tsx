'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0]) // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: "Do I need Hebrew background?",
      answer: "Absolutely not! Alef-Bet Tutor is designed for complete beginners. Our app assumes zero knowledge of Hebrew and starts with the very basics. We guide you step-by-step from learning the shape and sound of each letter to reading your first Hebrew words and sentences."
    },
    {
      question: "Will I learn to write Hebrew letters?",
      answer: "Yes! The alphabet course includes writing tips and practice exercises for each letter. You'll learn both print and cursive Hebrew writing styles. While the current version focuses on print letters, we're working on a comprehensive cursive writing course that will be available soon."
    },
    {
      question: "Is the app free to use?",
      answer: "We offer a generous free plan that includes the complete 22-letter alphabet course with audio pronunciation. However, advanced features like the Reading Trainer, AI Text Scanner, offline access, and spaced repetition require a Premium subscription starting at $9.99/month."
    },
    {
      question: "Does it work offline?",
      answer: "Yes! Premium subscribers can download all lessons, audio files, and practice materials for offline use. The core alphabet lessons are available offline once downloaded. However, features like the AI Text Scanner require an internet connection to function."
    },
    {
      question: "Can kids use this app?",
      answer: "Absolutely! The interface is suitable for ages 10 and up. Many parents use our app to learn Hebrew alongside their children or to help with Hebrew school homework. Premium subscriptions include family sharing, so the whole family can learn together."
    },
    {
      question: "How long does it take to read Hebrew?",
      answer: "Most users can read basic Hebrew text within 2-4 weeks of consistent practice. The alphabet course takes about 30 minutes to complete, but fluent reading develops over time with our Reading Trainer. Daily practice of just 10-15 minutes significantly accelerates your progress."
    },
    {
      question: "What's the difference between plans?",
      answer: "The Free plan includes the alphabet course and basic features. Premium plans add the Reading Trainer, AI Scanner, offline access, no ads, and advanced analytics. Longer subscriptions (6-month and annual) include bonus content, family sharing, and exclusive features like live Q&A sessions."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time through your account settings or app store. Your access continues until the end of your current billing period. We also offer a 30-day money-back guarantee if you're not completely satisfied with your purchase."
    }
  ]

  return (
    <section className="py-section bg-white">
      <div className="container" style={{maxWidth: '56rem'}}>
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-3 fw-bold text-dark mb-4">
            Frequently Asked{' '}
            <span>
              Questions
            </span>
          </h2>
          <p className="fs-4 text-muted mx-auto" style={{maxWidth: '48rem', lineHeight: '1.6'}}>
            Everything you need to know about learning Hebrew with our app
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item border-0 mb-3">
              <div className="bg-light rounded-4 shadow-sm hover-shadow">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${!openItems.includes(index) ? 'collapsed' : ''} bg-light border-0 rounded-4 px-4 py-3 fw-semibold`}
                    type="button"
                    onClick={() => toggleItem(index)}
                    style={{
                      fontSize: '1.125rem',
                      boxShadow: 'none',
                      transition: 'background-color 0.2s ease'
                    }}
                  >
                    <span className="pe-3" style={{lineHeight: '1.4'}}>
                      {faq.question}
                    </span>
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${openItems.includes(index) ? 'show' : ''}`}>
                  <div className="accordion-body px-4 pb-4 pt-0">
                    <hr className="text-muted mb-3" style={{opacity: '0.3'}} />
                    <p className="text-muted mb-0" style={{lineHeight: '1.6'}}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-5 bg-light rounded-4 p-4 p-lg-5 text-center">
          <div className="mx-auto" style={{maxWidth: '42rem'}}>
            <h3 className="display-6 fw-bold text-dark mb-3">
              Still have questions?
            </h3>
            <p className="text-muted fs-5 mb-4">
              Our support team is here to help you succeed in your Hebrew learning journey
            </p>
            
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4">
              <a 
                href="mailto:hello@alefbettutor.com"
                className="btn btn-light border fw-semibold py-3 px-4 rounded-3 d-flex align-items-center justify-content-center gap-2"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email Support
              </a>
              
              <button className="btn btn-primary fw-semibold py-3 px-4 rounded-3 d-flex align-items-center justify-content-center gap-2">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.27-.27.35-.67.24-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
                </svg>
                Live Chat
              </button>
            </div>

            {/* Response Time */}
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-4 small text-muted">
              <div className="d-flex align-items-center gap-2">
                <div className="bg-success rounded-circle" style={{width: '0.5rem', height: '0.5rem'}}></div>
                <span>Usually responds in 1 hour</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div className="bg-primary rounded-circle" style={{width: '0.5rem', height: '0.5rem'}}></div>
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm hover-shadow text-center h-100">
                <div className="card-body p-4">
                  <div className="bg-dark rounded-4 d-flex align-items-center justify-content-center mx-auto mb-3"
                       style={{width: '3rem', height: '3rem'}}>
                    <svg className="text-white" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <h4 className="fw-semibold text-dark mb-2">Learning Guide</h4>
                  <p className="text-muted small mb-0">Step-by-step guide to get the most out of your Hebrew learning</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card border-0 shadow-sm hover-shadow text-center h-100">
                <div className="card-body p-4">
                  <div className="bg-dark rounded-4 d-flex align-items-center justify-content-center mx-auto mb-3"
                       style={{width: '3rem', height: '3rem'}}>
                    <svg className="text-white" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                  </div>
                  <h4 className="fw-semibold text-dark mb-2">Progress Tracking</h4>
                  <p className="text-muted small mb-0">Learn how to track your progress and stay motivated</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card border-0 shadow-sm hover-shadow text-center h-100">
                <div className="card-body p-4">
                  <div className="bg-dark rounded-4 d-flex align-items-center justify-content-center mx-auto mb-3"
                       style={{width: '3rem', height: '3rem'}}>
                    <svg className="text-white" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h4 className="fw-semibold text-dark mb-2">Best Practices</h4>
                  <p className="text-muted small mb-0">Tips and tricks from successful Hebrew learners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
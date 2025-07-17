'use client'

import { useState } from 'react'

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly')

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        'Basic alphabet course (22 letters)',
        'Audio pronunciation guide',
        'Writing practice',
        'Limited progress tracking',
        'Community access'
      ],
      limitations: [
        'No Reading Trainer',
        'No AI Text Scanner', 
        'Ads supported',
        'Limited offline access'
      ],
      buttonText: 'Get Started Free',
      buttonStyle: 'btn-outline-secondary',
      popular: false,
      color: 'gray'
    },
    {
      id: 'monthly',
      name: 'Premium Monthly',
      price: billingPeriod === 'monthly' ? '$9.99' : '$7.99',
      period: billingPeriod === 'monthly' ? 'per month' : 'per month',
      originalPrice: billingPeriod === 'yearly' ? '$9.99' : null,
      description: 'Full access to all features',
      features: [
        'Everything in Free',
        'Unlimited Reading Trainer',
        'AI Text Scanner with camera',
        'Advanced spaced repetition',
        'Offline access to all content',
        'No ads',
        'Priority support',
        'Progress analytics'
      ],
      buttonText: billingPeriod === 'monthly' ? 'Start Monthly Plan' : 'Start Annual Plan',
      buttonStyle: 'btn-primary-gradient',
      popular: true,
      color: 'primary'
    },
    {
      id: 'sixmonths',
      name: '6 Months',
      price: '$39.99',
      period: 'for 6 months',
      originalPrice: '$59.94',
      savings: 'Save $19.95',
      description: 'Great value for serious learners',
      features: [
        'Everything in Premium',
        '6 months of full access',
        'Advanced learning path',
        'Bonus Hebrew culture content',
        'Extended progress history',
        'Family sharing (up to 3 accounts)'
      ],
      buttonText: 'Choose 6 Months',
      buttonStyle: 'btn-secondary-gradient',
      popular: false,
      color: 'secondary'
    },
    {
      id: 'annual',
      name: 'Annual Plan',
      price: billingPeriod === 'yearly' ? '$79.99' : '$95.88',
      period: 'per year',
      originalPrice: billingPeriod === 'yearly' ? '$119.88' : '$119.88',
      savings: billingPeriod === 'yearly' ? 'Save $39.89' : 'Save $23.99',
      description: 'Best value for dedicated learners',
      features: [
        'Everything in Premium',
        '12 months of full access',
        'Premium Hebrew library access',
        'Live monthly Q&A sessions',
        'Certificate of completion',
        'Lifetime access to core alphabet',
        'Family sharing (up to 5 accounts)',
        '1-on-1 tutor session (30 min)'
      ],
      buttonText: 'Choose Annual Plan',
      buttonStyle: 'btn-accent-gradient',
      popular: false,
      color: 'accent'
    }
  ]

  return (
    <section className="py-section bg-light">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-3 fw-bold text-dark mb-4">
            Choose your{' '}
            <span className="gradient-primary-text">
              learning path
            </span>
          </h2>
          <p className="fs-4 text-muted mx-auto mb-4" style={{maxWidth: '48rem', lineHeight: '1.6'}}>
            Start free and upgrade anytime. All plans include our core alphabet course.
          </p>

          {/* Billing Toggle */}
          <div className="d-inline-flex align-items-center bg-white rounded-4 p-2 shadow">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`btn rounded-3 fw-semibold transition-all ${
                billingPeriod === 'monthly'
                  ? 'btn-primary shadow-sm'
                  : 'btn-link text-muted text-decoration-none'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`btn rounded-3 fw-semibold transition-all position-relative ${
                billingPeriod === 'yearly'
                  ? 'btn-primary shadow-sm'
                  : 'btn-link text-muted text-decoration-none'
              }`}
            >
              Annual
              <span className="ms-2 bg-success text-white badge rounded-pill" style={{fontSize: '0.65rem'}}>
                Save 33%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4">
          {plans.map((plan, index) => (
            <div key={plan.id} className="col-lg-3 col-md-6">
              <div
                className={`card h-100 shadow hover-transform border-0 position-relative overflow-hidden ${
                  plan.popular ? 'border-primary' : ''
                }`}
                style={{
                  borderRadius: '1.5rem',
                  animationDelay: `${index * 100}ms`,
                  transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                  border: plan.popular ? '2px solid var(--primary-color)' : 'none'
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <div className="gradient-primary text-white fw-bold px-3 py-2 rounded-pill shadow" style={{fontSize: '0.875rem'}}>
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="card-body p-4" style={{paddingTop: plan.popular ? '3rem' : '2rem'}}>
                  {/* Plan Header */}
                  <div className="text-center mb-4">
                    <h3 className="fs-3 fw-bold text-dark mb-2">{plan.name}</h3>
                    <p className="text-muted mb-4">{plan.description}</p>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <div className="d-flex align-items-baseline justify-content-center gap-2">
                        <span className="display-4 fw-bold text-dark">{plan.price}</span>
                        <span className="text-muted">/{plan.period}</span>
                      </div>
                      
                      {/* Original Price & Savings */}
                      {(plan.originalPrice || plan.savings) && (
                        <div className="mt-2">
                          {plan.originalPrice && (
                            <div className="text-muted text-decoration-line-through fs-5">
                              {plan.originalPrice}
                            </div>
                          )}
                          {plan.savings && (
                            <div className="text-success fw-semibold small">
                              {plan.savings}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button className={`btn w-100 py-3 fw-semibold ${plan.buttonStyle} hover-scale`}>
                      {plan.buttonText}
                    </button>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="fw-semibold text-dark small text-uppercase mb-3" style={{letterSpacing: '0.05em'}}>
                      What&apos;s included:
                    </h4>
                    <ul className="list-unstyled">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="d-flex align-items-start mb-3">
                          <div 
                            className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 me-3 ${
                              plan.color === 'gray' ? 'bg-light' : 
                              plan.color === 'primary' ? 'bg-primary-subtle' :
                              plan.color === 'secondary' ? 'bg-secondary-subtle' :
                              'bg-success-subtle'
                            }`}
                            style={{width: '1.25rem', height: '1.25rem', marginTop: '0.125rem'}}
                          >
                            <svg 
                              className={`${
                                plan.color === 'gray' ? 'text-muted' :
                                plan.color === 'primary' ? 'text-primary-custom' :
                                plan.color === 'secondary' ? 'text-secondary-custom' :
                                'text-success'
                              }`} 
                              width="12" height="12" fill="currentColor" viewBox="0 0 24 24"
                            >
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                          </div>
                          <span className="text-muted small">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Limitations for Free Plan */}
                    {plan.limitations && (
                      <div className="mt-4 pt-4 border-top">
                        <h4 className="fw-semibold text-dark small text-uppercase mb-3" style={{letterSpacing: '0.05em'}}>
                          Limitations:
                        </h4>
                        <ul className="list-unstyled">
                          {plan.limitations.map((limitation, i) => (
                            <li key={i} className="d-flex align-items-start mb-2">
                              <div 
                                className="rounded-circle bg-danger-subtle d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                                style={{width: '1.25rem', height: '1.25rem', marginTop: '0.125rem'}}
                              >
                                <svg className="text-danger" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                              </div>
                              <span className="text-muted small">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-5 text-center">
          {/* Money Back Guarantee */}
          <div className="bg-white rounded-4 p-4 p-md-5 shadow mb-5">
            <div className="row align-items-center justify-content-center g-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle gradient-accent d-flex align-items-center justify-content-center"
                       style={{width: '4rem', height: '4rem'}}>
                    <svg className="text-white" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="text-start">
                    <h3 className="fs-5 fw-bold text-dark mb-1">30-Day Money Back Guarantee</h3>
                    <p className="text-muted mb-0 small">Not satisfied? Get a full refund, no questions asked.</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle gradient-primary d-flex align-items-center justify-content-center"
                       style={{width: '4rem', height: '4rem'}}>
                    <svg className="text-white" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </div>
                  <div className="text-start">
                    <h3 className="fs-5 fw-bold text-dark mb-1">Secure Payment</h3>
                    <p className="text-muted mb-0 small">Your payment information is encrypted and secure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Link */}
          <div className="bg-light rounded-4 p-4">
            <h3 className="fs-5 fw-bold text-dark mb-2">Have questions about pricing?</h3>
            <p className="text-muted mb-4">Check our FAQ section or contact our support team.</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <button className="btn btn-light border fw-semibold">
                View FAQ
              </button>
              <button className="btn btn-primary fw-semibold">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
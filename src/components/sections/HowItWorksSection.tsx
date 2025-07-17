import GooglePlayButton from '@/components/ui/GooglePlayButton'

export default function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      title: 'Install & choose your goal',
      description: 'Download the app and tell us what you want to achieve. Whether it\'s reading signs or understanding texts, we\'ll customize your learning path.',
      color: 'primary',
      gradient: 'bg-primary-custom',
    },
    {
      step: 2,
      title: 'Finish 22 lessons',
      description: 'Master each Hebrew letter through interactive lessons. Practice your reading skills with real Hebrew texts anytime.',
      color: 'secondary',
      gradient: 'bg-primary-custom',
    },
    {
      step: 3,
      title: 'Smart spaced repetition system',
      description: 'Our smart spaced repetition system ensures you remember what you learn. Just 5 minutes daily keeps your Hebrew knowledge growing.',
      color: 'accent',
      gradient: 'bg-primary-custom',
    },
  ]

  return (
    <section className="py-section bg-light">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-3 fw-bold text-dark mb-4">
            How it{' '}
            <span>
              works
            </span>
          </h2>
          <p className="fs-4 text-muted mx-auto" style={{maxWidth: '48rem', lineHeight: '1.6'}}>
            Start reading Hebrew in just 3 simple steps. No prior knowledge needed.
          </p>
        </div>

        {/* Steps */}
        <div className="position-relative">
          {/* Connection Line */}
          <div className="d-none d-lg-block position-absolute top-50 start-0 end-0 translate-middle-y"
               style={{
                 height: '2px',
                 background: 'linear-gradient(to right, var(--primary-color), var(--secondary-color), var(--accent-color))',
                 opacity: '0.3'
               }}>
          </div>
          
          <div className="row g-4 g-lg-5">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="col-lg-4 position-relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Card */}
                <div className="card border-0 shadow hover-transform h-100 position-relative overflow-hidden"
                     style={{borderRadius: '1.5rem'}}>
                  
                  {/* Background Pattern */}
                  <div className="position-absolute top-0 end-0" style={{width: '8rem', height: '8rem', opacity: '0.05'}}>
                    <div className={`w-100 h-100 ${step.gradient} rounded-circle`}
                         style={{transform: 'translate(2rem, -2rem)'}}></div>
                  </div>

                  <div className="card-body p-4 position-relative" style={{zIndex: 10}}>
                    {/* Step Number */}
                    <div className="mb-4">
                      <div className={`d-inline-flex align-items-center justify-content-center ${step.gradient} text-white fw-bold fs-3 shadow step-number`}
                           style={{
                             width: '4rem', 
                             height: '4rem', 
                             borderRadius: '1rem',
                             transition: 'transform 0.3s ease'
                           }}>
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="fs-3 fw-bold text-dark mb-3" style={{lineHeight: '1.3'}}>
                      {step.title}
                    </h3>
                    
                    <p className="text-muted mb-4" style={{lineHeight: '1.6'}}>
                      {step.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="d-flex align-items-center gap-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-pill transition-all ${
                            i < step.step ? step.gradient : 'bg-secondary'
                          }`}
                          style={{
                            height: '0.5rem',
                            width: i === step.step - 1 ? '2rem' : '0.5rem'
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="d-lg-none d-flex justify-content-center mt-4 mb-4">
                    <div className={`${step.gradient} rounded-circle d-flex align-items-center justify-content-center`}
                         style={{width: '2rem', height: '2rem'}}>
                      <svg className="text-white" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-5">
          <div className="card border-0 shadow" style={{borderRadius: '1.5rem'}}>
            <div className="card-body p-4 p-lg-5">
              <div className="row g-4 text-center">

                <div className="col-md-4">
                  <h4 className="fs-3 fw-bold text-dark mb-2">30 Minutes</h4>
                  <p className="text-muted mb-0">to complete alphabet course</p>
                </div>

                <div className="col-md-4">
                  <h4 className="fs-3 fw-bold text-dark mb-2">94%</h4>
                  <p className="text-muted mb-0">completion rate for our courses</p>
                </div>

                <div className="col-md-4">
                  <h4 className="fs-3 fw-bold text-dark mb-2">5 Minutes</h4>
                  <p className="text-muted mb-0">daily practice keeps knowledge fresh</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-5 d-flex justify-content-center">
          <div className="gradient-secondary rounded-4 p-4 p-lg-5 text-white">
            <div className="d-flex flex-column flex-sm-row align-items-center gap-4 gap-sm-5">
              <div className="text-center text-sm-start">
                <h3 className="fs-3 fw-bold mb-2">Ready to start your Hebrew journey?</h3>
                <p className="mb-0" style={{opacity: '0.9'}}>Join thousands of successful learners today</p>
              </div>
              <GooglePlayButton 
                variant="dark" 
                size="lg" 
                text="Download"
                className="px-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
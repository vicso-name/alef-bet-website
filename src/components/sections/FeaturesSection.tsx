export default function FeaturesSection() {
  const features = [
    {
      id: 'alphabet',
      title: 'Alphabet Course',
      subtitle: 'All 22 letters with nikud',
      description: 'Learn shape, sound & writing in minutes',
      icon: 'font',
    },
    {
      id: 'lessons',
      title: 'Lessons',
      subtitle: 'Step-by-step lessons',
      description: 'Interactive lessons that adapt to your pace',
      icon: 'book',
    },
    {
      id: 'reading',
      title: 'Reading Trainer',
      subtitle: 'From letters to stories',
      description: 'Practice with graded texts & audio guidance',
      icon: 'file-earmark-text',
    },
    {
      id: 'scanner',
      title: 'AI Text Scanner',
      subtitle: 'Translate in one tap',
      description: 'Point camera at signs & menus for instant translation',
      icon: 'camera',
    },
  ]

  return (
    <section id="features" className="py-section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-3 fw-bold text-dark mb-4">
            Everything you need to{' '}
            <span>master Hebrew</span>
          </h2>
          <p className="fs-4 text-muted mx-auto" style={{ maxWidth: '48rem', lineHeight: '1.6' }}>
            From alphabet basics to reading real texts - our comprehensive approach gets you there fast
          </p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="col-lg-3 col-md-6"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className="card border-0 shadow h-100 position-relative overflow-hidden"
                style={{ borderRadius: '1rem' }}
              >
                <div className="card-body p-4 text-center">
                  {/* Bootstrap Icon */}
                  <div className="mb-4">
                    <i className={`bi bi-${feature.icon}`} style={{ fontSize: '2.5rem', color: '#2C3E50' }}></i>
                  </div>

                  <h3 className="fs-3 fw-bold text-dark mb-3">{feature.title}</h3>
                  <p className="fs-5 fw-semibold text-muted mb-3">{feature.subtitle}</p>
                  <p className="text-muted" style={{ lineHeight: '1.6' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Stats */}
        <div className="mt-5">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="display-4 fw-bold text-dark mb-2">22</div>
              <div className="text-muted">Hebrew Letters</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="display-4 fw-bold text-dark mb-2">100+</div>
              <div className="text-muted">Interactive Lessons</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="display-4 fw-bold text-dark mb-2">500+</div>
              <div className="text-muted">Practice Words</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="display-4 fw-bold text-dark mb-2">30</div>
              <div className="text-muted">Minutes to Start</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-5 d-flex justify-content-center">
          <div className="d-flex align-items-center gap-4 bg-light rounded-4 p-4 flex-wrap justify-content-center">
            <div className="d-flex" style={{ marginLeft: '-0.5rem' }}>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-circle border border-white border-2 d-flex align-items-center justify-content-center"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    marginLeft: '-0.5rem',
                    backgroundColor: '#E5EAF4',
                  }}
                >
                  <i className="bi bi-person-fill" style={{ color: '#000', fontSize: '1rem' }}></i>
                </div>
              ))}
            </div>
            <div className="text-center text-sm-start">
              <div className="fw-semibold text-dark">Join 2,500+ learners</div>
              <div className="text-muted">Start your Hebrew journey today</div>
            </div>
            <button className="btn btn-primary fw-semibold px-4 py-2 rounded-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

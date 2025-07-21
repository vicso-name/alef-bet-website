import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/api'

export const metadata = {
  title: 'Hebrew Learning Blog - Alef-Bet Tutor',
  description: 'Expert tips, guides, and resources for learning Hebrew alphabet, reading, and pronunciation.',
}

export default async function BlogPage() {
  const allPosts = await getAllPosts()
  const regularPosts = allPosts.filter(post => !post.featured)
  
  const categories = ['All', ...Array.from(new Set(allPosts.map(post => post.category.name)))]

 

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-light py-section">
          <div className="container">
            <div className="text-center">
              <h1 className="display-1 fw-bold text-dark mb-4">
                Hebrew Learning{' '}
                <span className="gradient-primary-text">
                  Blog
                </span>
              </h1>
              <p className="fs-3 text-muted mx-auto mb-4" style={{maxWidth: '48rem', lineHeight: '1.6'}}>
                Expert guides, tips, and insights to accelerate your Hebrew learning journey
              </p>
              
              {/* Search Bar */}
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                  <div className="position-relative">
                    <input
                      type="search"
                      placeholder="Search articles..."
                      className="form-control form-control-lg rounded-4 pe-5"
                      style={{paddingRight: '4rem'}}
                    />
                    <button className="btn position-absolute top-50 end-0 translate-middle-y me-2 rounded-3">
                      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-4 bg-white border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`btn fw-medium  ${
                    category === 'All'
                      ? 'bg-primary-custom text-white'
                      : 'btn-light text-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* All Posts */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="display-5 fw-bold text-dark mb-5 text-center">All Articles</h2>
            
            <div className="row g-4">
              {regularPosts.map((post) => (
                <div key={post.slug} className="col-md-6 col-lg-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="card border-0 shadow-sm hover-shadow h-100 text-decoration-none"
                    style={{borderRadius: '1rem'}}
                  >
                    {/* Image */}
                    <div className="position-relative"
                         style={{
                           aspectRatio: '16/9',
                           borderRadius: '1rem 1rem 0 0'
                         }}>
                      {post.featured_image ? (
                        <Image 
                          src={post.featured_image} 
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div style={{
                          background: 'linear-gradient(135deg, #94a3b8, #64748b)',
                          width: '100%',
                          height: '100%'
                        }} />
                      )}
                      <div className="position-absolute bottom-0 start-0 p-3">
                        <span className="badge bg-white text-dark fw-semibold small">
                          {post.category.name}
                        </span>
                      </div>
                    </div>
                    
                    <div className="card-body p-4 d-flex flex-column justify-content-between">
                      <h3 className="fs-5 fw-bold text-dark mb-3 regular-blog-title">
                        {post.title}
                      </h3>
                      <p className="text-muted small mb-3" style={{lineHeight: '1.6'}}>
                        {post.excerpt}
                      </p>
                      
                      <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-primary">
                          Read more →
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="display-5 fw-bold text-dark mb-4">
                  Never Miss a Hebrew Learning Tip
                </h2>
                <p className="col-lg-7 fs-5 text-dark mb-4 mx-auto" style={{opacity: '0.9'}}>
                  Get weekly articles, pronunciation guides, and exclusive learning resources delivered to your inbox
                </p>
                
                <form className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <div className="flex-grow-1" style={{maxWidth: '20rem'}}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="form-control form-control-lg rounded-3 form-control-blog"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-light text-dark fw-semibold px-4 py-3 rounded-3"
                  >
                    Subscribe
                  </button>
                </form>
                
                <div className="mt-3 text-white small" style={{opacity: '0.8'}}>
                  Join 5,000+ Hebrew learners. Unsubscribe anytime.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/api'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await getPostBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumbs */}
        <section className="bg-light py-3">
          <div className="container" style={{maxWidth: '56rem'}}>
            <nav className="d-flex align-items-center gap-2 small">
              <Link href="/" className="text-muted text-decoration-none">Home</Link>
              <span className="text-muted">/</span>
              <Link href="/blog" className="text-muted text-decoration-none">Blog</Link>
              <span className="text-muted">/</span>
              <span className="text-dark">{article.title}</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-5 bg-white">
          <div className="container" style={{maxWidth: '56rem'}}>
            <div className="text-center mb-5">
              <div className="d-inline-block bg-warning bg-opacity-25 text-warning fw-semibold px-3 py-2 rounded-pill mb-3 small">
                {article.category.name}
              </div>
              <h1 className="display-4 fw-bold text-dark mb-4" style={{lineHeight: '1.2'}}>
                {article.title}
              </h1>
              <p className="fs-5 text-muted mb-4 mx-auto" style={{lineHeight: '1.6', maxWidth: '48rem'}}>
                {article.excerpt}
              </p>
              
              <div className="d-flex align-items-center justify-content-center gap-4 text-muted">
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center blog-author-gradient"
                       style={{width: '3rem', height: '3rem', background: 'linear-gradient(135deg, #fb923c, #ef4444)'}}>
                    <span className="text-white fw-semibold">
                      {article.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-start">
                    <div className="fw-semibold text-dark">{article.author}</div>
                    <div className="small">
                      {new Date(article.published_at).toLocaleDateString()} • {article.read_time}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {article.featured_image && (
              <div className="position-relative mb-5" style={{aspectRatio: '16/9', borderRadius: '1rem', overflow: 'hidden'}}>
                <Image
                  src={article.featured_image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>
            )}
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-5 bg-white">
          <div className="container" style={{maxWidth: '56rem'}}>
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{lineHeight: '1.8'}}
            />

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-5 pt-4 border-top">
                <h3 className="fs-5 fw-semibold text-dark mb-3">Tags:</h3>
                <div className="d-flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-light text-muted px-3 py-2 rounded-pill small hover-tag cursor-pointer"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section - без изменений */}
        <section className="py-5 blog-cta-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="display-5 fw-bold text-white mb-4">
                  Ready to Start Learning Hebrew?
                </h2>
                <p className="fs-5 text-white mb-4" style={{opacity: '0.9'}}>
                  Download our app and master the Hebrew alphabet in just 30 minutes!
                </p>
                
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <button className="btn btn-light text-warning fw-semibold px-4 py-3 rounded-3">
                    📱 Get for iOS
                  </button>
                  <button className="btn btn-light text-warning fw-semibold px-4 py-3 rounded-3">
                    📱 Get for Android
                  </button>
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

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
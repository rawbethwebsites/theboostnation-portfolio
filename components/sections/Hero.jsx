import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from '../common/SplitText'
import GhostCursor from '../common/GhostCursor'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const ref = useRef(null)
  const logosRef = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const tl = gsap.timeline()
    // Split headline lines into spans for stagger
    tl.fromTo(logosRef.current, {opacity:0}, {opacity:1, duration:0.6}, '+=0.5')

    // Parallax background effect
    gsap.to(ref.current.querySelector('.hero-bg'), {
      y: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  }, [])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden" id="hero" style={{ height: '100vh' }}>
      <div style={{ height: '100vh', position: 'relative' }}>
        <GhostCursor
          color="#1ac80e"
        />
      </div>
      <div className="absolute inset-0 hero-bg bg-gradient-to-r from-blue-500 to-teal-400" style={{backgroundImage:'radial-gradient(circle at 20% -10%, rgba(255,255,255,0.2), transparent 40%), radial-gradient(circle at 80% 110%, rgba(255,255,255,0.15), transparent 40%)'}}/>
      <div className="container mx-auto px-6 relative z-10 grid gap-6 items-center" style={{maxWidth: 1000}}>
        <div className="text-left">
          <SplitText
            text="Welcome to The Boost Nation"
            tag="h1"
            className="text-4xl md:text-5xl font-extrabold mb-2 line"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            delay={50}
            duration={0.6}
            ease="power3.out"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between mt-4" aria-label="hero-actions">
          <button className="cursor-target px-6 py-3 bg-brand text-white rounded-md hover:bg-brand-dark">View Our Work</button>
          <div ref={logosRef} className="flex gap-6 opacity-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-20 h-8 bg-gray-200" aria-label={`client ${i+1}`} />
            ))}
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-700">50+ Projects Delivered</div>
      </div>
    </section>
  )
}

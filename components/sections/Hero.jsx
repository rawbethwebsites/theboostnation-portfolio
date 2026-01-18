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
      <div className="absolute inset-0 hero-bg bg-gradient-to-br from-brand via-brand-light to-teal-500" style={{backgroundImage:'radial-gradient(circle at 20% -10%, rgba(255,255,255,0.1), transparent 50%), radial-gradient(circle at 80% 110%, rgba(255,255,255,0.08), transparent 50%)'}}/>
      <div className="container mx-auto px-6 relative z-10 grid gap-8 items-center text-center" style={{maxWidth: 1200}}>
        <div>
          <SplitText
            text="Creative Agency Portfolio Template"
            tag="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-white drop-shadow-2xl"
            splitType="chars"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            delay={50}
            duration={0.8}
            ease="power3.out"
          />
          <SplitText
            text="Built for Agencies & Creators"
            tag="h2"
            className="text-xl md:text-3xl lg:text-4xl font-light mb-6 text-white/90 drop-shadow-lg"
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            delay={100}
            duration={0.6}
            ease="power2.out"
          />
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-md">
            Showcase your creative work with a stunning, fully customizable portfolio template.
            Designed to convert visitors into clients and collaborators.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-4">
            <button className="cursor-target px-8 py-4 bg-white text-brand font-semibold text-lg rounded-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-200 shadow-xl">
              View Our Work
            </button>
            <div className="text-white/70 text-sm md:text-base">
              <div className="font-bold text-2xl md:text-3xl text-white mb-1">50+</div>
              <div>Projects Delivered</div>
            </div>
          </div>
        </div>

        <div ref={logosRef} className="flex flex-wrap items-center justify-center gap-6 opacity-0 mt-8">
          <div className="text-white/60 text-sm font-medium">Trusted by:</div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-16 h-12 md:w-20 md:h-14 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 flex items-center justify-center">
              <span className="text-white/70 text-xs font-semibold">Client {i+1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

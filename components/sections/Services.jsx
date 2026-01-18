import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Button from '../ui/Button'

gsap.registerPlugin(ScrollTrigger)

export default function Services(){
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.fromTo(
      cardsRef.current,
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.15, duration: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    )
  }, [])

  const Card = ({ title, desc }) => (
    <div ref={el => cardsRef.current.push(el)} className="p-4 rounded-lg bg-white shadow hover:scale-105 transform transition-transform duration-200 hover:bg-slate-50">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-700">{desc}</p>
      <a href="#" className="text-brand mt-2 inline-block">Learn More</a>
    </div>
  )

  return (
    <section ref={sectionRef} id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">What We Do</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Brand Strategy" desc="Strategic brand positioning and identity design" />
          <Card title="Digital Design" desc="User-centered design for web and mobile" />
          <Card title="Web Development" desc="Fast, scalable, and fully responsive websites" />
        </div>
        <div className="mt-6 text-right">
          <button className="bg-brand text-white px-6 py-3 rounded-md">Explore All Services</button>
        </div>
      </div>
    </section>
  )
}

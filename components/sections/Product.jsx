import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Button from '../ui/Button'
import ElectricBorder from '../common/ElectricBorder'

gsap.registerPlugin(ScrollTrigger)

export default function Product(){
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const featuresRef = useRef([])

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.from(imageRef.current, {opacity:0, y:20, duration:0.8, scrollTrigger:{trigger: sectionRef.current, start:'top 80%'}})
    gsap.fromTo(featuresRef.current, {opacity:0}, {opacity:1, stagger:0.2, duration:0.5, scrollTrigger:{trigger: sectionRef.current, start:'top 60%'}})
    // pulse button handled via CSS animation
  }, [])

  const Feature = ({ text }) => (
    <li className="opacity-0" ref={el => featuresRef.current.push(el)} className="mb-2">{text}</li>
  )

  return (
    <section id="product" ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div ref={imageRef} className="h-80 w-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-md overflow-hidden" aria-label="Product visual">
          {/* Placeholder image */}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">This Template - Built For Creators Like You</h3>
          <p className="text-sm text-gray-700 mb-4">A customizable portfolio template designed to convert visitors into clients and collaborators.</p>
          <ul className="list-disc pl-5 mb-4" aria-label="features">
            <li className="opacity-0" ref={el => featuresRef.current.push(el)}>Lightning-Fast Performance</li>
            <li className="opacity-0" ref={el => featuresRef.current.push(el)}>Fully Mobile Responsive</li>
            <li className="opacity-0" ref={el => featuresRef.current.push(el)}>GSAP Animations Included</li>
          </ul>
          <ElectricBorder color="#7df9ff" speed={1} chaos={0.5} style={{ borderRadius: 16 }}>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold">$99</p>
                  <p className="text-sm text-gray-400">One-time purchase</p>
                </div>
                <Button>Get This Template</Button>
              </div>
            </div>
          </ElectricBorder>
        </div>
      </div>
      <blockquote className="mt-6 mx-auto max-w-3xl text-gray-700 italic">"Finally a portfolio that actually showcases my work professionally" - Sarah, Designer</blockquote>
    </section>
  )
}

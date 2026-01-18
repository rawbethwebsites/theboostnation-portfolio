import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Process(){
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    if (!sectionRef.current) return
    // line draw
    gsap.fromTo(lineRef.current, {scaleY:0, transformOrigin:'top top'}, {scaleY:1, duration:1, ease:'power1.out', scrollTrigger: {trigger: sectionRef.current, start:'top 80%'}})
    // steps fade in
    gsap.fromTo(stepsRef.current, {opacity:0, y:20}, {opacity:1, y:0, stagger:0.3, duration:0.4, scrollTrigger: {trigger: sectionRef.current, start:'top 80%'}})
  }, [])

  const Step = ({ idx, title, desc }) => (
    <div ref={el => stepsRef.current[idx] = el} className="bg-white p-4 rounded-md shadow-md mb-4">
      <div className="flex items-center mb-2"><span className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center mr-2">{idx+1}</span><h4 className="font-semibold">{title}</h4></div>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  )

  const steps = [
    { title:'Discovery & Strategy', desc:'Understanding client goals and success metrics.' },
    { title:'Design & Concept', desc:'Creative development and visual exploration.' },
    { title:'Development & Build', desc:'Technical implementation and optimization.' },
    { title:'Launch & Optimize', desc:'Performance and growth adjustments post-launch.' },
  ]

  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">How We Work</h2>
        <div className="relative pl-12" style={{minHeight: 360}}>
          <div ref={lineRef} className="absolute left-4 top-0 bottom-0 w-1 bg-brand" style={{transformOrigin:'top'}} />
          <div className="space-y-4">
            {steps.map((s, i) => (
              <Step key={i} idx={i} title={s.title} desc={s.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

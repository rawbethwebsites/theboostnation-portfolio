import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Work(){
  const sectionRef = useRef(null)
  const featRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return
    gsap.from(featRef.current, { opacity: 0, y: 20, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }})
    gsap.from(gridRef.current.querySelectorAll('.thumb'), { opacity:0, scale:0.98, stagger:0.2, duration:0.5, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } })
  }, [])

  const Thumb = ({ i }) => (
    <div className="overflow-hidden rounded-lg bg-gray-200 thumb relative" style={{height:150}}>
      <img src={`/images/thumb-${i}.jpg`} alt="project" className="w-full h-full object-cover" onError={e => e.target.style.display='none'} />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-2 text-sm">Project {i}</div>
    </div>
  )

  return (
    <section id="work" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Recent Projects</h2>
        <div ref={featRef} className="md:grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden" style={{minHeight:280}}>
            <div className="h-full w-full object-cover"/>
            <div className="p-4">
              <div className="text-sm text-gray-600 mb-1">Branding</div>
              <h3 className="text-xl font-semibold mb-2">Project Aurora</h3>
              <p className="text-sm text-gray-700">A concise 2-sentence brief about this featured project showcasing outcomes.</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col justify-center">
            <div className="text-sm text-gray-600 mb-1">Web Design</div>
            <h3 className="text-xl font-semibold">Project Nimbus</h3>
            <p className="text-sm text-gray-700">Brief snippet about the project and client impact in two sentences.</p>
          </div>
        </div>
        <div ref={gridRef} className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {Array.from({length:6}).map((_,i)=> (
            <Thumb key={i} i={i+1} />
          ))}
        </div>
      </div>
    </section>
  )
}

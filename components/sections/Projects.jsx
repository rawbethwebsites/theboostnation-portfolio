import React from 'react'
import DomeGallery from '../DomeGallery'

export default function Projects(){
  return (
    <section id="projects" style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        color: 'white',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
      }}>
        Our Projects
      </div>
      <DomeGallery
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}
        grayscale={false}
      />
    </section>
  )
}

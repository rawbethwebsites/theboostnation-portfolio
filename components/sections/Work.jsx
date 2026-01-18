import React from 'react'
import DomeGallery from '../common/DomeGallery'

export default function Work(){
  return (
    <section id="work" style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <DomeGallery
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}
        grayscale
      />
    </section>
  )
}

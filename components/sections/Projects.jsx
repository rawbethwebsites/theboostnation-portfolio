import React from 'react'
import DomeGallery from '../DomeGallery'

export default function Projects(){
  return (
    <section id="projects" style={{ width: '100vw', height: '100vh', position: 'relative', backgroundColor: '#000' }}>
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
      <div style={{
        position: 'absolute',
        top: '150px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 200px)',
        gap: '20px',
        zIndex: 5
      }}>
        {[1,2,3,4,5,6,7,8].map(num => (
          <div key={num} style={{
            width: '200px',
            height: '150px',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
          }}>
            <img
              src={`/images/projects/project-${num}.jpg`}
              alt={`Project ${num}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

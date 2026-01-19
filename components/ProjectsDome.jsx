import { useState } from 'react';
import DomeGallery from './DomeGallery';

const images = [
  '/images/projects/project-1.jpg',
  '/images/projects/project-2.jpg',
  '/images/projects/project-3.jpg',
  '/images/projects/project-4.jpg',
  '/images/projects/project-5.jpg',
  '/images/projects/project-6.jpg',
  '/images/projects/project-7.jpg',
  '/images/projects/project-8.jpg'
];

export default function ProjectsDome() {
  const [grayscale, setGrayscale] = useState(false);
  const [fit, setFit] = useState(0.8);
  const [minRadius, setMinRadius] = useState(600);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Controls */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '20px',
        borderRadius: '10px',
        color: 'white',
        fontFamily: 'monospace',
        fontSize: '14px'
      }}>
        <div style={{ marginBottom: '15px' }}>
          <label>
            <input
              type="checkbox"
              checked={grayscale}
              onChange={(e) => setGrayscale(e.target.checked)}
              style={{ marginRight: '8px' }}
            />
            Grayscale
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Fit: {fit.toFixed(2)}
            <br />
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.05"
              value={fit}
              onChange={(e) => setFit(parseFloat(e.target.value))}
              style={{ width: '100%', marginTop: '5px' }}
            />
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Min Radius: {minRadius}px
            <br />
            <input
              type="range"
              min="200"
              max="1000"
              step="50"
              value={minRadius}
              onChange={(e) => setMinRadius(parseInt(e.target.value))}
              style={{ width: '100%', marginTop: '5px' }}
            />
          </label>
        </div>
      </div>

      {/* Gallery */}
      <DomeGallery
        images={images}
        fit={fit}
        minRadius={minRadius}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}
        grayscale={grayscale}
      />
    </div>
  );
}

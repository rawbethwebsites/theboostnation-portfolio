import React from 'react'

export default function Card({ children, title, image, cta }) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
      {image && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img src={image} alt={title || 'image'} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        <div className="text-sm text-gray-700">{children}</div>
        {cta && <div className="mt-3">{cta}</div>}
      </div>
    </div>
  )
}

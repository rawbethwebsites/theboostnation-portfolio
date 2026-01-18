import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-brand text-white pt-8 pb-12">
      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-6 items-start">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full" />
          <span className="font-bold text-xl">The Boost Nation</span>
        </div>
        <nav className="flex flex-wrap gap-4">
          {['Home','Services','Portfolio','Blog','Contact'].map((t,i)=> (
            <a key={i} href={`#${t.toLowerCase()}`} className="hover:underline">{t}</a>
          ))}
        </nav>
        <div className="flex items-center justify-end space-x-2">
          <a href="#" aria-label="LinkedIn">🔗</a>
          <a href="#" aria-label="Instagram">🔗</a>
          <a href="#" aria-label="Twitter">🔗</a>
          <a href="#" aria-label="Behance">🔗</a>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-6 grid lg:grid-cols-2 gap-6">
        <div>
          <div className="text-sm">Email: hello@boostnation.ng</div>
          <div className="text-sm">Phone: +234 (your phone)</div>
          <div className="text-sm">Location: Abuja, FCT</div>
        </div>
        <div>
          <input aria-label="newsletter" placeholder="Your email" className="w-full p-3 rounded-md text-gray-900"/>
          <button className="mt-2 w-full bg-white text-brand px-4 py-2 rounded-md">Subscribe</button>
        </div>
      </div>
      <div className="text-center mt-6 text-sm">Copyright 2026 The Boost Nation. Privacy Policy. Terms of Service.</div>
    </footer>
  )
}

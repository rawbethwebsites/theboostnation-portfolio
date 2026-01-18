import React from 'react'

export default function Button({ children, className = '', ...rest }) {
  return (
    <button className={`px-5 py-3 rounded-md bg-brand text-white hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand ${className}`} {...rest}>
      {children}
    </button>
  )
}

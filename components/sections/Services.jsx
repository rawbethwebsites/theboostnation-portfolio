import React from 'react'
import FlowingMenu from '../common/FlowingMenu'

export default function Services(){
  const demoItems = [
    { link: '#', text: 'Brand Strategy', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Digital Design', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Web Development', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Creative Direction', image: 'https://picsum.photos/600/400?random=4' }
  ];

  return (
    <section id="services" style={{ height: '600px', position: 'relative' }}>
      <FlowingMenu
        items={demoItems}
        speed={15}
        textColor="#ffffff"
        bgColor="#060010"
        marqueeBgColor="#ffffff"
        marqueeTextColor="#060010"
        borderColor="#ffffff"
      />
    </section>
  )
}

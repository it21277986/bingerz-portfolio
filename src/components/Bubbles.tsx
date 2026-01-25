'use client'

import { useMemo } from 'react'

const randomColor = () => {
  const colors = [
    '#60a5fa', // blue-400
    '#f472b6', // pink-400
    '#34d399', // green-400
    '#fbbf24', // yellow-400
    '#a78bfa', // purple-400
    '#f87171', // red-400
    '#38bdf8', // sky-400
    '#facc15', // amber-400
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

const Bubbles = () => {
  // Only generate bubbles on the client
  const bubbles = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        size: 10 + Math.random() * 30,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 20,
        opacity: 0.2 + Math.random() * 0.3,
        color: randomColor(),
      })),
    []
  )

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="absolute bottom-0 rounded-full animate-bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            opacity: b.opacity,
            backgroundColor: b.color,
          }}
        />
      ))}
    </div>
  )
}

export default Bubbles

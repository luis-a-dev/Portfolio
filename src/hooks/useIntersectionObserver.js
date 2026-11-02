import { useState, useEffect } from 'react'

export default function useIntersectionObserver(ref, options = {}) {

  const [isVisible, setIsVisible] = useState(false)

  useEffect( () => {
    if(!ref.current) return

    const observer = new IntersectionObserver( ([entry]) => {
      if(entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, options )

    observer.observe(ref.current)

    return () => {
      if(ref.current) observer.unobserve(ref.current)
    }
  }, [ref, options] )

  return isVisible
}

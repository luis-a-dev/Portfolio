import { useEffect } from "react";

export function useParallax(ref, speed = 0.5) {
    useEffect( () => {
        const target = ref.current

        if(!target) return 

        const handleScroll = () => {
            const offset = window.scrollY * speed
            target.style.transform = `translateY(${offset}px)`
        }

        window.addEventListener('scroll', handleScroll, {passive: true})

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [ref, speed] )
}
import { useState, useEffect } from 'react'

function useScrollPosition(threshold = 0) {
    const [passedThreshold, setPassedThreshold] = useState(false)

    useEffect( () => {
        const handleScroll = () => {
            setPassedThreshold(window.scrollY > threshold)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [threshold] )

    return passedThreshold
}

export default useScrollPosition
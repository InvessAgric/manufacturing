import { useEffect, useRef } from 'react'

export default function useParallax(speed = 0.12, maxOffset = 48, scale = 1.08) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current

    if (!element || typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frameId = null

    const updatePosition = () => {
      frameId = null

      if (mediaQuery.matches) {
        element.style.setProperty('--parallax-y', '0px')
        element.style.setProperty('--parallax-scale', '1')
        return
      }

      const bounds = (element.parentElement ?? element).getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const elementCenter = bounds.top + bounds.height / 2
      const offset = (viewportCenter - elementCenter) * speed
      const clampedOffset = Math.max(Math.min(offset, maxOffset), -maxOffset)

      element.style.setProperty('--parallax-y', `${clampedOffset.toFixed(2)}px`)
      element.style.setProperty('--parallax-scale', String(scale))
    }

    const scheduleUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updatePosition)
      }
    }

    updatePosition()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    mediaQuery.addEventListener?.('change', scheduleUpdate)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      mediaQuery.removeEventListener?.('change', scheduleUpdate)
    }
  }, [maxOffset, scale, speed])

  return ref
}
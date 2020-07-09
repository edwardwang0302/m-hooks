import { useEffect, useRef } from 'react'

const useDebounce = (fn, ms = 100, deps = []) => {
  let timeout = useRef()

  const cancel = () => {
    clearTimeout(timeout.current)
    timeout = null
  }

  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      fn()
    }, ms)
    return () => {
      cancel()
    }
  }, deps)

  return cancel
}

export default useDebounce

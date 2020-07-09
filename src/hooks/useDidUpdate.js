import { useEffect, useRef } from 'react'

const useDidUpdate = (f, conditions) => {
  const didMountRef = useRef(false)
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true
      return
    }

    return f && f()
  }, conditions)
}

export default useDidUpdate

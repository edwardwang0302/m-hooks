import { useState } from 'react'

const useFocus = () => {
  const [focused, setFocused] = useState(false)
  return {
    focused,
    bind: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    }
  }
}

export default useFocus

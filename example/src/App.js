import React from 'react'
import { useDidMount, useField, useToggle } from 'm-hooks'

const App = () => {
  useDidMount(() => {
    console.log('didMount')
  })
  const { value, bind } = useField('')
  const { on, toggle, reset } = useToggle(false)
  return (
    <div>
      <input {...bind} />
      <div>
        <span>value:{value}</span>
      </div>

      <div>
        {String(on)}
        <button onClick={toggle}>toggle</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { useDebounce } from 'm-hooks'

const DebounceDemo = (props) => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const cancel = useDebounce(() => {
    setB(a)
  }, 2000, [a])

  const changeIpt = (e) => {
    setA(e.target.value)
  }
  return <div>
    <input type='text' onChange={changeIpt} />
    { b }
    <button onClick={cancel}>cancel</button>
  </div>
}

export default DebounceDemo

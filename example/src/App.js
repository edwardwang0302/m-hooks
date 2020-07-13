import React from 'react'
import { useFetch } from 'm-hooks'

const App = () => {
  const { response, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  )
  return (
    <div>
      <h1>useFetch Usage</h1>
      {loading && <p>加载中...</p>}
      {error && <p>出错了...</p>}
      {response && <p>{response.title}</p>}
    </div>
  )
}

export default App

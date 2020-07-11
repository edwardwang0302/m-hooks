
# m-hooks

> A set of reusable react hooks

[![NPM](https://img.shields.io/npm/v/m-hooks.svg)](https://www.npmjs.com/package/m-hooks) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![MIT](https://img.shields.io/badge/license-MIT-000000.svg)](https://img.shields.io/badge/license-MIT-000000.svg)
[![NPM](https://img.shields.io/npm/dw/m-hooks)](https://img.shields.io/npm/dw/m-hooks)


## Install

```bash
npm install --save m-hooks
```
or
```bash
yarn add  m-hooks
```

## Hooks

| Name                                                     | Arguments                          | Returns                                                      |
| -------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------ |
| [`useDebounce`](#useDebouncef-time-deps)                 | f, time, dependencies              | cancel                                                       |
| [`useThrottle`](#useThrottlef-time-deps)                 | f, time, dependencies              | cancel                                                       |
| [`useField`](#useFieldInitial)                           | initial                            | { value, set, reset, bind }                                  |
| [`useTitle`](#useTitleTitle)                             | title                              |                                                            |
| [`useDidMount`](#usedidmountf)                           | f                                  | -                                                            |
| [`useWillUnmount`](#usewillunmountf)                     | f                                  | -                                                            |
| [`useDidUpdate`](#usedidupdatef-deps)                    | f, dependencies                    | -                                                            |
| [`useToggle`](#useToggleInitial)                         | initial                            | { on, set, reset, toggle }                                   |
| [`useHover`](#useHover)                                  | -                                  | { hovered, bind }                                            |
| [`useFocus`](#useFocus)                                  | -                                  | { focused, bind }                                            |

### `useDebounce(f, time?, deps?)`
### `useThrottle(f, time?, deps?)`
```js
import { useDebounce, useThrottle } from 'm-hooks'

const debounceCancel = useDebounce(() => {
  // callback
}, 2000, [a])

const throttleCancel = useThrottle(() => {
  // callback
}, 2000, [a])
```

### `useTitle(title)`
```js
useTitle('document title')
```

### `useField(initial)`
```js
import {useField} from 'm-hooks'

const MyComponent = () => {
  const { value, bind } = useField('Type Here...')

  return (
    <div>
      input text:
      {value}
      <input type="text" {...bind} />
    </div>
  )
}
```

### `useDidMount(f)`
Similar to `componentDidMount` in React class component. 
#### Arguments
- `f: () => void`: f is  called when component did mount.
```js
useDidMount(() => {
  console.log('componentDidMount')
})
```

### `useWillUnmount(f)`
Close to the `componentWillUnmount` in React class component.
#### Arguments
- `f: () => void`: f is called when component will unmount.
```js
useWillUnmount(() => {
  console.log('componentWillUnmount')
})
```

### `useDidUpdate(f, deps?)`
Similar to `componentDidUpdate`, it only runs on updates.
#### Arguments
- `f: () => Function | void`: f is called on every updates. Like `useEffect`, f can return a clean-up function.
- `dependencies?: Array<any>`: Optional array for conditionally firing an effect, same as the second argument passed to `useEffect`.
```js
useDidUpdate(() => {
  console.log('ComponentDidUpdate')
})

useDidUpdate(() => {
  console.log('ComponentDidUpdate')
}, [dep1, dep2])
```

### `useToggle(initial)`
```js
import { useToggle } from 'm-hooks'

const Toggle = () => {
  const { on, toggle, reset } = useToggle(false)
  return (
    <div>
      {String(on)}
      <button onClick={toggle}>toggle</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}
```

### `useHover()`

``` js
import { useHover } from 'm-hooks'

const Hover = () => {
  const { hovered, bind } = useHover()
  return (
    <div>
      <div {...bind}>
        hovered:
        {String(hovered)}
      </div>
    </div>
  )
}
```

### `useFocus()`


## License

MIT © [edwardwang0302](https://github.com/edwardwang0302)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).

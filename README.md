# m-hooks

> A set of reusable react hooks

[![NPM](https://img.shields.io/npm/v/m-hooks.svg)](https://www.npmjs.com/package/m-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save m-hooks
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'm-hooks'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [edwardwang0302](https://github.com/edwardwang0302)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).

# react-show-overlay

> programmatically show dialogs in react.

[![NPM](https://img.shields.io/npm/v/react-show-overlay.svg)](https://www.npmjs.com/package/react-show-overlay) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-show-overlay
```

## Usage

```tsx
import React, { useCallback, useState } from 'react'

import { showOverlay } from 'react-show-overlay'

const OverlayModal = ({ _isOpen = true }: { _isOpen?: boolean }) => {
  const [isOpen, setOpen] = useState(_isOpen)
  return isOpen ? <div onClick={() => setOpen(false)}>content</div> : null
}

const Example = () => {
  const handleClick = useCallback(() => {
    showOverlay({
      children: <OverlayModal />
    })
  }, [])
  return (
    <div>
      main content.
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}
```

## License

MIT © [pritamsoni-hsr](https://github.com/pritamsoni-hsr)

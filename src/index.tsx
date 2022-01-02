import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.css'

type Props = {
  /**
   * @description the children component to show inside the dialog.
   */
  children: React.ReactNode
}

const rootNode = document.body
const domNode = document.createElement('div')
domNode.className = 'react-overlay-dialog-portal'

rootNode.append(domNode)

const observer = new MutationObserver(elements => {
  if (elements[0].removedNodes.length) {
    observer.disconnect()
    ReactDOM.unmountComponentAtNode(domNode)
  }
})

/**
 * @description programmatic api to show dialogs.
 */
export const showOverlay = (props: Props) => {
  ReactDOM.render(<div className={styles.backdrop}>{props.children}</div>, domNode!)
  domNode.childNodes.forEach(child => observer.observe(child, { childList: true }))
  // ReactDOM.createPortal(<div className={styles.backdrop}>{props.children}</div>, domNode!);
}

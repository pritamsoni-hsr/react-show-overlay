import React, { useState } from 'react'

import { mount } from '@cypress/react'
import { showOverlay } from '.'

type Props = {
  onClick: () => void
}

const overlayId = 'div.react-overlay-dialog-portal'

export const Shell = ({ onClick }: Props) => {
  return <button onClick={onClick}>click me to show overlay</button>
}

const OverlayElement = () => {
  const [isOpen, setOpen] = useState(true)
  const onClick = () => setOpen(false)
  return isOpen ? (
    <div onClick={onClick} className='modal-content'>
      modal content
    </div>
  ) : null
}

describe('show overlay programmatically', () => {
  it('should render child and remove on unmount', () => {
    const onClick = () => showOverlay({ children: <OverlayElement /> })
    mount(<Shell onClick={onClick} />)
    cy.get('button').should('contain', 'click me to show overlay')
    cy.get('button').click()
    cy.get(overlayId).should('exist')

    cy.get(overlayId).should('contain.text', 'modal content')

    cy.get('div.modal-content').click()
    expect(cy.get(overlayId).children.length).to.equal(0)
  })
})

import { render, screen } from '@testing-library/react'
import Home from './Home.jsx'
import { describe, it, expect } from 'vitest'
import React from 'react'

globalThis.React = React

describe('Home', () => {
  it('renders the homepage tagline', () => {
    render(<Home />)
    expect(
      screen.getByText('Bex & Oli: Diving the World')
    ).toBeTruthy()
    expect(
      screen.getByText('Exploring the world’s oceans, one dive at a time.')
    ).toBeTruthy()
  })
})

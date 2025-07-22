import { render, screen } from '@testing-library/react'
import Navbar from './Navbar.jsx'
import { describe, it, expect } from 'vitest'
import React from 'react'

// Ensure React is in scope for JSX in tested components
globalThis.React = React

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeTruthy()
    expect(screen.getByText('Dive Map')).toBeTruthy()
    expect(screen.getByText('Blog')).toBeTruthy()
    expect(screen.getByText('About')).toBeTruthy()
  })
})
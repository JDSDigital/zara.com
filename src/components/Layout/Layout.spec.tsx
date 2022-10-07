import { render, screen } from '@testing-library/react'

import { Layout } from './Layout'

describe('Layout', () => {
  it('renders', () => {
    render(<Layout>Children</Layout>)

    expect(screen.getByText(/podcaster/i)).toBeInTheDocument()
    expect(screen.getByText(/children/i)).toBeInTheDocument()
  })
})

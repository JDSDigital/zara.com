import { render, screen } from 'tests/app-test-utils'

import { Card } from './Card'

describe('Card', () => {
  it('renders', async () => {
    render(<Card>Children</Card>)

    expect(screen.getByText('Children')).toBeInTheDocument()
  })
})

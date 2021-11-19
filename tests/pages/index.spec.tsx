import { render } from '@testing-library/react'
import Home from '@codesmithy/pages/index'

describe('pages/home', () => {
  it('should load without issue', () => {
    const { container } = render(<Home />)

    expect(container).toBeInTheDocument()
  })
})
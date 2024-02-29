import { render, screen } from "@testing-library/react"
import { Text } from "./Text"

describe('Test', () => {
    it('renders correctly', () => {
        render(<Text displayText="Test" id="123" />);

        expect(screen.findByText('Test')).toBeTruthy();
    })
})

test('demo', () => {
    expect(true).toBe(true)
  })
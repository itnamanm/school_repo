import { fireEvent, render, screen } from "@testing-library/react"
import { Schools } from "./Schools";

jest.mock('../mocks/school-data.json', () => {
    return {
        default: [
            {
                "dbn": "1234",
                "school_name": "Testing 1",
                "overview_paragraph": 'Testing 1 overview'
            },
            {
                "dbn": "1235",
                "school_name": "Testing 2",
                "overview_paragraph": 'Testing 2 overview'
            }
        ],
        __esModule: true
    }
})

describe('Schools', () => {
    it('renders correctly', () => {
        render(<Schools />);

        expect(screen.getByText('1234 Testing 1')).toBeTruthy();
        expect(screen.getByText('1235 Testing 2')).toBeTruthy();
    })
    it('handle item click', () => {
        const {container} = render(<Schools />);

        const firstLiElement = container.querySelectorAll('li')[0];
        fireEvent.click(firstLiElement as Element);

        expect(screen.getByText('Testing 1 overview')).toBeTruthy();
    })
})
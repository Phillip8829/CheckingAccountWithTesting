import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {CheckingVersionTwo} from "../Componenets/CheckingVersionTwo";


test('One Button Should Be Enabled and one should be disabled', () => {
    render(<CheckingVersionTwo/>)
    const output = screen.getByRole('button', { name: "Submit New Account" });
    const output2 = screen.getByRole('button', { name: "testTwo" });
    expect(output).toBeEnabled()
    expect(output2).toBeDisabled()

})
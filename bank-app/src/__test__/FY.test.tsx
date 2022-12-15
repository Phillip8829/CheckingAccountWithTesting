import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import {CheckingVersionTwo} from "../Componenets/CheckingVersionTwo";


test('the clear button switches from AC to C when there is an entry', () => {
    render(<CheckingVersionTwo/>)
    const output = screen.getByRole('button', { name: "Submit New Account" });
    const output2 = screen.getByRole('button', { name: "testTwo" });
    expect(output).toBeEnabled()
    expect(output2).toBeDisabled()

})
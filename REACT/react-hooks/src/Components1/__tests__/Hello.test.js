import {render,screen,cleanup} from '@testing-library/react';
import Hellow from '../Hello';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'



test('should render todo compoennt', () => {

    render(<Hellow/>);

    const todoElement =screen.getAllByTestId('todo-1');
    expect(todoElement)
    
    
})

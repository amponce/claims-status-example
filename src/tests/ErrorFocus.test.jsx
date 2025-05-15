import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ExampleForm from '../pages/ExampleForm';
import { ErrorProvider } from '../components/ErrorProvider';

// Mock navigation function
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Error Focus Behavior in ExampleForm', () => {
  test('should focus on error message when validation fails', () => {
    // Arrange: Render the component with ErrorProvider
    render(
      <BrowserRouter>
        <ErrorProvider>
          <ExampleForm />
        </ErrorProvider>
      </BrowserRouter>
    );

    // Create a spy for the focus function
    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');

    // Act: Click the Submit button without filling required fields
    const submitButton = screen.getByText('Submit Form');
    fireEvent.click(submitButton);

    // Assert: Expect focus to be called
    expect(focusSpy).toHaveBeenCalled();
    
    // Check if error messages are shown
    expect(screen.getByText('Please enter your full name')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    expect(screen.getByText('Please select at least one service')).toBeInTheDocument();

    // Cleanup
    focusSpy.mockRestore();
  });
  
  test('should clear errors when user begins typing', () => {
    // Arrange: Render the component
    render(
      <BrowserRouter>
        <ErrorProvider>
          <ExampleForm />
        </ErrorProvider>
      </BrowserRouter>
    );
    
    // Trigger validation errors
    const submitButton = screen.getByText('Submit Form');
    fireEvent.click(submitButton);
    
    // Verify errors are shown
    expect(screen.getByText('Please enter your full name')).toBeInTheDocument();
    
    // Act: Enter text in the name field
    const nameInput = screen.getByLabelText('Full Name');
    fireEvent.input(nameInput, { target: { value: 'John Doe' } });
    
    // Assert: Error message should no longer be visible
    expect(screen.queryByText('Please enter your full name')).not.toBeInTheDocument();
  });
});

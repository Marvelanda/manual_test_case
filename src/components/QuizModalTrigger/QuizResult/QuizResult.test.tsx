import { QuizResult } from '@/components/QuizModalTrigger/QuizResult/QuizResult';
import { fireEvent, render, screen } from '@testing-library/react';

describe('QuizResult tests', () => {
  const mockOnBack = jest.fn();

  it('renders the final message', () => {
    render(<QuizResult finalMessage="You completed the quiz!" onBack={mockOnBack} />);

    expect(screen.getByText('You completed the quiz!')).toBeInTheDocument();
  });

  it('calls onBack when back button is clicked', () => {
    render(<QuizResult finalMessage="You completed the quiz!" onBack={mockOnBack} />);

    fireEvent.click(screen.getByText('Back'));

    expect(mockOnBack).toHaveBeenCalled();
  });
});

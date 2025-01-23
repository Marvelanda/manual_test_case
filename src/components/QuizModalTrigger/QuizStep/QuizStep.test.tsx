import { fireEvent, render, screen } from '@testing-library/react';

import { QuizStep } from '@/components/QuizModalTrigger/QuizStep/QuizStep';
import mockQuestions from '@/mocks/questions';

describe('QuizStep tests', () => {
  const mockOnAnswer = jest.fn();
  const mockOnBack = jest.fn();

  const { questions } = mockQuestions;

  it('renders question and options', () => {
    const { question, options } = questions[0];

    render(
      <QuizStep
        question={question}
        options={options}
        currentStepValue=""
        questionIndex={0}
        onAnswer={mockOnAnswer}
        onBack={mockOnBack}
      />,
    );

    expect(screen.getByText(question)).toBeInTheDocument();

    options.forEach((option) => {
      const { display } = option;

      expect(screen.getByText(display)).toBeInTheDocument();
    });
  });

  it('calls onAnswer when an option is clicked', () => {
    const { question, options } = questions[0];

    render(
      <QuizStep
        question={question}
        options={options}
        currentStepValue=""
        questionIndex={0}
        onAnswer={mockOnAnswer}
        onBack={mockOnBack}
      />,
    );

    const button = screen.getByText('Red');

    fireEvent.click(button);

    expect(mockOnAnswer).toHaveBeenCalledWith('red', false);
  });

  it('hides back button for the first question', () => {
    const { question, options } = questions[0];

    render(
      <QuizStep
        question={question}
        options={options}
        currentStepValue=""
        questionIndex={0}
        onAnswer={mockOnAnswer}
        onBack={mockOnBack}
      />,
    );

    const backButton = screen.getByTestId('back-button-id');

    expect(backButton).toHaveClass('invisible');
  });

  it('shows back button for non-first questions', () => {
    const { question, options } = questions[1];

    render(
      <QuizStep
        question={question}
        options={options}
        currentStepValue=""
        questionIndex={1}
        onAnswer={mockOnAnswer}
        onBack={mockOnBack}
      />,
    );

    const backButton = screen.getByTestId('back-button-id');

    expect(backButton).not.toHaveClass('invisible');
  });
});

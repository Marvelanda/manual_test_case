import { fireEvent, render, screen } from '@testing-library/react';

import mockQuestions from '@/mocks/questions';
import { QuizModalContent } from './QuizModalContent';

jest.mock('@/utils/questions.json', () => jest.requireActual('@/mocks/questions.ts'));

describe('QuizModalContent tests', () => {
  const { questions } = mockQuestions;

  it('renders the first question and its options', () => {
    render(<QuizModalContent />);

    const { question, options } = questions[0];

    expect(screen.getByText(question)).toBeInTheDocument();

    options.forEach((option) => {
      expect(screen.getByText(option.display)).toBeInTheDocument();
    });
  });

  it('handles answering a question and progresses to the next step', () => {
    render(<QuizModalContent />);

    fireEvent.click(screen.getByText('Red'));

    const { question } = questions[1];

    expect(screen.getByText(question)).toBeInTheDocument();
  });

  it('displays the final message when quiz is completed', () => {
    render(<QuizModalContent />);

    fireEvent.click(screen.getByText('Red'));
    fireEvent.click(screen.getByText('Cat'));

    expect(screen.getByText(/Great news!/i)).toBeInTheDocument();
  });

  it('handles rejection scenario', () => {
    render(<QuizModalContent />);

    fireEvent.click(screen.getByText('Green'));

    expect(
      screen.getByText(
        /Unfortunately, we are unable to prescribe this medication for you./i,
      ),
    ).toBeInTheDocument();
  });

  it('handles back navigation correctly', () => {
    render(<QuizModalContent />);

    fireEvent.click(screen.getByText('Red'));

    const backButton = screen.getAllByText('Back')[1];

    fireEvent.click(backButton);

    expect(screen.getByText(questions[0].question)).toBeInTheDocument();
  });
});

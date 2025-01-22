import { Option } from '@/components/QuizModalTrigger/QuizModalTrigger.types';

export interface QuizStepProps {
  question: string;
  options: Option[];
  questionIndex: number;
  currentStepValue?: string;
  onAnswer: (value: string, isRejection: boolean) => void;
  onBack: () => void;
}

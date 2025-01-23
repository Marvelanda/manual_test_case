import { Option } from '@/components/QuizModalTrigger/QuizModalTrigger.types';

export interface QuizStepProps {
  question: string;
  options: Option[];
  questionIndex: number;
  currentStepValue?: string | boolean;
  onAnswer: (value: string | boolean, isRejection: boolean) => void;
  onBack: () => void;
}

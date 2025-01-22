import { FC } from 'react';

import Button from '@/ui/Button/Button';

import { QuizResultProps } from './QuizResult.types';

export const QuizResult: FC<QuizResultProps> = ({ finalMessage, onBack }) => {
  return (
    <div className="p-5 w-full shrink-0">
      <div className="rounded p-5 border border-solid shadow-md">
        <div className="md:text-3xl xsm:text-2xl 3xsm:text-xl">{finalMessage}</div>

        <div className="mt-10 pt-5 border-t border-solid border-t-gray-200">
          <Button onClick={onBack}>Back</Button>
        </div>
      </div>
    </div>
  );
};

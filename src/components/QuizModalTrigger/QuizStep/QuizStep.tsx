import { FC } from 'react';
import { clsx } from 'clsx';
import DOMPurify from 'isomorphic-dompurify';

import Button from '@/ui/Button/Button';

import { QuizStepProps } from './QuizStep.types';

export const QuizStep: FC<QuizStepProps> = ({
  question,
  options,
  currentStepValue,
  questionIndex,
  onAnswer,
  onBack,
}) => {
  const canGoBack = questionIndex !== 0;

  return (
    <div
      className={
        'p-5 rounded border border-solid shadow-md flex flex-col items-center justify-center'
      }
    >
      <div className="md:text-3xl xsm:text-2xl 3xsm:text-xl text-center">{question}</div>

      <ul className="flex flex-wrap justify-center gap-5 mt-10">
        {options.map(({ value, display, isRejection }) => {
          const isActive = value === currentStepValue;
          const html = DOMPurify.sanitize(display);

          return (
            <li
              onClick={() => onAnswer(value, isRejection)}
              className={clsx([
                '2xl:w-[156px] 2xl:h-[156px]',
                'sm:w-[120px] sm:h-[120px]',
                '2xsm:w-[100px] 2xsm:h-[100px]',
                '3xsm:w-[90px] 3xsm:h-[90px]',
                'rounded flex items-center justify-center',
                'hover:cursor-pointer hover:border hover:border-solid hover:border-light-grey',
                isActive && 'border border-solid border-light-grey',
              ])}
              key={value}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        })}
      </ul>

      <div
        className={clsx([
          'mt-5 pt-5 border-t border-solid border-t-gray-200 flex w-full flex-col',
          !canGoBack && 'invisible',
        ])}
      >
        <Button className={'self-end'} onClick={onBack}>
          Back
        </Button>
      </div>
    </div>
  );
};

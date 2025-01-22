import { ReactNode, useCallback, useMemo, useState } from 'react';
import { clsx } from 'clsx';

import json from '@/utils/questions.json';

import { Questions } from '@/components/QuizModalTrigger/QuizModalTrigger.types';
import { QuizStep } from '@/components/QuizModalTrigger/QuizStep/QuizStep';

import { QuizResult } from '../QuizResult/QuizResult';
import { getFinalMessage } from './QuizModalContent.utils';

export const QuizModalContent = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finalMessage, setFinalMessage] = useState<ReactNode>('');

  const { questions } =
    useMemo(() => JSON.parse(JSON.stringify(json)) as Questions, []) || {};

  const questionsLength = questions.length;

  const handleAnswer = useCallback(
    (value: string, isRejection: boolean) => {
      setAnswers((prev) => {
        if (prev[step]) {
          const copiedArr = [...prev];
          copiedArr[step] = value;

          return copiedArr;
        }

        return [...prev, value];
      });

      if (isRejection) {
        const message = getFinalMessage(false);

        setFinalMessage(message);

        return;
      }

      if (step < questionsLength - 1) {
        setStep((step) => step + 1);

        return;
      }

      const message = getFinalMessage(true);

      setFinalMessage(message);
    },
    [questionsLength, step],
  );

  const handleBack = useCallback(() => {
    if (finalMessage) {
      setFinalMessage('');

      return;
    }

    setStep((step) => step - 1);
  }, [finalMessage]);

  return (
    <div
      className={clsx(
        'overflow-hidden mx-auto ',
        '2xl:max-w-[1200px] xl:max-w-[1000px] lg:max-w-[800px] md:max-w-[600px]',
        'sm:max-w-[500px] xsm:max-w-[450px] 2xsm:max-w-[380px] 3xsm:max-w-[300px]',
      )}
    >
      {!finalMessage ? (
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${step * 100}%)` }}
        >
          {questions.map(({ question, options }, index) => {
            return (
              <div key={question} className={'p-5 w-full shrink-0'}>
                <QuizStep
                  question={question}
                  options={options}
                  currentStepValue={answers[step]}
                  questionIndex={index}
                  onBack={handleBack}
                  onAnswer={handleAnswer}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <QuizResult finalMessage={finalMessage} onBack={handleBack} />
      )}
    </div>
  );
};

'use client';

import { useState } from 'react';

import Button from '@/ui/Button/Button';
import Modal from '@/ui/Modal/Modal';

import { QuizModalContent } from '@/components/QuizModalTrigger/QuizModalContent/QuizModalContent';

export const QuizModalTrigger = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => {
    setIsQuizOpen(true);
  };

  return (
    <>
      <Modal
        open={isQuizOpen}
        className="fixed inset-0 bg-white flex items-center justify-center"
      >
        <QuizModalContent />
      </Modal>

      <Button onClick={openQuiz}>Take the Quiz</Button>
    </>
  );
};

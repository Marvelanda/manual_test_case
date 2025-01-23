import Link from 'next/link';

import { UNSUCCESSFUL_RESULT_MESSAGE } from './QuizModalContent.constants';

export const getFinalMessage = (isSuccess: boolean) => {
  if (!isSuccess) {
    return UNSUCCESSFUL_RESULT_MESSAGE;
  }

  return (
    <>
      Great news! We have the perfect treatment for your hair loss. Proceed to{' '}
      <Link
        className="text-bloody-red"
        href="https://www.manual.co"
        target="_blank"
        rel="noopener noreferrer"
        passHref
      >
        www.manual.co
      </Link>
      , and prepare to say hello to your new hair!
    </>
  );
};

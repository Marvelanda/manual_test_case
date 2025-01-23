const mockQuestions = {
  questions: [
    {
      question: 'What is your favorite color?',
      options: [
        {
          value: 'red',
          display: 'Red',
          isRejection: false,
        },
        {
          value: 'blue',
          display: 'Blue',
          isRejection: false,
        },
        {
          value: 'green',
          display: 'Green',
          isRejection: true,
        },
      ],
    },
    {
      question: 'What is your favorite animal?',
      options: [
        {
          value: 'cat',
          display: 'Cat',
          isRejection: false,
        },
        {
          value: 'dog',
          display: 'Dog',
          isRejection: false,
        },
        {
          value: 'rat',
          display: 'Rat',
          isRejection: true,
        },
      ],
    },
  ],
};

export default mockQuestions;
